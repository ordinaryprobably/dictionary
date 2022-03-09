import prisma from '../../lib/prisma'

export default async (req, res) => {
  let result;

  try {
    const { title, definition, email } = req.body;
  
    const user = await prisma.user.findUnique({
      where: {
        email: email
      },
      select: {
        id: true
      }
    });
  
    const submission = await prisma.word.create({
      data: {
        title: title,
        meaning: definition,
        authorId: user.id
      }
    });
    
    result = true;
  } catch (error) {
    console.error(error);
    
    result = false;
  }

  return res.status(400).json({ success: result });
}