import prisma from "../../../../lib/prisma";

/**
 * @route GET /api/comments/[wordId]
 */
export default async function handler(req, res) {
  try {
    const { wordId } = req.query;
    const comments = await prisma.comment.findMany({
      where: {
        wordId: Number(wordId)
      },
      select: {
        content: true,
        createdAt: true,
        author: {
          select: {
            name: true
          }
        }
      }
    })

    return res.status(200).json({ count: comments });
  } catch (error) {
    console.error(error)
  }
}
// try {
//   const { wordId } = req.query;
//   const q = `
//   select 
//     comments.content,
//     date_format(comments.created_at, '%Y/%m/%d') as date,
//     users.username
//   from comments
//   inner join users
//     on comments.user_id = users.id
//   where comments.word_id = ?
//   `;
//   const query = await connect().query(q, [wordId]);
  
//   return res.status(200).json({ comments: query[0] });
// } 
// catch (error) {
//   console.error(error)
// }

// res.status(404).json({ success: false });