import Header from '../Components/Layout/Header';
import HomeWordList from '../Components/Words/HomeWordList';
import prisma from '../lib/prisma';

export default function Home({ posts }) {
  return (
    <>
      <Header />
      <HomeWordList words={posts} />
    </>
  )
}

export async function getServerSideProps() {
  try {
    const posts = await prisma.word.findMany();
  
    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts))
      }
    }
  } catch (error) {
    console.error(error);
  }
};
// const q = 
// `select 
// id,
// title, 
// meaning, 
// date_format(created_at, "%Y %M %d") as created_at from words`;
// const query = await connect().query(q);
// const result = query[0];

// return { 
//   props: {
//     result
//   }
// }

// const post = await prisma.word.create({
//   data: {
//     title: req.body.title,
//     meaning: req.body.meaning,
//     authorId: user.id
//   }
// });