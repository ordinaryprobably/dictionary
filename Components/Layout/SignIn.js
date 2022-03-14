import { LightSpan } from "../../StyledComponents/elements/Span";
import SignInBox from "../../StyledComponents/blocks/NavBar/SignIn";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <Link href="/api/auth/signin">
      <SignInBox
        onClick={() => {
          signIn("github", { callbackUrl: "/" });
        }}
      >
        <Image src="/images/github-icon-big.png" height={24} width={24} />
        <LightSpan>로그인해서 단어 등록하고 댓글 달기 🔑</LightSpan>
      </SignInBox>
    </Link>
  );
}
