import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import WordSummary from "../../../Components/Words/WordSummary";
import { BlueHeader } from "../../../StyledComponents/elements/Header";

// 현재, 한 번의 요청으로 DB 에서 3 번 요청받는 문제가 있음.
export default function SearchResults() {
  const [result, setResult] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetcher() {
      const results = await axios.post(`/api/search`, {
        keyword: router.query.word
      });

      setResult(results.data);
    }

    if(router && router.query) {
      fetcher();
    }
  }, [router]);

  return (
    <div>
      <BlueHeader>검색어: {router.query.word}</BlueHeader>
      {result.map(word => (
        <WordSummary word={word} key={word.id}/>
      ))}
    </div>
  )
}