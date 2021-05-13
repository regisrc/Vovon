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

  return (
    <Container>
      <Section>
        <NameStatusArea>
          <Status status={user.warningLevel}/>
          <Name>{user.name}</Name>
        </NameStatusArea>
        <ExpandIcon src={eye}/>
      </Section>
      <ColumnContainer>
      <Column>
        <SensorIcon src={heart} />
        <SensorValue>{user.bpm}</SensorValue>
      </Column>
      <Column>
        <SensorIcon src={thermometer} />
        <SensorValue>{user.temp}</SensorValue>
      </Column>
      <Column>
        <SensorIcon src={oximeter} />
        <SensorValue>{user.oxig}</SensorValue>
      </Column>
      </ColumnContainer>
    </Container>)
}

export default Header;