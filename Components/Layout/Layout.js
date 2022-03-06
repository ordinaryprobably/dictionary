import Header from "./Header";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

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