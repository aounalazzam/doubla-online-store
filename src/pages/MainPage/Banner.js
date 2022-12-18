/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import styled from "styled-components";
import BannerImage from "../../images/banner.jpg";

const BannerContainer = styled.div`
  display: flex;
  padding: 50px;
`;

const BannerImg = styled.img`
  right: 0;
  top: -25%;
  z-index: -1;
  width: 750px;
  height: 1000px;
  position: absolute;
  border-end-start-radius: 50px;
`;

const BannerDetails = styled.div`
  width: 600px;
  padding: 25px;
  height: 500px;
  display: flex;
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: rgba(139, 92, 246, 0.48);

  & > div {
    & > p {
      margin: 0;
      font-size: 64px;
      font-weight: 600;
    }
  }
`;

const BannerOfferBadge = styled.div`
  top: 145px;
  left: 470px;
  width: 175px;
  height: 175px;
  padding: 10px;
  display: flex;
  position: absolute;
  align-items: center;
  background: #8b5cf6;
  border-radius: 150px;
  flex-direction: column;
  justify-content: center;

  & > p {
    color: #fff;
  }
`;

const BannerButton = styled.button`
  border: 0px;
  color: #fff;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  margin-top: 25px;
  margin-left: 50px;
  margin-right: auto;
  width: max-content;
  border-radius: 7px;
  padding: 10px 15px;
  align-items: center;
  background: #8b5cf6;

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
        <BannerOfferBadge>
          <p>40%</p>
          <p>OFF</p>
        </BannerOfferBadge>
        <div style={{ marginTop: "50px" }}>
          <p>Make A</p>
          <p style={{ color: "#8b5cf6" }}>Statement</p>
          <p>Wherever You Go</p>
        </div>
        <BannerButton>
          See Products
          <span className="material-symbols-outlined">arrow_forward</span>
        </BannerButton>
      </BannerDetails>
    </BannerContainer>
  );
}

export { Banner };
