import { connect } from "../../config/db";

/**
 * @description POST /api/count_likes
 */
export default async function handler(req, res) {
  try {
    const word_id = req.body.id;
    const q = `
    select 
      count(*) as likes 
    from word_likes
    where word_id = ?
    `;
    const query = await connect().query(q, [word_id]);

    return res.status(200).json({ likeNums: query[0][0].likes });
  } 
  catch (error) {
    console.error(error);
  }

  res.status(404).json({ success: false });
}