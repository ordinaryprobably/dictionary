import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  let result;
  let message;

  try {
    const { wordId, userId } = req.body;

    const check = await prisma.$queryRaw`
      select wordId 
      from save 
      where authorId = ${userId} and wordId = ${wordId};
    `;

    if (check.length === 0) {
      await prisma.$queryRaw`
        insert into save (wordId, authorId)
        values (${wordId}, ${userId});
      `;

      message = "Done";
    } else if (check.length > 0) {
      await prisma.$queryRaw`
        delete from save 
        where wordId = ${wordId} and authorId = ${userId};
      `;

      message = "Undone";
    }

    result = true;
  } catch (error) {
    console.error(error);

    result = false;
  }

  res.status(200).json({
    success: result,
    message,
  });
}
