import prisma from "../../../lib/prisma";

/**
 * HOW TO ORDER BY RELEVANCE
 * https://www.tutorialspoint.com/how-to-order-by-relevance-in-mysql
select max(UserId)as Id,UserName from OrderByRelevance
where UserName like '%Carol%' group by UserName
order by 
  case when UserName like 'Carol%' THEN 0
    WHEN UserName like '% %Carol% %' THEN 1
    WHEN UserName like '%Carol' THEN 2
    else 3
  end, 
  UserName;
*/

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