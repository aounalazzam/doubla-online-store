/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import styled from "styled-components";

const NavBarContainer = styled.div`
  height: 75px;
  display: flex;
  padding: 0 15px;
  background: #8b5cf6;
  align-items: center;

  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;

const NavBarTextLogo = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

const NavBarSearchBox = styled.input`
  border: 0;
  width: 57%;
  color: #fff;
  padding: 10px;
  font-size: 20px;
  margin: 5px 20px;
  font-weight: 700;
  border-radius: 5px;
  background: rgb(255 255 255 / 17%);

  &::placeholder {
    color: rgb(255 255 255 / 48%);
  }

  @media (max-width: 450px) {
    font-size: 17px;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin: 5px 10px;
  }
`;

const NavBarButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavBarButton = styled.button`
  border: 0px;
  color: #fff;
  display: flex;
  margin: 0 10px;
  font-size: 18px;
  font-weight: 700;
  width: max-content;
  border-radius: 7px;
  padding: 10px 15px;
  align-items: center;
  transition: 0.2s all;
  background: rgb(255 255 255 / 48%);

  & > span {
    margin: 0 5px;
  }

  &:hover {
    background: rgb(255 255 255 / 40%);
  }
`;

const NavBarIconButton = styled.button`
  border: 0px;
  color: #fff;
  width: 45px;
  height: 45px;
  display: flex;
  padding: 10px;
  margin: 0 5px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 50%;
  align-items: center;
  transition: 0.2s all;
  justify-content: center;
  background: rgb(255 255 255 / 48%);

  & > span {
    margin: 0 5px;
  }

  &:hover {
    background: rgb(255 255 255 / 40%);
  }
`;

function NavBar() {
  return (
    <NavBarContainer>
      <NavBarTextLogo>Vellion</NavBarTextLogo>
      <NavBarSearchBox placeholder="What Are You Looking For?" />
      <NavBarButtonsContainer>
        <NavBarButton>
          <span className="material-icons">person</span>
          Sign In
        </NavBarButton>
        <NavBarIconButton>
          <span className="material-symbols-outlined">notifications</span>
        </NavBarIconButton>
        <NavBarIconButton>
          <span className="material-symbols-outlined">favorite</span>
        </NavBarIconButton>
        <NavBarIconButton>
          <span className="material-symbols-outlined">shopping_cart</span>
        </NavBarIconButton>
      </NavBarButtonsContainer>
    </NavBarContainer>
  );
}

export { NavBar };