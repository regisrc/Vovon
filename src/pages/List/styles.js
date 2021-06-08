import styled, { css } from "styled-components";
import ReactLoading from "react-loading";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  padding: 0;
  text-align: center;
`;

export const Status = styled.div`
  width: 24px;
  height: 24px;

  background-color: ${(props) => props.theme.colors.tertiaryGreen};
  border-radius: 50px;
  border: 1px solid black;

  ${(props) =>
    props.status === 1 &&
    css`
      background-color: ${(props) => props.theme.colors.secundaryYellow};
    `}

  ${(props) =>
    props.status === 2 &&
    css`
      background-color: ${(props) => props.theme.colors.primaryRed};
    `}
`;

export const ReactLoadingContainer = styled(ReactLoading).attrs((props) => ({
  color: props.theme.colors.secundaryGreen,
  type: "balls",
  height: "64px",
  width: "64px",
}))`
  transform: translate(50%, -50%);
  top: 50%;
  right: 50%;
  position: fixed;
`;