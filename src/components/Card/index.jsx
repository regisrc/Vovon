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
  MuteIcon,
  SensorIcon,
  SensorValue,
  Footer,
  DeviceStatus,
  Warning
} from "./styles";

import volumeOn from "../../assets/volume_on.svg"
import volumeOff from "../../assets/volume_off.svg"
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
  const [mute, setMute] = useState(false);

  useEffect(() => {
    const monocromaticIcons = localStorage.getItem('monocromatic');
    const retrievedObject = JSON.parse(localStorage.getItem('mutedObjects'));

    if (retrievedObject.find(x => x.id === user.id_wearable))
      setMute(true)

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

  function handleMuteClick(e) {
    e.stopPropagation();
    setMute(!mute);

    let retrievedObject = JSON.parse(localStorage.getItem('mutedObjects'));

    if (retrievedObject) {
      var object = retrievedObject.find(x => x.id === user.id_wearable)
      var index = retrievedObject.indexOf(object)
      if (index > -1)
        retrievedObject.splice(index, 1);
      else
        retrievedObject.push({ 'id': user.id_wearable });
        
      localStorage.setItem('mutedObjects', JSON.stringify(retrievedObject));
    }
    else {
      localStorage.setItem('mutedObjects', JSON.stringify(([{ 'id': user.id_wearable }])));
    }
  }

  return (
    <Container onClick={() => history.push(`medicalRecord/${user.id_wearable}`)} status={user.warningLevel}>
      <Section>
        <NameStatusArea>  
          <Status status={user.warningLevel} />
          <Name>{user.name}</Name> 
        </NameStatusArea>
        <MuteIcon onClick={handleMuteClick} src={mute ? volumeOff : volumeOn}/>
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