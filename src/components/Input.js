/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import styled from "styled-components";

const Input = styled.input`
  border: 0;
  color: #fff;
  margin: 10px;
  padding: 10px;
  color: #8b5cf69c;
  font-size: 20px;
  font-weight: 600;
  border-radius: 5px;
  transition: 0.2s all;
  border: 1px solid #8b5cf69c;

  &:focus {
    color: #8b5cf6;
    border-color: #8b5cf6;
    &::placeholder {
      color: #8b5cf6;
    }
  }

  &::placeholder {
    color: #8b5cf69c;
  }

  &::selection {
    color: #fff;
    background: #8b5cf6;
  }
`;

Input.defaultProps = {
  type: "text",
  spellCheck: false,
};

export { Input };
