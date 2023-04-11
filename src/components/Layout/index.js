import Navbar from "../navbar";
import { Container } from "./layout.styles";

export default function Layout({ children, title }) {
  document.title = title || "Default";

  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}
