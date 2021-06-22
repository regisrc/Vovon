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
import equal from "../../assets/equal.svg"
import decrease from "../../assets/decrease.svg"

const MedicalRecord = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [sensors, setSensors] = useState();
  const medicalRecordValue = useRef(Patient(id)) 
  const sensorsValue = useRef(Sensors(id)) 
  const [isMounted, setIsMounted] = useState(false);
  const history = useHistory();

  const returnImage = (value) => {
    if (value === -1)
      return decrease
    else if (value === 1)
      return increase
    else
      return equal
  }

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
        <Photo src={data.foto}/>
        <InfoContainer>
          <Name>{data.nome}</Name>
          <Contact>{data.nrContato}</Contact>
          <ObsContainer>
            <Obs>
            {data.obsGerais}
            </Obs>
          </ObsContainer>
          <Button onClick={() => history.push(`/manualInput`)}>Cadastrar Alertas</Button>
          <Button onClick={() => history.push(`/verifyAlerts`)}>Ver Alertas</Button>
          <Button onClick={() => history.push(`/manualInput/${id}`)}>Aferição manual</Button>
        </InfoContainer>  
        <SensorComponentContainer>
        <SensorContainer>
        <Sensor>
          <SensorHeader>
            <SensorTitle>Temperatura</SensorTitle> 
          </SensorHeader>
          <SensorValues>
            <SensorValue>{sensors?.sensores?.temp.valorAtual}</SensorValue> 
            <Icon src={returnImage(sensors?.sensores?.temp.variacao)}/>   
          </SensorValues>
        </Sensor>  
        <Sensor>
          <SensorHeader>
            <SensorTitle>Batimentos</SensorTitle> 
          </SensorHeader>
          <SensorValues>
            <SensorValue>{sensors?.sensores?.bpm.valorAtual}</SensorValue> 
            <Icon src={returnImage(sensors?.sensores?.bpm.variacao)}/>   
          </SensorValues>
        </Sensor> 
        <Sensor>
          <SensorHeader>
            <SensorTitle>Oxigenação</SensorTitle> 
          </SensorHeader>
          <SensorValues>
            <SensorValue>{sensors?.sensores?.oxig.valorAtual}</SensorValue> 
            <Icon src={returnImage(sensors?.sensores?.oxig.variacao)}/>   
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