import React, { useEffect } from 'react';
import Swal from "sweetalert2"
import useSound from 'use-sound';

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
import PatientsSWR from "../../api/patients"
import sound from '../../assets/sound.mp3';

const messages = [
  { "message": "Claudio revisou TCS (9 min atrás)" },
  { "message": "Claudio revisou TCS (15 min atrás)" },
  { "message": "Claudio revisou TCS (20 min atrás)" },
]

const Dashboard = () => {
  const { data } = PatientsSWR();
  const [play] = useSound(sound);

  useEffect(() => {
    if (data?.find(x => x.warningLevel == 2)) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Existem pacientes em perigo!',
        showConfirmButton: true
      })
    
      for (let index = 0; index < 5; index++) {
        play()
      
        new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }, [data])

  return (
    <Container>
      <Header />
      <ComponentsContainer>
        <DashboardContainer>
          {data &&
            data.map((User, index) => (
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