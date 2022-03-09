import Layout from '../Components/Layout/Layout'
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import { UserIdProvider } from '../Components/Contexts/userId.context'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <UserIdProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserIdProvider>
    </SessionProvider>
  )
}