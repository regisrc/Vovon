import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react"

import {
  Container,
  MenuBar,
  UserArea,
  UserProfile,
  UserEmailAndNameContainer,
  UserName,
  UserEmail,
  ILPITitle,
  InfosContainer,
  GridDisplay,
  ButtonIcon,
  DateArea,
  Hour,
  DateTime
} from "./styles";

import dashboard from "../../assets/dashboard.svg"
import list from "../../assets/list.svg"

import { date, hour } from "../../service/utils/date-format"

const Header = () => {
  const Title = "Casa de Repouso Nova Esperança"
  const Dash = "dashboard";
  const List = "list"
  const [stateHour, setStateHour] = useState(hour);
  const [stateDate, setStateDate] = useState(date);
  const [changeHour, setChangeHour] = useState(true);

  const history = useHistory();

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    async function fetchData() {
      await sleep(5000);
      
      setStateHour(hour)
      setStateDate(date)
      setChangeHour(true)
    }

    fetchData()
    setChangeHour(false)
  }, [setChangeHour]);

  return (
    <Container>
      <MenuBar>
        <InfosContainer>
          <DateArea>
            <Hour>{stateHour}</Hour>
            <DateTime>{stateDate}</DateTime>
          </DateArea>
          <GridDisplay onClick={() => history.push(Dash)}><ButtonIcon src={dashboard}/></GridDisplay>
          <GridDisplay onClick={() => history.push(List)}><ButtonIcon src={list} /></GridDisplay>
        </InfosContainer>
        <ILPITitle>
          {Title}
        </ILPITitle>
      </MenuBar>
    </Container>)
}

export default Header;