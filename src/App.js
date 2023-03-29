import React from "react";
import Header from "./components/Header";
import "./app.css";
import Home from "./routes/Home";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 100px;
`;
function App() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}

export default App;
