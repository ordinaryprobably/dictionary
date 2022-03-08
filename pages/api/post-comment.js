import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  try {
    const { comment, userEmail, wordId } = req.body;
  
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail
      },
      select: {
        id: true
      }
    });
  
    const postComment = await prisma.comment.create({
      data: {
        content: comment,
        wordId: wordId,
        authorId: user.id
      }
    });
  
    return res.status(200).json(postComment);
  } catch (error) {
    console.error(error);
  }

  return res.status(404).json({ success: false });
}