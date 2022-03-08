import { useContext, useEffect } from 'react';
import { DispatchContext, WordContext } from '../Components/Contexts/word.context';
import Header from '../Components/Layout/Header';
import HomeWordList from '../Components/Words/HomeWordList';
import prisma from '../lib/prisma';

export default function Home({ posts }) {
  const word = useContext(WordContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    dispatch({
      type: 'DELETE_ALL',
    });
    dispatch({
      type: 'ADD',
      value: posts
    })
  }, []);

  return (
    <>
      <Header />
      <HomeWordList words={word} />
    </>
  )
}

export async function getServerSideProps() {
  try {
    const posts = await prisma.word.findMany({
      select: {
        id: true,
        title: true,
        meaning: true,
        _count: {
          select: {
            Comment: true,
            WordLike: true
          },
        },
      },
    });

    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts))
      }
    }
  } catch (error) {
    console.error(error);
  }
};