import prisma from "../../lib/prisma";

export default async (req, res) => {
  let result;
  let data;

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

      data = "Saved";
    } else if (check.length > 0) {
      await prisma.$queryRaw`
        delete from save 
        where wordId = ${wordId} && authorId = ${userId};
      `;

      data = "Unsaved";
    }

    result = true;
  } catch (error) {
    console.error(error);

    result = false;
  }

  res.status(200).json({
    success: result,
    data,
  });
};
