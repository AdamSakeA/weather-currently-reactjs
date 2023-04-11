import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  outline: none;
  transition: all 0.5s;
  font-size: ${(props) => props.fontSize || "15px"};
  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
`;

// when button disabled
const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

// theme color button
const COLOR = {
  primary: css`
    color: #fff;
    background: linear-gradient(#3f3cfe, #e943d5);
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
  third: css`
    color: #fff;
    background: none;
    border: 1px solid white;
    &:hover {
      color: #fff;
      background: linear-gradient(#3f3cfe, #e943d5);
      border: none;
    }
  `,
};
