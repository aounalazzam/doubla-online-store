/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import styled from "styled-components";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const NavBarContainer = styled.header`
  z-index: 10;
  height: 75px;
  display: flex;
  padding: 0 15px;
  background: #8b5cf6;
  align-items: center;
  transition: 0.2s all;

  @media (max-width: 500px) {
    padding: 0 10px;
  }

  @media (max-width: 450px) {
    padding: 0 7px;
  }

  &.sticky {
    top: 15px;
    left: 0px;
    margin: 0 10px;
    position: sticky;
    border-radius: 5px;
    transition: 0.2s all;
  }
`;

const NavBarTextLogo = styled.h1`
  color: #fff;
  font-size: 50px;
  cursor: pointer;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 30px;
  }

  @media (max-width: 450px) {
    font-size: 22px;
  }
`;

const NavBarSearchBox = styled.input`
  border: 0;
  width: 100%;
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
  const navigate = useNavigate();
  const [isSticky, setSticky] = useState(0);

  useEffect(() => {
    const handleGetScrollPos = () => {
      setSticky(document.documentElement.scrollTop > 0);
    };

    window.addEventListener("scroll", handleGetScrollPos);

    return () => {
      window.removeEventListener("scroll", handleGetScrollPos);
    };
  }, []);

  const handleGoToCart = () => {
    if (localStorage.getItem("auth") !== null) {
      return navigate("/cart");
    }

    toast("You Must Sign In To View Your Cart");
  };

  return (
    <NavBarContainer className={isSticky ? "sticky" : null}>
      <NavBarTextLogo onClick={() => navigate("/")}>Vellion</NavBarTextLogo>
      <NavBarSearchBox placeholder="What Are You Looking For?" />
      <NavBarButtonsContainer>
        <NavBarButton>
          <span className="material-icons">person</span>
          Sign In
        </NavBarButton>
        <NavBarIconButton>
          <span className="material-symbols-outlined">favorite</span>
        </NavBarIconButton>
        <NavBarIconButton onClick={handleGoToCart}>
          <span className="material-symbols-outlined">shopping_cart</span>
        </NavBarIconButton>
      </NavBarButtonsContainer>
    </NavBarContainer>
  );
}

export { NavBar };
