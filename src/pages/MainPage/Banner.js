/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import styled from "styled-components";
import BannerImage from "../../images/banner.jpg";

const BannerContainer = styled.div`
  display: flex;
  padding: 50px;

  @media (max-width: 500px) {
    padding: 25px;
  }
`;

const BannerImg = styled.img`
  right: 0;
  top: -25%;
  z-index: -1;
  width: 750px;
  height: 1000px;
  position: absolute;
  border-end-start-radius: 50px;

  @media (max-width: 900px) {
    top: 0%;
    width: 100vw;
    border-end-start-radius: 0px;
  }

  @media (max-width: 450px) {
    height: 600px;
  }
`;

const BannerDetails = styled.div`
  width: 70%;
  padding: 25px;
  height: 650px;
  display: flex;
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: rgba(139, 92, 246, 0.48);

  @media (max-width: 900px) {
    width: 100%;
    padding: 5px;
  }

  @media (max-width: 450px) {
    height: 450px;
  }

  & > div {
    margin: 0 auto 0 50px;

    @media (max-width: 900px) {
      margin: 0 auto;
    }

    & > p {
      margin: 0;
      font-size: 5.5vw;
      font-weight: 600;

      @media (max-width: 900px) {
        font-size: 9.5vw;
        text-align: center;
      }
    }
  }
`;

const BannerButton = styled.button`
  border: 0px;
  color: #fff;
  display: flex;
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 25px;
  margin-left: 50px;
  margin-right: auto;
  width: max-content;
  border-radius: 7px;
  align-items: center;
  background: #8b5cf6;

  @media (max-width: 500px) {
    padding: 10px;
    font-size: 18px;
  }

  & > span {
    margin-left: 10px;
    transition: 0.2s all ease;
  }

  &:hover {
    & > span {
      margin-left: 25px;
    }
  }
`;

function Banner() {
  return (
    <BannerContainer>
      <BannerImg src={BannerImage} alt="banner_img" />
      <BannerDetails>
        <div>
          <p>Make A</p>
          <p style={{ color: "#8b5cf6" }}>Statement</p>
          <p>Wherever You Go</p>
        </div>
        <BannerButton onClick={() => window.location.replace("/#products")}>
          See Products
          <span className="material-symbols-outlined">arrow_forward</span>
        </BannerButton>
      </BannerDetails>
    </BannerContainer>
  );
}

export { Banner };
