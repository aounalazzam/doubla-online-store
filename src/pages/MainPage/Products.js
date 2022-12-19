/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import styled from "styled-components";
import { ProductCard } from "../../components/ProductCard";
import { ProductsSlider } from "../../components/ProductsSlider";

const ProductsContainer = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
`;

function Products() {
  return (
    <ProductsContainer id="products">
      <h1 style={{ color: "#8b5cf6", fontSize: "80px" }}>Most Bought</h1>
      <ProductsSlider steps={3}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsSlider>
    </ProductsContainer>
  );
}

export { Products };
