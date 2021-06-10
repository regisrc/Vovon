import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Swal from "sweetalert2"

import {
  Container,
  CardContainer,
  Photo,
  Name,
  Contact,
  InfoContainer,
  ObsContainer,
  Obs,
  Button,
  SensorComponentContainer,
  SensorContainer,
  Sensor,
  SensorHeader,
  SensorTitle,
  SensorValues,
  Icon,
  SensorValue,
} from "./styles";
import Header from "../../components/Header"
import { Patient } from "../../api/patients"

import increase from "../../assets/increase.svg"
import decrease from "../../assets/decrease.svg"

const MedicalRecord = () => {
  let { id } = useParams();
  const [data, setData] = useState();
  const medicalRecordValue = useRef(Patient(id)) 
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    medicalRecordValue.current.then(setData)

  }, [isMounted]);

  const HandleForm = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Multiple inputs',
      html:
        '<input id="swal-input1" class="swal2-input">' +
        '<input id="swal-input2" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })
    
    if (formValues) {
      Swal.fire(JSON.stringify(formValues))
    }
  }

  return (
    <Container>
      <Header page={'medicalRecord'}/>
      <CardContainer>
        <Photo src="https://imagevars.gulfnews.com/2019/11/01/Grandpa-Kitchen_16e26379544_large.jpg"/>
        <InfoContainer>
          <Name>José Alfredo Mansini</Name>
          <Contact>Contato de emergência: (47) 99213-8899</Contact>
          <ObsContainer>
            <Obs>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Obs>
          </ObsContainer>
          <Button onClick={HandleForm}>Cadastrar métricas</Button>
        </InfoContainer>  
        <SensorComponentContainer>
        <SensorContainer>
        <Sensor>
          <SensorHeader>
            <SensorTitle>Temperatura</SensorTitle> 
          </SensorHeader>
          <SensorValues>
            <SensorValue>30,2</SensorValue> 
            <Icon src={increase}/>   
          </SensorValues>
        </Sensor>  
        <Sensor>
          <SensorHeader>
            <SensorTitle>Batimentos</SensorTitle> 
          </SensorHeader>
          <SensorValues>
            <SensorValue>90</SensorValue> 
            <Icon src={decrease}/>   
          </SensorValues>
        </Sensor> 
        <Sensor>
          <SensorHeader>
            <SensorTitle>Oxigenação</SensorTitle> 
          </SensorHeader>
          <SensorValues>
            <SensorValue>100</SensorValue> 
            <Icon src={increase}/>   
          </SensorValues>
        </Sensor>     
        </SensorContainer>
        <Button>Recarregar</Button>
        </SensorComponentContainer>    
      </CardContainer>
    </Container>)
}

export default MedicalRecord;