import React, { useState } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

import {
  Container,
  InputContainer,
  Input,
  InputsContainer,
  Button,
} from "./styles";
import Header from "../../components/Header";
import { Admeasurement } from "../../api/patients";
import { useAuthDataContext } from "../../components/Auth";

const ManualInput = () => {
  const { id } = useParams();
  const [bpm, setBpm] = useState("");
  const [oxygen, setOxygen] = useState("");
  const [temperature, setTemperature] = useState("");
  const { token } = useAuthDataContext();

  const CallEndpoint = () => {
    const objectToBeSend = {
      id: id,
      temp: parseFloat(temperature),
      oxig: parseFloat(oxygen),
      bpm: parseFloat(bpm),
    };

    Admeasurement(objectToBeSend, token).then(Save());
  };

  const Save = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 10000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("click", Swal.close);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Valores salvos!",
    });
  };

  return (
    <Container>
      <Header />
      <InputsContainer>
        <InputContainer>
          <Input
            placeholder="BPM"
            value={bpm}
            onChange={(event) => setBpm(event.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Input
            placeholder="Oxigenação"
            value={oxygen}
            onChange={(event) => setOxygen(event.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Input
            placeholder="Temperatura"
            value={temperature}
            onChange={(event) => setTemperature(event.target.value)}
          />
        </InputContainer>
        <Button onClick={CallEndpoint}>Enviar</Button>
      </InputsContainer>
    </Container>
  );
};

export default ManualInput;
