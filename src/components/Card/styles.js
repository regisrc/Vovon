import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 30%;
  padding: 0;
  text-align: center;

  height: 160px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  background-color: rgba(77, 182, 172, 1);
  cursor: pointer;
  margin: 10px;

  @media (max-width: 900px) {
    width: 40%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  ${(props) =>
    props.status === 2 &&
    css`
      background-color: ${(props) => props.theme.colors.secundaryRed};
    `}
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  padding: 5px 5px;

  height: 40px;
  margin-bottom: 9px;

  background-color: rgba(0, 0, 0, 0.1);
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;
  height: 80px;
`;

export const NameStatusArea = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  color: white;
  margin-left: 4px;

  div + h3 {
    margin: 0px 7px;
  }
`;

export const Status = styled.div`
  min-width: 24px;
  min-height: 24px;

  background-color: ${(props) => props.theme.colors.tertiaryGreen};
  border-radius: 50%;
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

export const Name = styled.h3`
  font-weight: normal;
`;

export const MuteIcon = styled.img`
  width: 24px;
  height: 24px;
  opacity: 80%;

  :hover {
    opacity: 100%;
  }
`;

export const SensorIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const SensorValue = styled.h3`
  font-weight: normal;
  color: white;
`;

export const DeviceStatus = styled.p`
  color: white;
  opacity: 70%;

  :hover {
    opacity: 100%;
  }
`;

export const Warning = styled.p`
  color: white;
  opacity: 70%;

  :hover {
    opacity: 100%;
  }

  ${(props) =>
    props.status === 2 &&
    css`
        animation: blinker 1s linear infinite;

        @keyframes blinker {
          50% {
            opacity: 0;
          }
        }
      };
  `}
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;

  justify-content: space-between;
  padding: 5px 12px;
  font-size: 14px;

  ${(props) =>
    props.status === 2 &&
    css`
        justify-content: center;
        animation: blinker 1s linear infinite;

        @keyframes blinker {
          50% {
            opacity: 0;
          }
        }
      };
  `}
`;
