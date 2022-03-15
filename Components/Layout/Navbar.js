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
        <div>
          <Link href="/">
            <NavBarBox.Icon>
              <Image src="/images/home-icon.svg" width={60} height={60} />
            </NavBarBox.Icon>
          </Link>
        </div>
        <div>
          <Link href="/submit">
            <NavBarBox.Icon>
              <Image src="/images/submit-icon.svg" width={60} height={60} />
            </NavBarBox.Icon>
          </Link>
        </div>
        <div>
          <Link href="/saved">
            <NavBarBox.Icon>
              <Image src="/images/saved-icon.svg" width={60} height={60} />
            </NavBarBox.Icon>
          </Link>
        </div>
        <div>
          <Link href="/profile">
            <NavBarBox.Icon>
              <Image src="/images/profile-icon.svg" width={60} height={60} />
            </NavBarBox.Icon>
          </Link>
        </div>
      </NavBarBox.NavBar>
    </NavBarBox>
  );
}
