import styled from "styled-components";
import { SearchBtn } from "./Button";
import { SearchForm } from "./Form";
import { InputField } from "./Input";

const Search = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: white;
  /* backdrop-filter: blur(10px) contrast(.7) brightness(1.1); */
  /* background: #fff; */
  /* filter: blur(10px); */
`;

Search.Form = SearchForm;
Search.Input = InputField;
Search.Button = SearchBtn;

export default Search;
