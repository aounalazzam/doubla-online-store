/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import styled from "styled-components";
import BannerTopImage from "../../images/banner-top.jpg";
import BannerLeftImage from "../../images/banner-left.jpg";

const BannerContainer = styled.div`
  display: flex;
  padding: 50px;

  @media (max-width: 500px) {
    padding: 25px;
  }
`;

const BannerImg = styled.img`
  z-index: -1;
  position: absolute;
  border: 3px solid #8b5cf6;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  ${(props) =>
    !props.hiddenOnMobile &&
    `
     @media(max-width:900px){
      display: none;
      border-radius: 0;
      border-end-end-radius: 0px;
      border-end-start-radius: 0px;
     }
  `}

  ${(props) =>
    !props.RoundOneRight &&
    `
    border-end-end-radius: 50px;
    border-start-end-radius: 50px;
          
    @media (max-width: 900px) {
        border-end-end-radius: 0px;
        border-start-end-radius: 0px;
    }
  `}

  ${(props) =>
    !props.RoundOneLeft &&
    `
      border-end-start-radius: 50px;

      @media (max-width: 900px) {
        border-end-start-radius: 0px;
      }
  `}

  @media (max-width: 900px) {
    top: 0%;
    width: 100vw;
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
      color: #fff;
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
    margin: 15px auto;
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
      <BannerImg
        top={"-25%"}
        right={"0px"}
        RoundOneRight
        hiddenOnMobile
        alt="banner_img"
        width={"650px"}
        height={"1000px"}
        src={BannerTopImage}
        style={{
          borderRight: 0,
        }}
      />
      <BannerImg
        top={"20%"}
        RoundOneLeft
        left={"-3px"}
        alt="banner_img"
        width={"600px"}
        height={"750px"}
        src={BannerLeftImage}
      />
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
