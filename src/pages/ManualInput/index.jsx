import React, { useState, useEffect } from 'react';
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

const ManualInput = () => {
  const [iconsEnabled, setIconsEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [alertsEnabled, setAlertsEnabled] = useState(false);

  const alert = [
    "Alto",
    "Médio",
    "Baixo"
  ];

  const sensor = [
    "Temperatura",
    "Oxigenação",
    "Oxímetro"
  ];

  const Save = () => {
    localStorage.setItem('monocromatic', iconsEnabled);
    localStorage.setItem('sound', soundEnabled);
    localStorage.setItem('alert', alertsEnabled);

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
      title: 'Preferencias salva!'
    })
  };

  useEffect(() => {
    const monocromatic = localStorage.getItem('monocromatic');
    const sound = localStorage.getItem('sound');
    const alert = localStorage.getItem('alert');

    setIconsEnabled(monocromatic === 'true')
    setSoundEnabled(sound === 'true')
    setAlertsEnabled(alert === 'true')
  }, [])

  return (
    <Container>
      <Header/>
      <InputsContainer>
        <InputContainer>
            <Input placeholder="Descrição do alerta"/>
          </InputContainer>
          <ComboBox 
          options={alert} 
          placeholder={"Nível de Alerta"}
          style={{ width: "100%", height: "80%", backgroundColor: "#f8f8f8" }}/>
          <ValuesContainer>
            <ComboBox 
            options={sensor} 
            placeholder={"Sensor"}
            style={{ width: "100%", height: "80%", backgroundColor: "white" }}/>
            <InputContainer white={true}>
              <Input white={true} placeholder="Operação (<, >, <=, >=, =)"/>
            </InputContainer>  
            <InputContainer last={true} white={true}>
              <Input white={true} placeholder="Valor"/>
            </InputContainer>  
          </ValuesContainer>
        <Button onClick={() => Save()}>Enviar</Button>
      </InputsContainer>
    </Container>)
}

export default ManualInput;