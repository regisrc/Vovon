import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react"
import Clock from 'react-live-clock';
import 'moment/locale/pt';

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

const Header = ({ page }) => {
  const Title = "Casa de Repouso Nova Esperança"
  const Dash = "dashboard";
  const List = "list";
  const Config = "config";
  const [isMounted, setIsMounted] = useState(false);
  const [exitPage, setExitPage] = useState(false);
  const [route, setRoute] = useState(null);

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const pushOrGoBack = (route) => {
    setRoute(`/${route}`)
    setExitPage(true)
  }

  useEffect(() => {
    if (!isMounted) return
  }, []);
  
  return (
    <Container>
      {exitPage && <Redirect to={route} />}
      <MenuBar>
        <InfosContainer>
          <DateArea>
            <Hour><Clock
                format={'HH:mm'}
                ticking={true}
                timezone={'America/Sao_Paulo'} /></Hour>
            <DateTime>
              <Clock
                format={'ddd, MMMM Mo, YYYY'}
                ticking={true}
                timezone={'America/Sao_Paulo'} 
                locale='pt'/>
            </DateTime>
          </DateArea>
          <GridDisplay view={page === 'dash'} onClick={() => pushOrGoBack(Dash)}><ButtonIcon src={dashboard}/></GridDisplay>
          <GridDisplay view={page === 'list'} onClick={() => pushOrGoBack(List)}><ButtonIcon src={list} /></GridDisplay>
        </InfosContainer>
        <ILPITitle>
          {Title}
        </ILPITitle>
        <ConfigArea>
          <GridDisplay view={page === 'config'} onClick={() => pushOrGoBack(Config)}><ButtonIcon src={config} /></GridDisplay>
        </ConfigArea>
      </MenuBar>
    </Container>)
}

export default Header;