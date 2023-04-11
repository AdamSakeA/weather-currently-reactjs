import React from "react";
import { ButtonContainer } from "./button.styles";

export default function Button(props) {
  const { onClick, children, color = "primary", disabled, fontSize } = props;
  return (
    <ButtonContainer
      fontSize={fontSize}
      onClick={onClick}
      color={color}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
}
