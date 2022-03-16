import { getSession, useSession } from "next-auth/react";
import prisma from "../lib/prisma";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Submitted from "../Components/Words/Submitted";
import ProfileBox from "../StyledComponents/blocks/Profile";
import { BlueHeader } from "../StyledComponents/elements/Header";
import { BoldSpan, LightSpan } from "../StyledComponents/elements/Span";

export default function ProfilePage({ posts }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <ProfileBox>
          <ProfileBox.Header>
            <BlueHeader>{session.user.name}</BlueHeader>
            <LightSpan>{session.user.email}</LightSpan>
          </ProfileBox.Header>
          <ProfileBox.GreyBox>
            <BoldSpan>사이트 언어 변경하기</BoldSpan>
            <ProfileBox.Select>
              <option>영어</option>
            </ProfileBox.Select>
          </ProfileBox.GreyBox>
          <BoldSpan>등록한 단어 ({posts.length} 개)</BoldSpan>
          <ProfileBox.Line />
          {posts.map((post) => (
            <Submitted key={post.id} post={post} />
          ))}
          <Link href="/api/auth/signout">
            <a
              onClick={(e) => {
                e.preventDefault();
                signOut({ callbackUrl: "/" });
              }}
            >
              <LightSpan>로그아웃</LightSpan>
            </a>
          </Link>
        </ProfileBox>
      </>
    );
  } else {
    return (
      <>
        <ProfileBox>
          <ProfileBox.Header>
            <BlueHeader>로그인 해주세요</BlueHeader>
          </ProfileBox.Header>
          <ProfileBox.GreyBox>
            <BoldSpan>사이트 언어 변경하기</BoldSpan>
            <ProfileBox.Select>
              <option>영어</option>
            </ProfileBox.Select>
          </ProfileBox.GreyBox>
        </ProfileBox>
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let userId = null;
  let posts = [];

  try {
    if (session) {
      const user = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      userId = user.id;

      posts = await prisma.word.findMany({
        where: {
          authorId: userId,
        },
        select: {
          id: true,
          title: true,
          createdAt: true,
          _count: {
            select: {
              WordLike: true,
            },
          },
        },
      });
    }
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
      userId,
    },
  };
}
