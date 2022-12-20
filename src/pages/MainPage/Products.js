/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import styled from "styled-components";
import { ProductCard } from "../../components/ProductCard";
import { ProductsLoader } from "../../components/ProductsLoader";
import { ProductsSlider } from "../../components/ProductsSlider";

const ProductsContainer = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;

  @media (max-width: 500px) {
    padding: 30px;
  }

  & > h1 {
    margin: 25px;
    color: #8b5cf6;
    font-size: 80px;
    text-align: center;

    @media (max-width: 425px) {
      font-size: 50px;
    }
  }
`;

function Products() {
  return (
    <ProductsContainer id="products">
      <h1>Products</h1>
      <ProductsSlider steps={10}>
        <ProductsLoader url="https://dummyjson.com/products?limit=10&skip=10">
          <ProductCard />
        </ProductsLoader>
      </ProductsSlider>
      <ProductsSlider steps={10}>
        <ProductsLoader url="https://dummyjson.com/products?limit=10&skip=10">
          <ProductCard />
        </ProductsLoader>
      </ProductsSlider>
      <ProductsSlider steps={10}>
        <ProductsLoader url="https://dummyjson.com/products?limit=10&skip=10">
          <ProductCard />
        </ProductsLoader>
      </ProductsSlider>
    </ProductsContainer>
  );
}

export { Products };
