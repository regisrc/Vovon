import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import {
  Container,
  Section,
  ColumnContainer,
  Column,
  NameStatusArea,
  Status,
  Name,
  ExpandIcon,
  SensorIcon,
  SensorValue,
  Footer,
  DeviceStatus,
  Warning
} from "./styles";

import eye from "../../assets/eye.svg"
import heart from "../../assets/heart.svg"
import thermometer from "../../assets/thermometer.svg"
import oximeter from "../../assets/oximeter.svg"
import heartMono from "../../assets/heart-mono.svg"
import thermometerMono from "../../assets/thermometer-mono.svg"
import oximeterMono from "../../assets/oximeter-mono.svg"


const Header = ({user}) => {
  const history = useHistory();
  const [heartIcon, setHeartIcon] = useState(null);
  const [temperatureIcon, setTemperatureIcon] = useState(null);
  const [oxygenIcon, setOxygenIcon] = useState(null);

  useEffect(() => {
    const monocromaticIcons = localStorage.getItem('monocromatic');

    if (monocromaticIcons === 'true') {
      setHeartIcon(heartMono); 
      setTemperatureIcon(thermometerMono)
      setOxygenIcon(oximeterMono)
    } else {
      setHeartIcon(heart); 
      setTemperatureIcon(thermometer)
      setOxygenIcon(oximeter)
    }
  }, [])

  return (
    <Container onClick={() => history.push(`medicalRecord/${user.id_wearable}`)} status={user.warningLevel}>
      <Section>
        <NameStatusArea>
          <Status status={user.warningLevel}/>
          <Name>{user.name}</Name>
        </NameStatusArea>
        <ExpandIcon src={eye}/>
      </Section>
      <ColumnContainer>
      <Column>
        <SensorIcon src={heartIcon} />
        <SensorValue>{user.bpm}</SensorValue>
      </Column>
      <Column>
        <SensorIcon src={temperatureIcon} />
        <SensorValue>{user.temp}</SensorValue>
      </Column>
      <Column>
        <SensorIcon src={oxygenIcon} />
        <SensorValue>{user.oxig}</SensorValue>
      </Column>
      </ColumnContainer>
      <Footer>
        {user.warningLevel == 2 &&
          <Warning status={user.warningLevel}>Perigo!</Warning>
        }
        <DeviceStatus status={user.warningLevel}>Conectado</DeviceStatus>
      </Footer>
    </Container>)
}

export default Header;