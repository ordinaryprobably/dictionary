import { useRouter } from "next/router"
import Word from "../../../../Components/Words/Word";
import { connect } from "../../../../config/db";

export default function WordIdPage({ data }) {
  const router = useRouter();

  return (
    <div>
      <h1>This Page is {`/word/${router.query.wordName}/${router.query.wordId}`}</h1>
      <Word word={data}/>
    </div>  
  )
}

export async function getServerSideProps(context) {
  const q = `
  select 
    words.id,
    words.title,
    words.meaning
  from words
  where words.id = ?;
  `;
  const query = await connect().query(q, [context.params.wordId]);
  const data = query[0][0];

  return {
    props: {
      data
    }
  }
}