import prisma from "../../../../lib/prisma";

export default async (req, res) => {
  let result;

  try {
    const { wordId, userId, doLike } = req.body;
    console.log(req.body);
    if (doLike) {
      const like = await prisma.wordLike.create({
        data: {
          wordId: wordId,
          authorId: userId,
        },
      });
    } else {
      const unlike = await prisma.$queryRaw`
        delete from wordLike where wordId = ${wordId} && authorId = ${userId}
      `;
      // const unlike = await prisma.wordLike.delete({
      //   where: {
      //     wordId: wordId,
      //     authorId: userId,
      //   },
      // });
    }

    result = true;
  } catch (error) {
    console.error(error);

    result = false;
  }

  return res.status(200).json({ success: result });
};
