import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRef, useState, useContext } from "react";
import SubmitBox from "../StyledComponents/blocks/SubmitForm";
import { BlueHeader } from "../StyledComponents/elements/Header";
import { Line } from "../StyledComponents/elements/Hr";
import { SuccessText, WarningText } from "../StyledComponents/elements/Span";
import { UserIdContext } from '../Components/Contexts/userId.context';

export default function SubmitPage() {
  const [successMsg, setSuccessMsg] = useState(false);
  const { data: session } = useSession();
  const userId = useContext(UserIdContext)
  const router = useRouter();
  const formRef = useRef();
  const titleRef = useRef();
  const definitionRef = useRef();

  const handleSubmit = async e => {
    e.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredDef = definitionRef.current.value;
    const result = await axios.post('/api/submit', {
      title: enteredTitle,
      definition: enteredDef,
      userId: userId
    })

    formRef.current.reset();
    setSuccessMsg(true);
    router.push('/');
  }

  if(successMsg) {
    setTimeout(() => {
      setSuccessMsg(false);
    }, 3000);
  }

  if(session) {
    return (
      <>
        <BlueHeader marginBot={20}>단어 등록</BlueHeader>
        <Line/>
        <SubmitBox>
          <form ref={formRef} onSubmit={handleSubmit}>
            <SubmitBox.Guide>
              단어
            </SubmitBox.Guide>
            <SubmitBox.Title
              type='text'
              name='title'
              ref={titleRef}
              autoComplete='off'
              placeholder='단어를 입력하세요.'
              required
            />
            <SubmitBox.Guide>
              의미
            </SubmitBox.Guide>
            <SubmitBox.Define
              type='text'
              name='definition'
              ref={definitionRef}
              autoComplete='off'
              placeholder='단어의 의미를 입력하세요.'
              required
            />
            <SubmitBox.Btn>
              등록하기
            </SubmitBox.Btn>
            {successMsg && <SuccessText>등록했습니다.</SuccessText>}
          </form>
        </SubmitBox>
      </>
    )
  } else {
    return (
      <>
        <BlueHeader marginBot={20}>단어 등록</BlueHeader>
        <Line/>
        <SubmitBox>
          <SubmitBox.Guide>
            단어
          </SubmitBox.Guide>
          <SubmitBox.Title
            type='text'
            name='title'
            ref={titleRef}
            autoComplete='off'
            placeholder='단어를 입력하세요.'
            disabled
          />
          <SubmitBox.Guide>
            의미
          </SubmitBox.Guide>
          <SubmitBox.Define
            type='text'
            name='definition'
            ref={definitionRef}
            autoComplete='off'
            placeholder='단어의 의미를 입력하세요.'
            disabled
          />
          <SubmitBox.Btn disabled={true}>
            등록하기
          </SubmitBox.Btn>
          <WarningText>로그인이 필요합니다.</WarningText>
        </SubmitBox>
      </>
    )
  }

}