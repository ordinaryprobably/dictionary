import Word from "../../../../Components/Words/Word";
import prisma from "../../../../lib/prisma";


export default function WordIdPage({ data }) {
  return (
    <Word word={data}/>
  )
}

export async function getServerSideProps(context) {
  const word = await prisma.word.findUnique({
    where: {
      id: Number(context.params.wordId)
    }
  });

  return {
    props: {
      data: JSON.parse(JSON.stringify(word))
    }
  }
}
  // const q = `
  // select 
  //   words.id,
  //   words.title,
  //   words.meaning
  // from words
  // where words.id = ?;
  // `;
  // const query = await connect().query(q, [context.params.wordId]);
  // const data = query[0][0];
