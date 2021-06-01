import React, { useState, useEffect } from 'react';
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
import { FormatIndentDecreaseSharp } from '@material-ui/icons';

const messages = [
  { "message": "Claudio revisou TCS (9 min atrás)" },
  { "message": "Claudio revisou TCS (15 min atrás)" },
  { "message": "Claudio revisou TCS (20 min atrás)" },
]

const Dashboard = () => {
  const { data } = PatientsSWR();
  const [play, { stop, isPlaying }] = useSound(sound);
  const [isMounted, setIsMounted] = useState(false)
  const [soundOff] = useState(localStorage.getItem('sound') === 'true');
  const [alertOff] = useState(localStorage.getItem('alert') === 'true');

  useEffect(() => {
    setIsMounted(true)

    return () => setIsMounted(false)
  }, [])
  
  useEffect(() => {
    if (!isMounted) return
    
    const objectsWithWarning = data?.filter(x => x.warningLevel == 2);

    if (objectsWithWarning) {
      let retrievedObject = JSON.parse(localStorage.getItem('mutedObjects'));

      let objectsWithWarningAndMuted = 0;

      objectsWithWarning.forEach(x => retrievedObject.find(y => y.id == x.id_wearable) ? objectsWithWarningAndMuted++ : 0)

      if(!isPlaying && !soundOff && objectsWithWarningAndMuted !== objectsWithWarning.length)
        play()

      if (!alertOff) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 10000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('click', Swal.close)
          }
        })

        Toast.fire({
          icon: 'error',
          title: 'Existem pacientes em perigo!'
        })
      }
    } else {
      if (isPlaying && !soundOff)
        stop()
    }
  }, [data])

  return (
    <Container>
      <Header page={'dash'}/>
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