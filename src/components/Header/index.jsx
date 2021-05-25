import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react"

import {
  Container,
  MenuBar,
  ILPITitle,
  InfosContainer,
  GridDisplay,
  ButtonIcon,
  DateArea,
  Hour,
  DateTime,
  ConfigArea
} from "./styles";

import dashboard from "../../assets/dashboard.svg"
import list from "../../assets/list.svg"
import config from "../../assets/gear.svg"

import { date, hour } from "../../service/utils/date-format"

const Header = ({ page }) => {
  const Title = "Casa de Repouso Nova Esperança"
  const Dash = "dashboard";
  const List = "list";
  const Config = "config";
  const [stateHour, setStateHour] = useState(hour);
  const [stateDate, setStateDate] = useState(date);
  const [changeHour, setChangeHour] = useState(true);
  const [isMounted, setIsMounted] = useState(false)

  const history = useHistory();

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (!isMounted) return

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
          <GridDisplay view={page === 'dash'} onClick={() => history.push(Dash)}><ButtonIcon src={dashboard}/></GridDisplay>
          <GridDisplay view={page === 'list'} onClick={() => history.push(List)}><ButtonIcon src={list} /></GridDisplay>
        </InfosContainer>
        <ILPITitle>
          {Title}
        </ILPITitle>
        <ConfigArea>
          <GridDisplay view={page === 'config'} onClick={() => history.push(Config)}><ButtonIcon src={config} /></GridDisplay>
        </ConfigArea>
      </MenuBar>
    </Container>)
}

export default Header;