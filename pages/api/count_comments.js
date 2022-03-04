import { connection } from "../../config/db";

export default async function handler(req, res) {
  try {
    const wordId = req.body.id;
    const q = 'select count(*) as total from comments where word_id = ?';
    const query = await connection.query(q, [wordId]);
    
    return res.status(200).json({ count: query[0][0].total } );
  } 
  catch (error) {
    console.error(error)
  }

  res.status(404).json({ success: false });
}
