import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  padding: 0;
  text-align: center;
`;

export const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100vw;
  text-align: center;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 80vw;
  padding: 20px;
  text-align: center;

  @media (max-width: 900px) {
    width: 100vw;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 20vw;
  height: 80vh;
  padding: 20px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.secundaryGreen};
  margin: 20px;
  text-align: center;

  @media (max-width: 900px) {
    width: 0px;
    height: 0px;
    padding: 0px;
  }
`;

export const CardsContainerTitle = styled.h4`
  font-weight: normal;
  color: white;

  @media (max-width: 900px) {
    font-size: 0px;
  }
`;

export const Notes = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 10px 0px;
  text-align: center;

  @media (max-width: 900px) {
    width: 0px;
    height: 0px;
    padding: 0px;
  }
`;

export const NoteText = styled.h5`
  color: white;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 0px;
  }
`;
