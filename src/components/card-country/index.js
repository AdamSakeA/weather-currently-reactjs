import { Container, Title } from "./cardCountry.styles";

export default function CardCountry(props) {
  const { idx, showCities, countryName, countryCode } = props;

  return (
    <Container key={idx} onClick={() => showCities(idx)}>
      <Title>{countryName}</Title>
      <p>{countryCode}</p>
    </Container>
  );
}
