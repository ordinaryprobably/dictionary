import prisma from '../../lib/prisma'

export default async (req, res) => {
  let result;

  try {
    const { title, definition, userId } = req.body;
  
    const submission = await prisma.word.create({
      data: {
        title: title,
        meaning: definition,
        authorId: userId
      }
    });
    
    result = true;
  } catch (error) {
    console.error(error);
    
    result = false;
  }

  return res.status(400).json({ success: result });
}