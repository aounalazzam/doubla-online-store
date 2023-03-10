/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import { Loader } from "./Loader";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useAppData } from "../hooks/useAppData";

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
    font-size: 42px;
  }

  @media (max-width: 380px) {
    font-size: 32px;
  }

  @media (max-width: 360px) {
    font-size: 28px;
  }
`;

const NavBarButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;

  @media (max-width: 900px) {
    overflow: hidden;
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

  @media (max-width: 350px) {
    padding: 5px 10px;
  }

  @media (max-width: 360px) {
    margin: 0 2.5px;
  }

  & > span {
    margin: 0 5px;
  }

  &:hover {
    background: rgb(255 255 255 / 40%);
  }

  @media (max-width: 500px) {
    & > p {
      display: none;
    }
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

  & > span.badge {
    width: 20px;
    height: 20px;
    color: #8b5cf6;
    font-size: 14px;
    border-radius: 50%;
    position: absolute;
    text-align: center;
    margin: 0 0 35px 35px;
    background-color: #fff;
  }

  &:hover {
    background: rgb(255 255 255 / 40%);
  }

  @media (max-width: 350px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 360px) {
    margin: 0 2.5px;
  }
`;

const NavBarAccountButton = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  cursor: pointer;
  background: white;
  border-radius: 50%;
  align-items: center;
  transition: 0.2s all;
  border: 2px solid #ba9cff;

  & > p {
    opacity: 0;
    margin: auto;
    color: #8b5cf6;
    font-weight: 500;
    text-indent: -9999px;
  }

  & > span {
    margin: auto;
    display: none;
    color: #8b5cf6;
  }

  @media (max-width: 350px) {
    width: 35px;
    height: 35px;
  }

  &:hover {
    border-radius: 50px;

    @media (min-width: 500px) {
      width: 150px;

      & > p {
        text-indent: 0;
        opacity: 1;
      }
    }

    @media (max-width: 500px) {
      width: 85px;
      & > span {
        display: inline-block;
      }
    }

    @media (max-width: 350px) {
      width: 60px;
    }
  }
`;

const NavBarAccountPicture = styled.img`
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50%;
  border: 2px solid #ba9cff;
  border-left: 0;

  @media (max-width: 350px) {
    width: inherit;
    height: inherit;
  }
`;

function NavBar() {
  const auth = useAuth();
  const data = useAppData();
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
    if (auth.isAuthenticated) {
      return navigate("/cart");
    }

    toast("You Must Sign In To View Your Cart");
  };

  const handleGoToWishList = () => {
    if (auth.isAuthenticated) {
      return navigate("/wishlist");
    }

    toast("You Must Sign In To View Your Wishlist");
  };

  const handleGoToSignIn = () => {
    if (!auth.isAuthenticated) {
      return navigate("/sign-in");
    }

    toast("You Current Sign In You Must To Sign In Again");
  };

  const handleGoToSignOut = () => {
    auth.signOut();
    toast("You Sign Out We Hope Come Again!");
  };

  return (
    <NavBarContainer className={isSticky ? "sticky" : null}>
      <NavBarTextLogo onClick={() => navigate("/")}>doubla</NavBarTextLogo>
      <NavBarButtonsContainer>
        {auth.user !== null ? (
          <>
            {!auth.isAuthenticated ? (
              <NavBarButton onClick={handleGoToSignIn}>
                <span className="material-icons">person</span>
                <p>Sign In</p>
              </NavBarButton>
            ) : (
              <NavBarAccountButton>
                <NavBarAccountPicture src={auth.user.image} alt="user_img" />
                <span
                  onClick={handleGoToSignOut}
                  className="material-symbols-outlined"
                >
                  logout
                </span>
                <p onClick={handleGoToSignOut}>Sign Out</p>
              </NavBarAccountButton>
            )}
          </>
        ) : (
          <Loader size={20} isLight />
        )}

        <NavBarIconButton>
          {data.wishlist.length > 0 && (
            <span className="badge">{data.wishlist.length}</span>
          )}
          <span
            onClick={handleGoToWishList}
            className="material-symbols-outlined"
          >
            favorite
          </span>
        </NavBarIconButton>
        <NavBarIconButton onClick={handleGoToCart}>
          {data.cart.length > 0 && (
            <span className="badge">{data.cart.length}</span>
          )}
          <span className="material-symbols-outlined">shopping_cart</span>
        </NavBarIconButton>
      </NavBarButtonsContainer>
    </NavBarContainer>
  );
}

export { NavBar };
