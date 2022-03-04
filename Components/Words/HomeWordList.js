import { useEffect, useState } from "react";
import WordSummary from "./WordSummary";

// React Hydration Error Fixed.
export default function HomeWordList({ words }) {
  const [value, setValue] = useState([]);
  const wordList = [];

  for(let word of words) {
    wordList.push(<WordSummary word={word} key={word.title}/>)
  }

  useEffect(() => {
    setValue(wordList);
  }, []);

  wordList.sort(() => Math.random() - 0.5);

  return (
    <>
      {value}
    </>
  )
}
