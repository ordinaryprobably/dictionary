import { useRouter } from "next/router";
import { useRef } from "react";
import Search from "../../StyledComponents/blocks/SearchBar";

export default function SearchBar() {
  const formRef = useRef();
  const keywordRef = useRef();
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();

    const enteredKeyword = keywordRef.current.value;

    router.push(`/search/${enteredKeyword}`);
    formRef.current.reset();
  }
  
  return (
    <Search>
      <Search.Form ref={formRef} onSubmit={handleSubmit}>
        <Search.Input 
          type='text'
          placeholder='검색어를 입력하세요.'
          name='keyword'
          autoComplete='off'
          ref={keywordRef}
        />
        <Search.Button>
          <img src="/images/search-icon.svg" />
        </Search.Button>
      </Search.Form>
    </Search>
  )
}