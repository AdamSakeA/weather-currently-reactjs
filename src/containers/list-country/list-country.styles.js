import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const SideBar = styled.div`
  flex: 3;
`;

export const CountrySideBar = styled.div`
  height: 100vh;
  color: white;
  overflow-y: scroll;
  .country {
    background-color: #0a2531;
  }
`;

export const CityContainer = styled.div`
  /* padding: 20px; */
  /* background-color: red; */
  /* margin-bottom: 20px; */
  /* border-radius: 20px; */
  /* width: 100%; */
`;

export const Content = styled.div`
  flex: 8;
  padding-left: 20px;
  height: 100vh;
  overflow-y: scroll;
`;
