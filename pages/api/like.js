import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  let result;
  let message;

  try {
    const { wordId, userId } = req.body;

    const check = await prisma.$queryRaw`
      select wordId
      from wordLike
      where authorId = ${userId} and wordId = ${wordId};
    `;

    if (check.length === 0) {
      await prisma.$queryRaw`
        insert into wordLike (wordId, authorId)
        values (${wordId}, ${userId});
      `;

      message = "Done";
    } else {
      await prisma.$queryRaw`
        delete from wordLike
        where wordId = ${wordId} and authorId = ${userId}
      `;

      message = "Undone";
    }

    result = true;
  } catch (error) {
    console.error(error);

    result = false;
  }

  return res.status(200).json({
    success: result,
    message,
  });
}
