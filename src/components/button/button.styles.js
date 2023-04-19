import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  padding: 10px 25px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  outline: none;
  transition: all 0.5s;
  font-size: ${(props) => props.theme.font.size.xsmall || props.fontSize};
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
    background-color: ${(props) => props.theme.colors.primary};
    &:hover {
      color: #fff;
      background-color: ${(props) => props.theme.colors.primary};
      box-shadow: 1px 1px 10px rgba(163, 61, 28, 1);
      border: 1px solid rgba(214, 90, 49, 1);
    }
    /* background: linear-gradient(#3f3cfe, #e943d5); */
  `,
  secondary: css`
    color: #fff;
    background: none;
    border: 1px solid white;
    &:hover {
      color: #fff;
      background-color: ${(props) => props.theme.colors.primary};
      box-shadow: 1px 1px 10px rgba(163, 61, 28, 1);
      border: 1px solid rgba(214, 90, 49, 1);
    }
  `,
};
