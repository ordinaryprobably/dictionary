import WordSummary from "./WordSummary";

// React Hydration Error Fixed.
export default function HomeWordList({ words }) {
  const list = words.map(word => (
    <WordSummary word={word} key={word.id} />
  ))

  list.sort(() => Math.random() - 0.5);

  return (
    <>
      {list}
    </>
  )
}
