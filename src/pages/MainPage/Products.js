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
`;

function Products() {
  return (
    <ProductsContainer id="products">
      <h1 style={{ color: "#8b5cf6", fontSize: "80px", textAlign: "center" }}>
        Products
      </h1>
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
