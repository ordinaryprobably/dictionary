import Header from '../Components/Layout/Header';
import HomeWordList from '../Components/Words/HomeWordList';
import { connection } from '../config/db';

export default function Home({ result }) {
  

  return (
    <>
      <Header />
      <HomeWordList words={result} />
    </>
  )
}

export async function getServerSideProps() {
  const q = 
  `select 
  id,
  title, 
  meaning, 
  date_format(created_at, "%Y %M %d") as created_at from words`;

  const query = await connection.query(q);
  const result = query[0];

  return { 
    props: {
      result
    }
  }
}
/**
select title, meaning, count(*) as likes
from words
inner join word_likes 
  on words.id = word_likes.word_id
group by words.id;
 */