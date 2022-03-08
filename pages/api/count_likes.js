import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  try {
    const { id } = req.body;
    const likes = await prisma.wordLike.count({
      where: {
        wordId: id
      }
    })

    return res.status(200).json({ count: likes });
  } catch (error) {
    console.error(error);
  }

  return res.status(404).json({ success: false });
}