import prisma from '../../lib/prisma';

export default async (req, res) => {
  let result;

  try {
    const { userEmail, wordId } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail
      },
      select: {
        id: true
      }
    });

    const like = await prisma.wordLike.create({
      data: {
        wordId: wordId,
        authorId: user.id
      }
    })

    result = true;
  } catch (error) {
    console.error(error);

    result = false;
  }

  return res.status(200).json({ success: result });
}