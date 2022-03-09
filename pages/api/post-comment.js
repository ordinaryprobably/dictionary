import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  let result;

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
  
    result = true;
  } catch (error) {
    console.error(error);
    
    result = false;
  }

  return res.status(200).json({ success: result });
}