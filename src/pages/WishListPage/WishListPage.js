/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import { useEffect } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import { useAppData } from "../../hooks/useAppData";
import { ProductCard } from "../../components/ProductCard";

const WishListContainer = styled.div`
  height: 80vh;
  display: flex;
  padding: 20px;
  flex-direction: column;

  & > h1 {
    font-size: 3em;
    color: #8b5cf6;
  }
`;

const WishListDetails = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  & > p {
    color: #8b5cf6;
    font-weight: 600;
    font-size: 1.5em;
    text-align: center;
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    height: max-content;
    justify-content: center;

    & > div {
      height: 100%;

      @media (max-width: 500px) {
        width: 300px;
      }

      @media (max-width: 350px) {
        width: 200px;
      }

      & > div > img {
        margin: 10px auto;
      }
    }
  }
`;

function WishListPage() {
  const auth = useAuth();
  const data = useAppData();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated === false) {
      navigate("/");
      toast("You Must Sign In To View Your Wishlist");
    }
  }, []);

  return (
    <WishListContainer
      style={{
        height: data.wishlist.length >= 4 ? "100%" : "80vh",
      }}
    >
      <h1>Wishlist</h1>
      <WishListDetails>
        {data.wishlist.length === 0 ? (
          <>
            <p>You Don`t Have Items In Your WishList</p>
            <Button
              style={{ margin: "20px 10px" }}
              onClick={() => navigate("/")}
            >
              Start Shopping
            </Button>
          </>
        ) : (
          <div>
            {data.wishlist.map((product) => (
              <ProductCard product={product} key={JSON.stringify(product)} />
            ))}
          </div>
        )}
      </WishListDetails>
    </WishListContainer>
  );
}

export { WishListPage };
