import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Swal from "sweetalert2";

import {
  Container,
  Section,
  ColumnContainer,
  Column,
  NameStatusArea,
  Status,
  Name,
  Icon,
  SensorIcon,
  SensorValue,
  Footer,
  DeviceStatus,
  Warning,
  DeviceStatusContainer,
  InfoIcon
} from "./styles";
import { StatusEnumBR } from '../../service/enums/status';
import { colors } from '../../styles/colors';

import volumeOn from "../../assets/volume_on.svg"
import volumeOff from "../../assets/volume_off.svg"
import heart from "../../assets/heart.svg"
import thermometer from "../../assets/thermometer.svg"
import oximeter from "../../assets/oximeter.svg"
import heartMono from "../../assets/heart-mono.svg"
import thermometerMono from "../../assets/thermometer-mono.svg"
import oximeterMono from "../../assets/oximeter-mono.svg"
import infoStatus from "../../assets/status_info.svg"

const Header = ({user}) => {
  const history = useHistory();
  const [heartIcon, setHeartIcon] = useState(null);
  const [temperatureIcon, setTemperatureIcon] = useState(null);
  const [oxygenIcon, setOxygenIcon] = useState(null);
  const [mute, setMute] = useState(false);

  useEffect(() => {
    const monocromaticIcons = localStorage.getItem('monocromatic');
    const retrievedObject = JSON.parse(localStorage.getItem('mutedObjects'));

    if (retrievedObject?.find(x => x.id === user.id_wearable))
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
      var object = retrievedObject?.find(x => x.id === user.id_wearable)
      var index = retrievedObject?.indexOf(object)
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

  function handleEventType(e) {
    e.stopPropagation();
    Swal.fire(StatusEnumBR[user.status].value);
  }

  const setStatusColor = (warningLevel, status) => {
    if (warningLevel == 2)
      return colors.primaryRed;

    return StatusEnumBR[status].ballColor;
  }

  const setCardColor = (warningLevel, status) => {
    if (warningLevel == 2)
      return colors.secundaryRed;

    return StatusEnumBR[status].color;
  }

  return (
    <Container onClick={() => history.push(`medicalRecord/${user.id_wearable}`)} status={setCardColor(user.warningLevel, user.status)}>
      <Section>
        <NameStatusArea>  
          <Status status={setStatusColor(user.warningLevel, user.status)} />
          <Name>{user.name}</Name> 
        </NameStatusArea>
        <Icon onClick={handleMuteClick} src={mute ? volumeOff : volumeOn}/>
      </Section>
      <ColumnContainer>
      <Column>
        <SensorIcon problem={user.status == 4 || user.status == 2} src={heartIcon} />
        <SensorValue>{user.bpm}</SensorValue>
      </Column>
      <Column>
        <SensorIcon problem={user.status == 3 || user.status == 2} src={temperatureIcon} />
        <SensorValue>{user.temp}</SensorValue>
      </Column>
      <Column>
        <SensorIcon problem={user.status == 4 || user.status == 2} src={oxygenIcon} />
        <SensorValue>{user.oxig}</SensorValue>
      </Column>
      </ColumnContainer>
      <Footer>
        <DeviceStatusContainer onClick={handleEventType}>
          <DeviceStatus status={user.warningLevel}>
            {StatusEnumBR[user.status].value.split(' ')[0]}
          </DeviceStatus>
          <InfoIcon src={infoStatus} />
        </DeviceStatusContainer>
        {user.warningLevel == 2 &&
          <Warning status={user.warningLevel}>Perigo!</Warning>
        }
      </Footer>
    </Container>)
}

export default Header;