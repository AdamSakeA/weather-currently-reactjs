import { useState } from "react";
import { SearchContainer, Input, Dropdown, ListItem } from "./search.styles";

export default function Search({ getClick, getInput, result, loading, error }) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setTimeout(() => {
      setToggle(!toggle);
    }, 300);
  };

  return (
    <SearchContainer>
      <Input
        className="search-bar"
        type="text"
        onFocus={() => handleToggle()}
        onBlur={() => handleToggle()}
        onChange={(e) => getInput(e.target.value)}
      />
      {toggle && (
        <SearchDropdown
          result={result}
          loading={loading}
          error={error}
          getClick={getClick}
          getInput={getInput}
        />
      )}
    </SearchContainer>
  );
}

// search content
const SearchDropdown = ({ result, loading, error, getClick }) => {
  return (
    <Dropdown>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {result &&
        result.map((item, i) => {
          return (
            <ListItem key={i} onClick={() => getClick(item.lat, item.lon)}>
              <h3>{item.name}</h3>
              <p>{item.country}</p>
            </ListItem>
          );
        })}
    </Dropdown>
  );
};
