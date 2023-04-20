import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .icon-close {
    cursor: pointer;
    font-size: 30px;
  }
`;

export const Input = styled.input`
  width: 50%;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid grey;
  color: white;
  padding: 10px 15px;
  &:focus {
    border: none;
    outline-color: red;
  }
`;
