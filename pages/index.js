import { getSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { DispatchIdContext } from "../Components/Contexts/userId.context";
import Header from "../Components/Layout/Header";
import HomeWordList from "../Components/Words/HomeWordList";
import TodayWord from "../Components/Words/TodayWord";
import prisma from "../lib/prisma";
import { Line } from "../StyledComponents/elements/Hr";

export default function Home({ posts, userId }) {
  const [words, setWords] = useState([]);
  const dispatchId = useContext(DispatchIdContext);

  useEffect(() => {
    dispatchId({
      type: "ADD",
      value: userId,
    });
    localStorage.setItem("userId", userId);
    setWords(posts);
  }, []);

  return (
    <>
      <Header />
      <TodayWord />
      <Line />
      <HomeWordList words={words} />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let userId = null;

  try {
    if (session) {
      const user = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      userId = user.id;
    }

    const posts = await prisma.word.findMany({
      select: {
        id: true,
        title: true,
        meaning: true,
        _count: {
          select: {
            Comment: true,
            WordLike: true,
          },
        },
        WordLike: {
          select: {
            authorId: true,
            wordId: true,
          },
        },
      },
    });

    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),
        userId,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
