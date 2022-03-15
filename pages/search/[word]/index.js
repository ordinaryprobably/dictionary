import axios from "axios";
import { useRouter } from "next/router";
import WordSummary from "../../../Components/Words/WordSummary";
import { BlueHeader } from "../../../StyledComponents/elements/Header";
import { Line } from "../../../StyledComponents/elements/Hr";
import { LightBlueHeader } from "../../../StyledComponents/elements/Span";

export async function getServerSideProps(context) {
  let results;

  try {
    const { word } = context.query;

    results = await axios.post(
      "http://ordinary-probably-nextjs-prisma.vercel.app/api/search",
      {
        keyword: word,
      }
    );
  } catch (error) {
    console.error(error);

    results = {
      data: {
        data: [],
      },
    };
  }

  return {
    props: {
      searchResult: results.data.data,
    },
  };
}

export default function SearchResults({ searchResult }) {
  const router = useRouter();

  if (searchResult.length === 0) {
    return (
      <>
        <BlueHeader marginBot={20}>
          <LightBlueHeader>검색 결과: </LightBlueHeader>
          없음
        </BlueHeader>
        <Line />
      </>
    );
  }
  return (
    <>
      <BlueHeader marginBot={20}>
        <LightBlueHeader>검색어: </LightBlueHeader>
        {router.query.word}
      </BlueHeader>
      <Line />
      {searchResult.map((word) => (
        <WordSummary word={word} key={word.id} />
      ))}
    </>
  );
}
