import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import WordSummary from "../../../Components/Words/WordSummary";
import { BlueHeader } from "../../../StyledComponents/elements/Header";
import { Line } from "../../../StyledComponents/elements/Hr";
import { LightBlueHeader, Span } from "../../../StyledComponents/elements/Span";

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

  if(result.length !== 0) {
    return (
      <>
        <BlueHeader marginBot={20}>
          <LightBlueHeader>검색어:</LightBlueHeader> {router.query.word}
        </BlueHeader>
        <Line/>
        {result.map(word => (
          <WordSummary word={word} key={word.id}/>
        ))}
      </>
    )
  } else {
    return (
      <>
        <BlueHeader>
          <LightBlueHeader>검색어:</LightBlueHeader> {router.query.word}
        </BlueHeader>
        <Span>검색 결과가 없습니다.</Span>
      </>
    )
  }
}