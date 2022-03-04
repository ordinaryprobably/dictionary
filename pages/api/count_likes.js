import { connection } from "../../config/db";

export default async function handler(req, res) {
  try {
    // like 못 받은 글도 최소 1 개가 뜨는 문제 해결 안 됨.
    const q = `
    select 
      count(*) as likes 
    from words 
    inner join word_likes 
      on words.id = word_likes.word_id 
    group by words.id`;
    
    
  } 
  catch (error) {
    
  }
}