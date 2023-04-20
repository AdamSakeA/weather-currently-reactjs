import React from "react";

import { Container, Input } from "./search-country.styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SearchCountry(props) {
  const { countryName, setCountryName } = props;

  const onClear = () => {
    setCountryName("");
  };

  return (
    <Container>
      <Input
        type="text"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        placeholder="Input Country Name..."
      />
      {countryName && (
        <AiOutlineCloseCircle
          className="icon-close"
          onClick={() => onClear()}
        />
      )}
    </Container>
  );
}
