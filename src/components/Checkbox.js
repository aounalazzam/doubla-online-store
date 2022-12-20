/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import styled from "styled-components";

const StyledCheckboxLabel = styled.label`
  margin: 10px;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  align-items: center;
  accent-color: #8b5cf6;
`;

const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  transition: 0.2s all;
`;

StyledCheckbox.defaultProps = {
  type: "checkbox",
};

function Checkbox({ label, ...others }) {
  return (
    <StyledCheckboxLabel>
      {label}
      <StyledCheckbox {...others} />
    </StyledCheckboxLabel>
  );
}

export { Checkbox };
