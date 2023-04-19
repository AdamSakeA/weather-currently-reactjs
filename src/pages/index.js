import { useNavigate } from "react-router-dom";

// styles
import { Wrapper, ButtonContainer } from "./home.styles";
// components
import { Button, Layout } from "../components";

export default function Home() {
  const navigate = useNavigate();

  const navigateToSearchPage = () => {
    navigate(`/search`);
  };
  const navigateToCountryListPage = () => {
    navigate(`/country`);
  };

  return (
    <Layout title="ini home">
      <Wrapper>
        <h1 className="title">
          Provide you a world wide weather forecast currently
        </h1>
        <p className="paragraph">
          The world forecaster weather, it's easy to use, to know, to have in
          your current location to know.
        </p>
      </Wrapper>
      <ButtonContainer>
        <Button onClick={() => navigateToSearchPage()}>Search</Button>
        <Button onClick={() => navigateToCountryListPage()} color="secondary">
          Country List
        </Button>
      </ButtonContainer>
    </Layout>
  );
}
