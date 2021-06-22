import { useState, useEffect } from "react"
import Clock from 'react-live-clock';
import 'moment/locale/pt';
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (!isMounted) return
  }, []);
  
  return (
    <Container>
      <MenuBar>
        <InfosContainer>
          <DateArea>
            <Hour><Clock
                format={'HH:mm'}
                ticking={true}
                timezone={'America/Sao_Paulo'} /></Hour>
            <DateTime>
              <Clock
                format={`ddd, DD MMMM, YYYY`}
                ticking={true}
                timezone={'America/Sao_Paulo'} 
                locale='pt'/>
            </DateTime>
          </DateArea>
          <GridDisplay view={page === 'dash'} onClick={() => history.push(`/${Dash}`)}><ButtonIcon src={dashboard}/></GridDisplay>
          <GridDisplay view={page === 'list'} onClick={() => history.push(`/${List}`)}><ButtonIcon src={list} /></GridDisplay>
        </InfosContainer>
        <ILPITitle>
          {Title}
        </ILPITitle>
        <ConfigArea>
          <GridDisplay view={page === 'config'} onClick={() => history.push(`/${Config}`)}><ButtonIcon src={config} /></GridDisplay>
        </ConfigArea>
      </MenuBar>
    </Container>)
}

export default Header;