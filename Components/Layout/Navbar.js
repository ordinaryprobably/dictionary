import { useSession } from "next-auth/react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import NavBarBox from "../../StyledComponents/blocks/NavBar";
import Image from "next/image";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <NavBarBox>
      {!session && <SignIn />}
      <SearchBar />
      <NavBarBox.NavBar>
        <NavBarBox.Icon>
          <Link href="/">
            <div>
              <Image src="/images/home-icon.svg" width={60} height={60} />
            </div>
          </Link>
        </NavBarBox.Icon>
        <NavBarBox.Icon>
          <Link href="/submit">
            <div>
              <Image src="/images/submit-icon.svg" width={60} height={60} />
            </div>
          </Link>
        </NavBarBox.Icon>
        <NavBarBox.Icon>
          <Link href="/saved">
            <div>
              <Image src="/images/saved-icon.svg" width={60} height={60} />
            </div>
          </Link>
        </NavBarBox.Icon>
        <NavBarBox.Icon>
          <Link href="/profile">
            <div>
              <Image src="/images/profile-icon.svg" width={60} height={60} />
            </div>
          </Link>
        </NavBarBox.Icon>
      </NavBarBox.NavBar>
    </NavBarBox>
  );
}
