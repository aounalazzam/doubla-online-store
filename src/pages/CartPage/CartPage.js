/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import { useEffect } from "react";
import { Product } from "./Product";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/Button";
import { useAppData } from "../../hooks/useAppData";

const CartContainer = styled.div`
  height: 85vh;
  display: flex;
  padding: 20px;
  flex-direction: column;

  @media (max-width: 500px) {
    height: auto;
  }

  & > h1 {
    font-size: 3em;
    color: #8b5cf6;
  }
`;

const CartDetails = styled.div`
  height: 100%;
  display: flex;

  @media (max-width: 500px) {
    height: 100vh;
    flex-direction: column;
  }

  & > div {
    display: flex;
    flex-direction: column;

    & > h1 {
      color: #8b5cf6;
      font-weight: 600;
      font-size: 1.5em;
      text-align: center;
    }
  }
`;

const CartProductsContainer = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 100%;
  }

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
  width: 40%;
  height: 90%;
  display: flex;
  background: #fff;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 100%;
  }

  & > h2 {
    color: #8b5cf6;
    font-size: 2em;
    margin: 10px 15px;
  }

  & > span {
    width: 100%;
    height: 3px;
    margin: 5px;
    display: block;
    background-color: #8b5cf657;
  }

  & > p {
    margin: 10px;
    color: #8b5cf6;
    font-size: 28px;
    font-weight: 700;

    & > span {
      float: right;
      font-family: "Inter", sans-serif;
    }
  }

  & > div {
    height: 90%;
    display: flex;
    padding: 10px;
    overflow: auto;
    flex-direction: column;

    & > p {
      margin: 10px 0;
      font-size: 18px;
      font-weight: 500;

      & > span {
        float: right;
        font-family: "Inter", sans-serif;
      }
    }
  }
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

  const handleCheckout = () => {
    data.emptyCart();
    toast("Your Cart Is Submitted! We Will Contact you shortly");
  };

  return (
    <CartContainer>
      <h1>Cart</h1>
      <CartDetails>
        {data.cart.length === 0 ? (
          <div style={{ margin: "auto" }}>
            <h1>You Don`t Have Items</h1>
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
            <CartPricingContainer>
              <h2>Pricing</h2>
              <div>
                {data.cart.map(({ title, price, quantity }, indexOfProduct) => (
                  <p>
                    {title} x {quantity}
                    <span> {price * quantity}$</span>
                  </p>
                ))}
              </div>
              <span></span>
              <p>
                Total{" "}
                <span>
                  {data.cart.reduce(
                    (prev, current) => prev + current.quantity * current.price,
                    0
                  )}
                  $
                </span>
              </p>
              <Button onClick={handleCheckout}>
                Checkout
                <span className="material-symbols-outlined">
                  shopping_cart_checkout
                </span>
              </Button>
            </CartPricingContainer>
          </>
        )}
      </CartDetails>
    </CartContainer>
  );
}

export { CartPage };
