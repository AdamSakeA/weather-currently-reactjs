import styled from "styled-components";

export const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CityList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const City = styled.div`
  padding: 10px 20px;
  margin-bottom: 30px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  cursor: pointer;
  width: 40%;
`;
