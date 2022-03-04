import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <main className="layout-main">
        {children}
      </main>
      <Navbar />
    </>
  )
}