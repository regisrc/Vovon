import React, { useState, useEffect } from 'react';
import Swal from "sweetalert2"

import {
  Container,
  CheckBoxContainer,
  IconsCheckBox,
  IconLabel,
  Button
} from "./styles";
import Header from "../../components/Header"

const Config = () => {
  const [iconsEnabled, setIconsEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [alertsEnabled, setAlertsEnabled] = useState(false);

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
      <Header page={'config'}/>
      <CheckBoxContainer>
        <IconsCheckBox type="checkbox" id="checkbox1" name="checkbox1" value={iconsEnabled} checked={!!iconsEnabled} onChange={() => setIconsEnabled(!iconsEnabled)}/>
        <IconLabel htmlFor="checkbox1">Habilitar ícones monocromáticos</IconLabel>
      </CheckBoxContainer>
      <CheckBoxContainer>
        <IconsCheckBox type="checkbox" id="checkbox2" name="checkbox2" value={soundEnabled} checked={!!soundEnabled} onChange={() => setSoundEnabled(!soundEnabled)}/>
        <IconLabel htmlFor="checkbox2">Desabilitar som de alerta</IconLabel>
      </CheckBoxContainer>
      <CheckBoxContainer>
        <IconsCheckBox type="checkbox" id="checkbox3" name="checkbox3" value={alertsEnabled} checked={!!alertsEnabled} onChange={() => setAlertsEnabled(!alertsEnabled)}/>
        <IconLabel htmlFor="checkbox3">Desabilitar alerta</IconLabel>
      </CheckBoxContainer>
      <Button onClick={() => Save()}>Salvar</Button>
    </Container>)
}

export default Config;