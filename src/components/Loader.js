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
  margin: 0 10px;
  border-radius: 50%;
  width: ${(props) => props.size || 75}px;
  height: ${(props) => props.size || 75}px;
  animation: ${LoaderAnimation} 1s linear infinite;
  border: 5px solid #${(props) => (!props.isLight ? "8b5cf659" : "ffffff8a")};
  border-top: 5px solid #${(props) => (!props.isLight ? "8b5cf6" : "ffffff")};
`;

export { Loader };
