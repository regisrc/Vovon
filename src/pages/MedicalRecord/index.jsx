import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  Container
} from "./styles";
import Header from "../../components/Header"

const MedicalRecord = () => {
  let { id } = useParams();

  return (
    <Container>
      <Header page={'medicalRecord'}/>
      {id}
    </Container>)
}

export default MedicalRecord;