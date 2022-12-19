/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import axios from "axios";
import { Loader } from "./Loader";
import styled from "styled-components";
import React, { useEffect, useState } from "react";

const ProductsLoaderContainer = styled.div`
  margin: auto;
`;

function ProductsLoader({ url, children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setProducts(data.products);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <ProductsLoaderContainer>
          <Loader />
        </ProductsLoaderContainer>
      ) : (
        <>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return products.map((product) =>
                React.cloneElement(child, { product })
              );
            }

            return child;
          })}
        </>
      )}
    </>
  );
}

export { ProductsLoader };
