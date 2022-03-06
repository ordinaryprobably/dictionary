import Link from "next/link";
import classes from  '../../styles/Navbar.module.css';
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className={classes.wrap}>
      <SearchBar />
      <div className={classes.navbar}>
        <div>
          <Link href='/'>Home</Link>
        </div>
        <div>
          <Link href='/'>Submit</Link>
        </div>
        <div>
          <Link href='/'>Saved</Link>
        </div>
        <div>
          <Link href='/'>Profile</Link>
        </div>
      </div>
    </div>
  )
}