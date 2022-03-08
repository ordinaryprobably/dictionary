import Layout from '../Components/Layout/Layout'
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import { WordProvider } from '../Components/Contexts/word.context'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <WordProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WordProvider>
    </SessionProvider>
  )
}