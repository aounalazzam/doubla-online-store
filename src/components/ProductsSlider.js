/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import styled from "styled-components";
import { useLayoutEffect, useRef, useState } from "react";

const Products = styled.div`
  width: 95vw;
  height: 520px;
  display: flex;
  padding: 10px 0;

  & > div {
    width: 100%;
    display: flex;
    padding: 10px 0;
    overflow: hidden;

    @media (max-width: 500px) {
      overflow: auto;
    }
  }

  @media (max-width: 1280px) {
    width: 90vw;
  }
`;

const ProductMoveButton = styled.button`
  border: 0px;
  color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  margin: auto 10px;
  border-radius: 50%;
  align-items: center;
  transition: 0.2s all;
  justify-content: center;
  background: rgb(138 92 245);

  & > span {
    margin: 0 5px;
    font-size: 35px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

function ProductsSlider({ children, steps = 4 }) {
  const productsViewerRef = useRef(null);
  const [viewerPos, setViewPos] = useState(0);

  useLayoutEffect(() => {
    const productsViewer = productsViewerRef.current;

    if (productsViewer) {
      const stepWidth = (productsViewer.scrollWidth / steps) * viewerPos;

      productsViewer.scrollTo(stepWidth, 0);
    }
  }, [viewerPos]);

  const handleViewCard = (type) => {
    return () => {
      setViewPos((number) => {
        if (type === "prev") {
          return number === 0 ? 0 : number - 1;
        }

        return number === steps - 1 ? number : number + 1;
      });
    };
  };

  return (
    <Products>
      <ProductMoveButton onClick={handleViewCard("prev")}>
        <span className="material-symbols-outlined">chevron_left</span>
      </ProductMoveButton>
      <div ref={productsViewerRef}>{children}</div>
      <ProductMoveButton onClick={handleViewCard("next")}>
        <span className="material-symbols-outlined">chevron_right</span>
      </ProductMoveButton>
    </Products>
  );
}

export { ProductsSlider };
