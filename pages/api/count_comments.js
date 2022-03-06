import { connect } from "../../config/db";

export default async function handler(req, res) {
  try {
    const wordId = req.body.id;
    const q = 'select count(*) as total from comments where word_id = ?';
    const query = await connect().query(q, [wordId]);
    
    return res.status(200).json({ commentNums: query[0][0].total } );
  } 
  catch (error) {
    console.error(error)
  }

  res.status(404).json({ success: false });
}
