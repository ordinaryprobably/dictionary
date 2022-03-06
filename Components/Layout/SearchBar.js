import { useRef } from "react";
import classes from '../../styles/SearchBar.module.css';

export default function SearchBar() {
  const formRef = useRef();
  const keywordRef = useRef();
  
  return (
    <div className={classes.searchBar}>
      <form ref={formRef} className={classes.form}>
        <input 
          type='text'
          placeholder='검색어를 입력하세요.'
          name='keyword'
          autoComplete='off'
          ref={keywordRef}
          className={classes.input}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}