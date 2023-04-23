import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
`;

export const Contents = styled.div`
  display: flex;
  gap: 20px;
`;

export const CountrySideBar = styled.div`
  flex: 3;
  margin-bottom: 30px;
  padding: 20px 30px;
`;

export const CitiesSideBar = styled.div`
  flex: 8;
  padding: 30px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.bgSecondary};
`;
