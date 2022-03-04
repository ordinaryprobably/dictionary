import { useRouter } from "next/router"

export default function WordIdPage() {
  const router = useRouter();

  return (
    <h1>This Page is {`/word/${router.query.specificWord}/${router.query.wordId}`}</h1>
  )
}