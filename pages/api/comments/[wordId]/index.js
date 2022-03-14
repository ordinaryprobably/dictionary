import prisma from "../../../../lib/prisma";

/**
 * @route GET /api/comments/[wordId]
 */
export default async function handler(req, res) {
  let result;
  let data;

  try {
    const { wordId } = req.query;
    data = await prisma.comment.findMany({
      where: {
        wordId: Number(wordId),
      },
      select: {
        id: true,
        content: true,
        createdAt: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    result = true;
  } catch (error) {
    console.error(error);

    result = false;
    data = [];
  }

  return res.status(200).json({
    success: result,
    data: data,
  });
}
