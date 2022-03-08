import { useSession } from "next-auth/react";
import Link from "next/link";
import classes from  '../../styles/Navbar.module.css';
import SearchBar from "./SearchBar";
import { signIn, signOut } from "next-auth/react";

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
          <Link href='/submit'>Submit</Link>
        </div>
        {
        session
        ? (<div>
            <Link href='/api/auth/signout'>
              <a onClick={e => {
                e.preventDefault();
                signOut();
              }}>Sign out</a>
            </Link>
          </div>)
        : (<div>
            <Link href='/api/auth/signin'>
              <a onClick={e => {
                e.preventDefault();
                signIn('github');
              }}>Sign in</a>
            </Link>
          </div>)
        }
        <div>
          <Link href='/'>Profile</Link>
        </div>
      </div>
    </div>
  )
}