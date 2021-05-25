import styled, {css} from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  padding: 0;
  text-align: center;
`;

export const MenuBar = styled.div`
  height: 65px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.secundaryGreen};
`;

export const ConfigArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 17vw;
  height: 100%;
`;

export const UserProfile = styled.img`
  width: 100%;
  height: 100%;
  padding: 10px;

  @media (max-width: 850px) {
    width: 0px;
  }
`;

export const UserEmailAndNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 70%;
  height: 100%;
  padding: 10px;

  color: ${(props) => props.theme.colors.primaryWhite};
`;

export const UserName = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const UserEmail = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.5;
`;

export const ILPITitle = styled.h2`
  color: ${(props) => props.theme.colors.primaryWhite};
  padding: 10px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 850px) {
    font-size: 16px;
  }

  @media (max-width: 350px) {
    font-size: 0px;
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 30vw;
  height: 100%;
  margin-right: 5px;

  @media (max-width: 850px) {
    width: 50%;
    margin-right: 0px;
  }
`;

export const GridDisplay = styled.button`
  width: 25%;
  height: 100%;
  min-width: 80px;

  padding: 12px;
  background-color: ${(props) => props.theme.colors.secundaryGreen};
  border: 0;

  ${(props) =>
    props.view &&
    css`
      background-color: ${(props) => props.theme.colors.quaternaryGreen};
    `}

  :hover {
    background-color: ${(props) => props.theme.colors.quintenaGreen};
  }

  @media (max-width: 850px) {
    width: 25%;
  }
`;

export const ButtonIcon = styled.img`
  width: 100%;
  height: 100%;

  min-width: 40px;
  min-height: 40px;
`;

export const DateArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 30%;
  height: 100%;

  background-color: ${(props) => props.theme.colors.secundaryGreen};
  padding: 6px;

  @media (max-width: 450px) {
    width: 0px;
    height: 0px;
  }
`;

export const Hour = styled.p`
  color: ${(props) => props.theme.colors.primaryWhite};

  @media (max-width: 450px) {
    font-size: 0px;
  }
`;

export const DateTime = styled.p`
  color: ${(props) => props.theme.colors.primaryWhite};
  opacity: 0.5;

  font-size: 10px;

  @media (max-width: 450px) {
    font-size: 0px;
  }
`;
