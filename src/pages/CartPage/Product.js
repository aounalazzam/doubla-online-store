/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import styled from "styled-components";
import { useEffect, useState } from "react";
import { useAppData } from "../../hooks/useAppData";

const CartProduct = styled.div`
  width: 100%;
  margin: 5px 0;
  height: 200px;
  display: flex;
  background: #fff;
  border-radius: 5px;
  align-items: center;
  box-shadow: 2px 2px 6px 0px rgb(138 92 245 / 18%);

  @media (max-width: 500px) {
    height: 325px;
    flex-direction: column;
  }

  & > img {
    width: 200px;
    height: 150px;
    margin: 0 20px;
    border-radius: 5px;

    @media (max-width: 500px) {
      margin: 10px 20px;
      border: 1px solid #f5f5f5c2;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;

    & > * {
      margin: 5px;

      @media (max-width: 500px) {
        font-size: 20px;
        text-align: center;
      }
    }

    & > p:nth-child(1) {
      font-size: 24px;
      font-weight: 700;
    }

    & > p:nth-child(2) {
      color: #afafaf;
      font-size: 18px;
      font-weight: 500;

      @media (max-width: 500px) {
        display: none;
      }
    }

    & > p:nth-child(3) {
      font-size: 20px;
      font-weight: 700;
    }
  }

  & > div:nth-child(3) {
    margin: auto;
    display: flex;
    margin-right: 0;
    min-width: 125px;
    flex-direction: column;

    @media (max-width: 500px) {
      width: 100%;
      flex-direction: row;
    }

    & > p {
      margin: 0 20%;
      font-size: 30px;
      font-weight: 500;
      margin-top: 15px;
      font-family: "Inter", sans-serif;
    }

    & > div {
      margin: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      & button {
        color: #000;
        width: 35px;
        height: 35px;
        background: #cfcfcf;
      }
    }

    & button {
      border: 0;
      color: #fff;
      width: 50px;
      height: 50px;
      display: flex;
      font-size: 18px;
      font-weight: 700;
      margin: 10px auto;
      border-radius: 50%;
      align-items: center;
      background: #8b5cf6;
      justify-content: center;

      @media (max-width: 500px) {
        margin: 10px 5px;
      }
    }
  }
`;

function Product({ product }) {
  const { title, thumbnail, description, price, quantity } = product;

  const [itemsQuantity, setItemsQuantity] = useState(quantity);

  const data = useAppData();

  useEffect(() => {
    data.updateCart({ ...product, quantity: itemsQuantity }, "update");
  }, [itemsQuantity]);

  const handleRemoveProduct = () => {
    data.updateCart(product, "remove");
  };

  return (
    <CartProduct>
      <img src={thumbnail} alt={`${title}_image`} />
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <p>Price : {price}$</p>
      </div>
      <div>
        <p>{itemsQuantity}</p>
        <div>
          <button onClick={() => setItemsQuantity((num) => num + 1)}>
            <span className="material-symbols-outlined">add</span>
          </button>
          <button
            onClick={() => {
              if (quantity - 1 === 0) {
                handleRemoveProduct();
              } else {
                setItemsQuantity((num) => (num === 1 ? 1 : num - 1));
              }
            }}
          >
            <span className="material-symbols-outlined">remove</span>
          </button>
        </div>
        <button onClick={handleRemoveProduct}>
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </CartProduct>
  );
}

export { Product };
