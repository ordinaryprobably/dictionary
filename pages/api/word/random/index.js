import prisma from "../../../../lib/prisma";

export default async function hander(req, res) {
  let result;
  let data;

  try {
    const randomWord = await prisma.$queryRaw`
      select 
        id,
        title
      from Word 
      join WordLike 
        on Word.id = WordLike.wordId 
      group by Word.id 
      order by rand() limit 1;
    `;
    const { title, id } = randomWord[0];

    result = true;
    data = { title, id };
  } catch (error) {
    console.error(error);

    result = false;
    data = {};
  }

  res.status(200).json({
    success: result,
    data: data,
  });
}
