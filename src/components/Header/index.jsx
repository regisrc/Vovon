import { useHistory } from "react-router-dom";

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
import profile from "../../assets/profile.png"

const Header = () => {
  const Title = "Casa de Repouso Nova Esperança"
  const Name = "Filipe";
  const Email = "tcs2021@alunos.sc.senac.br";
  const Dash = "dashboard";
  const List = "list"

  const history = useHistory();

  return (
    <Container>
      <MenuBar>
        <InfosContainer>
          <DateArea>
            <Hour>21:06</Hour>
            <DateTime>Qua, 21 Abril 2021</DateTime>
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