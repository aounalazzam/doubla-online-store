/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import { useState } from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = styled.div`
  width: 375px;
  height: 450px;
  display: flex;
  margin: 0 10px;
  padding: 25px 20px;
  border-radius: 10px;
  flex-direction: column;
  background: rgb(138 92 245 / 48%);
  box-shadow: 2px 2px 6px 0px rgb(138 92 245 / 60%);

  @media (max-width: 500px) {
    width: 375px;
    height: 400px;
  }
`;

const CardImageViewer = styled.div`
  display: flex;

  & > img {
    width: 235px;
    height: 325px;
    margin: 0 10px;
    border-radius: 10px;
    border: 2px solid rgb(138 92 245);

    @media (max-width: 500px) {
      width: 200px;
      height: 270px;
    }
  }

  & > div {
    display: flex;
    margin: 0 auto;
    flex-direction: column;

    @media (max-width: 500px) {
      display: none;
    }
  }

  & > div > img {
    width: 75px;
    margin: auto;
    height: 75px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid rgb(138 92 245);
  }
`;

const CardDetails = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;

  & > p:nth-child(1) {
    margin: 10px;
    color: #8b5cf6;
    font-size: 25px;
    margin-top: auto;
    font-weight: bold;
    margin-right: auto;

    @media (max-width: 500px) {
      font-size: 22px;
    }
  }

  & > div {
    width: 100%;
    display: flex;
    margin-top: auto;
    align-items: center;
  }

  & > div > p {
    margin: 5px;
    height: 100%;
    font-size: 24px;
    font-weight: bold;
    margin-right: auto;
    color: rgb(138 92 245 / 64%);
    font-family: "Inter", sans-serif;

    @media (max-width: 500px) {
      font-size: 18px;
    }
  }
`;

const CardButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;
  width: max-content;
  align-items: center;
`;

const CardButton = styled.div`
  border: 0px;
  color: #fff;
  width: 25px;
  height: 25px;
  display: flex;
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  border-radius: 50%;
  align-items: center;
  transition: 0.2s all;
  justify-content: center;
  background: rgb(255 255 255 / 40%);

  & > span {
    margin: 0 5px;
  }

  &:hover {
    background: rgb(255 255 255 / 30%);
  }
`;

function ProductCard({ product }) {
  const { images, thumbnail, title, price } = product;

  const [image1, image2, image3, image4] = images;

  const [image, setImage] = useState(thumbnail);

  const handleViewImage = (image) => {
    return () => {
      setImage(image);
    };
  };

  const handleStopViewImage = () => {
    setImage(thumbnail);
  };

  return (
    <Card>
      <CardImageViewer>
        <LazyLoadImage src={image} width={235} height={325} alt="main_img" />
        <div>
          <LazyLoadImage
            alt="img1"
            width={75}
            height={75}
            src={image1}
            onMouseLeave={handleStopViewImage}
            onMouseEnter={handleViewImage(image1)}
          />
          <LazyLoadImage
            alt="img2"
            width={75}
            height={75}
            src={image2}
            onMouseLeave={handleStopViewImage}
            onMouseEnter={handleViewImage(image2)}
          />
          <LazyLoadImage
            alt="img3"
            width={75}
            height={75}
            src={image3}
            onMouseLeave={handleStopViewImage}
            onMouseEnter={handleViewImage(image3)}
          />
          <LazyLoadImage
            alt="img4"
            width={75}
            height={75}
            src={image4}
            onMouseLeave={handleStopViewImage}
            onMouseEnter={handleViewImage(image4)}
          />
        </div>
      </CardImageViewer>
      <CardDetails>
        <p>{title.capitalize()}</p>
        <div>
          <p>Price : {price}$</p>
          <CardButtonsContainer>
            <CardButton>
              <span className="material-symbols-outlined">favorite</span>
            </CardButton>
            <CardButton>
              <span className="material-symbols-outlined">
                add_shopping_cart
              </span>
            </CardButton>
          </CardButtonsContainer>
        </div>
      </CardDetails>
    </Card>
  );
}

export { ProductCard };
