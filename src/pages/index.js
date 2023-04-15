import { Wrapper, Title, Paragraph, ButtonContainer } from "./home.styles";
import { Button, Layout } from "../components";
import { useNavigate } from "react-router-dom";

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
        <Title>Provide you a world wide weather forecast currently</Title>
        <Paragraph>
          The world forecaster weather,
          <br /> it's easy to use, to know, to have in your current location to
          know.
        </Paragraph>
      </Wrapper>
      <ButtonContainer>
        <Button onClick={() => navigateToSearchPage()} fontSize="20px">
          Search
        </Button>
        <Button
          onClick={() => navigateToCountryListPage()}
          color="third"
          fontSize="20px"
        >
          Country List
        </Button>
      </ButtonContainer>
    </Layout>
  );
}
