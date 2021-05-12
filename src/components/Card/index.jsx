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
  SensorValue
} from "./styles";

import eye from "../../assets/eye.svg"
import heart from "../../assets/heart.svg"
import thermometer from "../../assets/thermometer.svg"
import oximeter from "../../assets/oximeter.svg"

const Header = ({user}) => {
  const history = useHistory();
  const [dangerLevel, setDangerLevel] = useState(0);

  useEffect(() => {
    if(user.bpm.level === "2" || user.temperatura.level === "2" || user.oxigenacao.level === "2")
      setDangerLevel(2)
    else if (user.bpm.level === "1" || user.temperatura.level === "1" || user.oxigenacao.level === "1")
      setDangerLevel(1)
  }, [])

  return (
    <Container>
      <Section>
        <NameStatusArea>
          <Status status={dangerLevel}/>
          <Name>{user.user}</Name>
        </NameStatusArea>
        <ExpandIcon src={eye}/>
      </Section>
      <ColumnContainer>
      <Column>
        <SensorIcon src={heart} />
        <SensorValue status={user.bpm.level}>{user.bpm.value}</SensorValue>
      </Column>
      <Column>
        <SensorIcon src={thermometer} />
        <SensorValue status={user.temperatura.level}>{user.temperatura.value}</SensorValue>
      </Column>
      <Column>
        <SensorIcon src={oximeter} />
        <SensorValue status={user.oxigenacao.level}>{user.oxigenacao.value}</SensorValue>
      </Column>
      </ColumnContainer>
    </Container>)
}

export default Header;