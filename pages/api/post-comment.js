import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  let result;

  try {
    const { comment, userId, wordId } = req.body;
  
    const postComment = await prisma.comment.create({
      data: {
        content: comment,
        wordId: wordId,
        authorId: userId
      }
    });
  
    result = true;
  } catch (error) {
    console.error(error);
    
    result = false;
  }

  return res.status(200).json({ success: result });
}