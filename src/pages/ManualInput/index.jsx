import React, { useState, useRef } from 'react';
import Swal from "sweetalert2"

import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";

import {
  Container,
  InputContainer,
  Input,
  InputsContainer,
  Button,
  ValuesContainer
} from "./styles";
import Header from "../../components/Header"
import { Sensors, Operation, AlertLevel } from "../../service/enums/alerts.js"
import { Alerts } from "../../api/patients"

const ManualInput = () => {
  const [desc, setDesc] = useState("");
  const [sensorType, setSensorType] = useState("");
  const [alertLevel, setAlertLevel] = useState("");
  const [operationType, setOperationType] = useState("");
  const [value, setValue] = useState("");
  const objectToBeSend = {
    desc: desc,
    alertLevel: alertLevel,
    operationType: operationType,
    referenceValue: value,
    sensorType: sensorType,
  };
  const alertEndpoint = useRef(Alerts(objectToBeSend))
  
  const CallEndpoint = () => {
    alertEndpoint.current.then(Save())
  }

  const Save = () => {
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
      icon: 'success',
      title: 'Alertas salvos!'
    })
  };

  return (
    <Container>
      <Header/>
      <InputsContainer>
        <InputContainer>
            <Input placeholder="Descrição do alerta" value={desc} onChange={event => setDesc(event.target.value)}/>
          </InputContainer>
          <ComboBox 
          options={AlertLevel} 
          placeholder={"Nível de Alerta"}
          style={{ width: "100%", height: "80%", backgroundColor: "#f8f8f8" }}
          onSelect={(option) => setAlertLevel(AlertLevel.indexOf(option))}/>
          <ValuesContainer>
            <ComboBox 
            options={Sensors} 
            placeholder={"Sensor"}
            style={{ width: "100%", height: "80%", backgroundColor: "white", marginBottom: "10px" }}
            onSelect={(option) => setSensorType(Sensors.indexOf(option))}/>
            <ComboBox 
            options={Operation} 
            placeholder={"Operação"}
            style={{ width: "100%", height: "80%", backgroundColor: "white", marginBottom: "10px" }}
            onSelect={(option) => setOperationType(Operation.indexOf(option))} />
            <InputContainer last={true} white={true}>
              <Input white={true} placeholder="Valor" value={value} onChange={event => setValue(event.target.value)}/>
            </InputContainer>  
          </ValuesContainer>
        <Button onClick={CallEndpoint}>Enviar</Button>
      </InputsContainer>
    </Container>)
}

export default ManualInput;