import prisma from '../../lib/prisma'

export default async (req, res) => {
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
    
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
  }

  return res.status(400).json({ success: false });
}