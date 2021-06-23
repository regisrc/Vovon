import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100vw;
  padding: 0;
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 90vw;
  min-height: 300px;
  margin: 20px 0px;
  background-color: ${(props) => props.theme.colors.secundaryGreen};
  padding: 20px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  img + div {
    margin: 0px 20px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Photo = styled.img`
  width: 300px;
  height: 256px;

  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  @media (max-width: 900px) {
    margin-bottom: 5px;
  }

  @media (max-width: 400px) {
    width: 250px;
    height: 206px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const Name = styled.h1`
  color: white;
`;

export const Contact = styled.h4`
  color: white;

  @media (max-width: 900px) {
    margin: 10px 0px;
  }
`;

export const ObsContainer = styled.div`
  display: flex;
  height: 100%;

  opacity: 100%;
`;

export const Obs = styled.p`
  text-align: justify;
  text-justify: inter-word;

  color: white;
`;

export const Button = styled.button`
  max-width: 300px;
  min-width: 200px;
  height: 35px;
  min-height: 35px;
  margin: 10px 0px;
  padding: 4px;

  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.tertiaryGray};
  color: ${(props) => props.theme.colors.primaryGray};
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.quaternaryGray};
  }
`;

export const SensorComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 20px;
`;

export const SensorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  background-color: ${(props) => props.theme.colors.secundaryGreen};

  img + div {
    margin: 0px 20px;
  }

  @media (max-width: 1800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Sensor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;

  background-color: ${(props) => props.theme.colors.secundaryGreen};
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.1);

  img + div {
    margin: 0px 20px;
  }
`;

export const SensorHeader = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const SensorTitle = styled.h2`
  color: white;
`;

export const SensorValues = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  h2 + img {
    margin: 0px 10px;
  }
`;

export const Icon = styled.img`
  width: 56px;
  height: 56px;
`;

export const SensorValue = styled.h2`
  color: white;
`;
