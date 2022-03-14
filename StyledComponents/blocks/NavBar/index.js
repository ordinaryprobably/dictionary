import styled from "styled-components";

export const NavBarBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #efefef;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
`;

NavBarBox.NavBar = NavBar;
NavBarBox.Icon = Icon;

export default NavBarBox;
