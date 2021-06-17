import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';

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
import { Loading } from "../../components/LoadingComponent";
import { Patient, Sensors } from "../../api/patients"

import increase from "../../assets/increase.svg"
import decrease from "../../assets/decrease.svg"

const MedicalRecord = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [sensors, setSensors] = useState();
  const medicalRecordValue = useRef(Patient(id)) 
  const sensorsValue = useRef(Sensors(id)) 
  const [isMounted, setIsMounted] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    medicalRecordValue.current.then(value => setData(value.data))
    sensorsValue.current.then(value => setSensors(value.data))
  }, [isMounted]);

  return (
    <Container>
      <Header page={'medicalRecord'}/>
      {(id && data)  && 
      <CardContainer>
        <Photo src="https://imagevars.gulfnews.com/2019/11/01/Grandpa-Kitchen_16e26379544_large.jpg"/>
        <InfoContainer>
          <Name>{data.nome}</Name>
          <Contact>{data.nrContato}</Contact>
          <ObsContainer>
            <Obs>
            {data.obsGerais}
            </Obs>
          </ObsContainer>
          <Button onClick={() => history.push(`/manualInput/${id}`)}>Aferição manual</Button>
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
        </SensorComponentContainer>    
      </CardContainer>
      }
      {((!id || !data) && isMounted) && Loading}
    </Container>)
}

export default MedicalRecord;