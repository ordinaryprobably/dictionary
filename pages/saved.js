import prisma from "../lib/prisma";
import { getSession, useSession } from "next-auth/react";
import { BlueHeader } from "../StyledComponents/elements/Header";
import { Line, ThickLine } from "../StyledComponents/elements/Hr";
import WordSummary from "../Components/Words/WordSummary";

export default function SavedPage({ savedPosts }) {
  const { data: session } = useSession();

  return (
    <>
      <BlueHeader>저장한 단어들</BlueHeader>
      <ThickLine marginTop={20} />
      {session &&
        savedPosts.map((save) => (
          <WordSummary word={save.word} key={save.word.id} />
        ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let userId = null;
  let savedPosts;

  try {
    if (session) {
      const user = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      userId = user.id;

      savedPosts = await prisma.save.findMany({
        where: {
          authorId: userId,
        },
        include: {
          word: {
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
              Save: {
                select: {
                  authorId: true,
                  wordId: true,
                },
              },
            },
          },
        },
      });
    } else {
      savedPosts = {};
    }
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      savedPosts: JSON.parse(JSON.stringify(savedPosts)),
    },
  };
}
