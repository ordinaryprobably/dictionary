import { connect } from "../../../../config/db";

export default async function handler(req, res) {
  
  try {
    const { wordId } = req.query;
    const q = `
    select 
      comments.content,
      date_format(comments.created_at, '%Y/%m/%d') as date,
      users.username
    from comments
    inner join users
      on comments.user_id = users.id
    where comments.word_id = ?
    `;
    const query = await connect().query(q, [wordId]);
    
    return res.status(200).json({ comments: query[0] });
  } 
  catch (error) {
    console.error(error)
  }

  res.status(404).json({ success: false });
}