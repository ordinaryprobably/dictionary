import { useSession } from "next-auth/react";
import Link from "next/link";
import classes from  '../../styles/Navbar.module.css';
import SearchBar from "./SearchBar";

export default function Navbar() {
  const { data: session, status } = useSession();

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
        {
        session
        ? (<div>
            <Link href='/api/auth/signout'><a>Sign out</a></Link>
          </div>)
        : (<div>
            <Link href='/api/auth/signin'><a>Sign in</a></Link>
          </div>)
        }
        <div>
          <Link href='/'>Profile</Link>
        </div>
      </div>
    </div>
  )
}