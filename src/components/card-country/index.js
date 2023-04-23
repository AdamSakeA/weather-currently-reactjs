import { useState } from "react";
import { Container, Title } from "./cardCountry.styles";

export default function CardCountry({ payload, setCitiesFilter }) {
  const [active, setActive] = useState("");

  const payloadFiltered = (id, countryCode, countryName, cities) => {
    setActive(id);
    setCitiesFilter({ countryCode, countryName, cities });
  };

  return (
    <>
      {payload?.map((item, idx) => {
        return (
          <Container
            key={idx}
            onClick={() =>
              payloadFiltered(idx, item.iso2, item.country, item.cities)
            }
            className={`${active === idx ? "active" : null}`}
          >
            <Title>{item.country}</Title>
            <p>{item.iso2}</p>
          </Container>
        );
      })}
    </>
  );
}
