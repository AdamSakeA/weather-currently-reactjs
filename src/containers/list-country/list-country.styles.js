import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: 600;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  margin-top: 50px;
`;

export const Contents = styled.div`
  display: flex;
  gap: 20px;
`;

export const CountrySideBar = styled.div`
  height: 100vh;
  color: white;
  overflow-y: scroll;
  flex: 3;
  cursor: pointer;
  padding-right: 20px;
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey; */
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: grey;
  }
  .country {
    margin-bottom: 30px;
    padding: 20px 30px;
    border-radius: 20px;
    transition: 300ms;
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
  .active {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const CitiesSideBar = styled.div`
  flex: 6;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.colors.bgSecondary};
  border-radius: 20px;
  padding: 30px;
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey; */
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: grey;
  }
`;
