import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 100px;
  .title {
    font-size: ${(props) => props.theme.font.size.medium};
    background: linear-gradient(90deg, #df6b00 -0.13%, #9c0000 97.71%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .paragraph {
    font-weight: 300;
    font-size: ${(props) => props.theme.font.size.xsmall};
    color: ${(props) => props.theme.colors.text};
  }
`;
