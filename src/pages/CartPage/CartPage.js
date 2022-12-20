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

const CartContainer = styled.div`
  height: 80vh;
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
  align-items: center;
  flex-direction: column;
  justify-content: center;

  & > p {
    color: #8b5cf6;
    font-weight: 600;
    font-size: 1.5em;
  }
`;

function CartPage() {
  const auth = useAuth();
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
        <p>You Don`t Have Items</p>
        <Button style={{ margin: "20px 10px" }} onClick={() => navigate("/")}>
          Start Shopping
        </Button>
      </CartDetails>
    </CartContainer>
  );
}

export { CartPage };
