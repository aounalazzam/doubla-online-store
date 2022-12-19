/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import styled from "styled-components";
import BannerImage from "../images/banner.jpg";

const Card = styled.div`
  width: 375px;
  height: 500px;
  display: flex;
  margin: 0 10px;
  padding: 25px 20px;
  border-radius: 10px;
  flex-direction: column;
  background: rgb(138 92 245 / 48%);
  box-shadow: 2px 2px 6px 0px rgb(138 92 245 / 60%);
`;

const CardImageViewer = styled.div`
  display: flex;

  & > img {
    width: 265px;
    height: 325px;
    margin: 0 10px;
    border-radius: 10px;
    border: 2px solid rgb(138 92 245);
  }

  & > div {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
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
  align-items: center;
  flex-direction: column;

  & > p:nth-child(1) {
    margin: 10px;
    color: #8b5cf6;
    font-size: 25px;
    font-weight: bold;
  }

  & > p:nth-child(2) {
    margin: 10px;
    font-size: 20px;
    font-weight: bold;
    color: rgb(138 92 245 / 53%);
  }

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  & > div > p {
    margin: 5px;
    font-size: 24px;
    font-weight: bold;
    margin-right: auto;
    color: rgb(138 92 245 / 64%);
    font-family: "Inter", sans-serif;
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

function ProductCard() {
  return (
    <Card>
      <CardImageViewer>
        <img src={BannerImage} alt="img" />
        <div>
          <img src={BannerImage} alt="img" />
          <img src={BannerImage} alt="img" />
          <img src={BannerImage} alt="img" />
          <img src={BannerImage} alt="img" />
        </div>
      </CardImageViewer>
      <CardDetails>
        <p>Fog Scent Xpressio Perfume</p>
        <p>
          Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool
          long lasting perfumes for Men
        </p>
        <div>
          <p>Price : 13$</p>
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
