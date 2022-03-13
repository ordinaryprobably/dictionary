import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  let result;
  let data;

  try {
    const { id } = req.body;
    data = await prisma.wordLike.count({
      where: {
        wordId: id,
      },
    });

    result = true;
  } catch (error) {
    console.error(error);

    result = false;
    data = 0;
  }

  return res.status(200).json({
    success: result,
    data: data,
  });
}
