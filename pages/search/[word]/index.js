import axios from "axios";
import WordSummary from "../../../Components/Words/WordSummary";
import { BlueHeader } from "../../../StyledComponents/elements/Header";
import { Line } from "../../../StyledComponents/elements/Hr";
import { LightBlueHeader, Span } from "../../../StyledComponents/elements/Span";

export async function getServerSideProps(context) {
  let results;

  try {
    const { word } = context.query;

    results = await axios.post("http://localhost:3000/api/search", {
      keyword: word,
    });
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
  console.log(searchResult);
  return (
    <>
      <BlueHeader marginBot={20}>
        <LightBlueHeader>검색어:</LightBlueHeader>
      </BlueHeader>
      <Line />
      {searchResult.map((word) => (
        <WordSummary word={word} key={word.id} />
      ))}
    </>
  );
}
