import styled, { css } from "styled-components";

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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const Button = styled.button`
  max-width: 300px;
  min-width: 200px;
  height: 35px;
  min-height: 35px;
  margin: 10px 0px;
  padding: 4px;
  margin-left: 5px;

  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.tertiaryGray};
  color: ${(props) => props.theme.colors.primaryGray};
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.quaternaryGray};
  }
`;