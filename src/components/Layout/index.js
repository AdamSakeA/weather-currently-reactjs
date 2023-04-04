import React, { useEffect } from "react";
import { Container } from "./layout.styles";

export default function Layout({ children, title }) {
  document.title = title || "Default";

  return <Container>{children}</Container>;
}
