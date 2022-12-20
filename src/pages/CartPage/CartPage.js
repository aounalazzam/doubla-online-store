/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import { useEffect } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/Button";
import { useAppData } from "../../hooks/useAppData";
import { Product } from "./Product";

const CartContainer = styled.div`
  height: 85vh;
  display: flex;
  padding: 20px;
  flex-direction: column;

  & > h1 {
    font-size: 3em;
    color: #8b5cf6;
  }
`;

const CartDetails = styled.div`
  height: 100%;
  display: flex;

  & > div {
    display: flex;
    flex-direction: column;

    & > p {
      color: #8b5cf6;
      font-weight: 600;
      font-size: 1.5em;
    }
  }
`;

const CartProductsContainer = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;

  & > h2 {
    color: #8b5cf6;
    font-size: 2em;
    margin: 10px 15px;
  }

  & > div {
    height: 90%;
    display: flex;
    padding: 10px;
    overflow: auto;
    flex-direction: column;
  }
`;

const CartPricingContainer = styled.div`
  width: 30%;
  height: 90%;
  display: flex;
  background: #fff;
  flex-direction: column;
`;

function CartPage() {
  const auth = useAuth();
  const data = useAppData();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated === false) {
      navigate("/");
      toast("You Must Sign In To View Your Cart");
    }
  }, []);

  return (
    <CartContainer>
      <h1>Cart</h1>
      <CartDetails>
        {data.cart.length === 0 ? (
          <div style={{ margin: "auto" }}>
            <p>You Don`t Have Items</p>
            <Button
              style={{ margin: "20px 10px" }}
              onClick={() => navigate("/")}
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <CartProductsContainer>
              <h2>Products</h2>
              <div>
                {data.cart.map((product, indexOfKey) => (
                  <Product product={product} key={indexOfKey} />
                ))}
              </div>
            </CartProductsContainer>
            <CartPricingContainer></CartPricingContainer>
          </>
        )}
      </CartDetails>
    </CartContainer>
  );
}

export { CartPage };
