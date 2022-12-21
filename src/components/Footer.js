/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  padding: 25px;
  height: 250px;
  margin: 0 20px;
  background: #8b5cf6;
  flex-direction: column;
  border-start-end-radius: 25px;
  border-start-start-radius: 25px;

  @media (max-width: 500px) {
    height: 100%;
  }

  @media (max-width: 300px) {
    margin: 0 15px;
  }

  & > div {
    padding: 20px;
    display: flex;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    & > h1 {
      color: #fff;
      margin: auto;
      font-size: 5em;
      width: max-content;

      @media (max-width: 500px) {
        font-size: 4em;
      }

      @media (max-width: 400px) {
        font-size: 3em;
      }
    }

    & > div {
      color: #fff;
      margin: auto;
      display: flex;
      align-items: center;
      flex-direction: column;

      @media (max-width: 860px) {
        display: none;
      }

      & > p {
        margin: 10px;
        cursor: pointer;
        font-weight: 600;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  & > h6 {
    color: #fff;
    font-size: 1em;
    margin: auto auto 0 auto;

    @media (max-width: 400px) {
      text-align: center;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <div>
        <h1>doubla</h1>
        <div>
          <p>Order Status</p>
          <p>Shipping & Delivery</p>
          <p>Payment Options</p>
          <p>Gift Card Balance</p>
        </div>
        <div>
          <p>Gift Cards</p>
          <p>Promotions</p>
          <p>Find A Store</p>
          <p>Signup</p>
        </div>
        <div>
          <p>News</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Prupose</p>
        </div>
      </div>
      <h6>Made With ❤️ By Aoun Alazzam</h6>
    </FooterContainer>
  );
}

export { Footer };
