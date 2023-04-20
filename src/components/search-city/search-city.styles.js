import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 50%;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  .search-bar {
    width: 100%;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid grey;
    color: white;
    padding: 10px 15px;
    margin-top: 20px;
    &:focus {
      border: none;
      outline-color: red;
    }
  }
  .icon-close {
    margin-top: 15px;
    font-size: 40px;
  }
`;

export const Input = styled.input`
  width: 100%;
`;
export const ListItem = styled.div`
  padding: 10px 20px;
  color: white;
`;
export const Dropdown = styled.div`
  background-color: grey;
`;
