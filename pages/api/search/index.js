import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { keyword } = req.body;

  if(keyword) {
    const words = await prisma.word.findMany({
      where: {
        title: {
          contains: keyword
        }
      },
      select: {
        id: true,
        title: true,
        meaning: true,
        _count: {
          select: {
            Comment: true,
            WordLike: true
          },
        },
      },
      orderBy: {
        title: 'desc'
      }
    })
  
    return res.status(200).json(words)
  } 
}