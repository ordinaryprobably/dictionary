import Link from "next/link";
import TodayBox from "../../StyledComponents/blocks/TodayWord";
import { useFetch } from "../Hooks/useFetch";

export default function TodayWord() {
  const { data, loading, error } = useFetch("/api/word/random");

  if (data) {
    return (
      <>
        <Link href={`/word/${data.title}/${data.id}`}>
          <TodayBox>
            <TodayBox.Text marginBot={10}>추천 단어</TodayBox.Text>
            <TodayBox.Word>
              <TodayBox.Text>{data.title}</TodayBox.Text>
              <img src="/images/right-arrow.svg" />
            </TodayBox.Word>
          </TodayBox>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <TodayBox>
          <TodayBox.Text marginBot={10}>추천 단어</TodayBox.Text>
          <TodayBox.Word>
            <TodayBox.Text>loading...</TodayBox.Text>
            <img src="/images/right-arrow.svg" />
          </TodayBox.Word>
        </TodayBox>
      </>
    );
  }
}
