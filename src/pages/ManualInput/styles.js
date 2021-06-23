import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  padding: 0;
  text-align: center;
`;

export const InputsContainer = styled.div`
  padding: 10px;

  width: 60%;

  @media (max-width: 1366px) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;
  margin: 10px 0px;

  background-color: ${(props) => props.theme.colors.primaryGray};
  border: 1px solid ${(props) => props.theme.colors.secundaryGray};
  border-radius: 3px;

  ${(props) =>
    props.white &&
    css`
      background-color: ${(props) => props.theme.colors.primaryWhite};
    `}

    ${(props) =>
    props.last &&
    css`
      margin: 0px 0px 10px 0px;
    `}
`;

export const Input = styled.input`
  width: 100%;
  height: 80%;

  background-color: ${(props) => props.theme.colors.primaryGray};
  border: 0px;
  padding: 10px;

  ${(props) =>
    props.white &&
    css`
      background-color: ${(props) => props.theme.colors.primaryWhite};
    `}
`;

export const Button = styled.button`
  width: 250px;
  height: 35px;
  min-height: 35px;
  margin: 10px 20px;

  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.tertiaryGray};
  color: ${(props) => props.theme.colors.primaryGray};
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.quaternaryGray};
  }
`;

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.primaryGray};
  border: 1px solid ${(props) => props.theme.colors.secundaryGray};
  width: 100%;
  margin: 10px 0px;
  padding: 10px;
`