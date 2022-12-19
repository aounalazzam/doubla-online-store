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

const Loader = styled.div`
  width: ${(props) => props.size || 75}px;
  height: ${(props) => props.size || 75}px;
  border-radius: 50%;
  border: 5px solid rgb(139 92 246 / 35%);
  border-top: 5px solid #8b5cf6;
  animation: ${LoaderAnimation} 1s linear infinite;
`;

export { Loader };
