import Word from "../../../../Components/Words/Word";
import prisma from "../../../../lib/prisma";

export default function WordIdPage({ data }) {
  return <Word data={data} />;
}

export async function getServerSideProps(context) {
  const word = await prisma.word.findUnique({
    where: {
      id: Number(context.params.wordId),
    },
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
  });

  return {
    props: {
      data: JSON.parse(JSON.stringify(word)),
    },
  };
}
