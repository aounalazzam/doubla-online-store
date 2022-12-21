/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import styled, { keyframes } from "styled-components";

const LoaderAnimation = keyframes`
  0%{
    transform: rotate(360deg);
  }
`;

const Button = styled.button`
  border: 0;
  color: #fff;
  margin: 10px;
  display: flex;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  background: #8b5cf6;
  justify-content: center;
  transition: 0.2s all ease;

  &:hover {
    background: #966df3;
  }

  &.loading {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #c2a7ff;
    cursor: not-allowed;
  }

  & > span.material-symbols-outlined {
    margin: auto 10px;
  }

  & > span.loading {
    width: 18px;
    height: 18px;
    margin: 0 10px;
    border-radius: 50%;
    border: 3px solid #ffffff59;
    border-top: 3px solid #f2ecff;
    animation: ${LoaderAnimation} 1s linear infinite;
  }
`;

export { Button };
