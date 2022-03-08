import { HearderLine } from '../../StyledComponents/elements/Hr';
import { BlueHeader, LightBlueHeader } from '../../StyledComponents/elements/Header';
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();

  if(status === 'authenticated') {
    return (
      <div>
        <BlueHeader>안녕,</BlueHeader>
        <LightBlueHeader>{session.user.name}</LightBlueHeader>
        <HearderLine />
      </div>
    )
  } else {
    return (
      <div>
        <BlueHeader>Dictionary</BlueHeader>
        <HearderLine />
      </div>
    )
  }
}