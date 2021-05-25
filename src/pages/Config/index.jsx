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

  const Save = () => {
    localStorage.setItem('monocromatic', iconsEnabled);

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
      title: 'Preferencia salva!'
    })
  };

  useEffect(() => {
    const monocromatic = localStorage.getItem('monocromatic');

    setIconsEnabled(monocromatic === 'true')
  }, [])

  return (
    <Container>
      <Header page={'config'}/>
      <CheckBoxContainer>
        <IconsCheckBox type="checkbox" id="checkbox1" name="checkbox1" value={iconsEnabled} checked={!!iconsEnabled} onChange={() => setIconsEnabled(!iconsEnabled)}/>
        <IconLabel htmlFor="checkbox1">Habilitar ícones monocromáticos</IconLabel>
      </CheckBoxContainer>
      <Button onClick={() => Save()}>Salvar</Button>
    </Container>)
}

export default Config;