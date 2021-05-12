import React from 'react';

import {
  Container,
  ComponentsContainer,
  DashboardContainer,
  CardsContainer,
  CardsContainerTitle,
  Notes,
  NoteText
} from "./styles";
import Header from "../../components/Header"
import Card from "../../components/Card"
import Patients from "../../api/patients"

const messages = [
  { "message": "Claudio revisou TCS (9 min atrás)" },
  { "message": "Claudio revisou TCS (15 min atrás)" },
  { "message": "Claudio revisou TCS (20 min atrás)" },
]

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <ComponentsContainer>
        <DashboardContainer>
          {Patients &&
            Patients.map((User, index) => (
                <Card key={index} user={User} />
            ))
          }
        </DashboardContainer>
        <CardsContainer>
          <CardsContainerTitle>Ultimas atualizações</CardsContainerTitle>
          {messages &&
            messages.map((Message, index) => (
              <Notes key={index}>
                <NoteText>{Message.message}</NoteText>
              </Notes>
            ))
          }
        </CardsContainer>
      </ComponentsContainer>
    </Container>)
}

export default Dashboard;