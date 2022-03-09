import Word from "../../../../Components/Words/Word";
import prisma from "../../../../lib/prisma";


export default function WordIdPage({ data }) {
  return (
    <Word data={data}/>
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