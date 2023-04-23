import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 20px 30px;
  border-radius: 20px;
  transition: 300ms;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
  &.active {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
