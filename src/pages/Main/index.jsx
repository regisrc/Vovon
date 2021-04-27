import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  ImagesContainer,
  ImageLogoContainer,
  LogoContainer,
  LoginContainer,
  ProfileImage,
  InputContainer,
  InputIcon,
  Input,
  LoginButton,
  PasswordForgot
} from "./styles";
import ExecuteLogin from "../../api/login";

import loginImage from "../../assets/login-image.svg"
import logo from "../../assets/logo.svg"
import user from "../../assets/user.svg"
import passwordIcon from "../../assets/password.svg"

const Main = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const buttonClick = () => {
    var logged = ExecuteLogin(login, password)

    if (logged) {
      let path = `dashboard`;
      history.push(path);
    } else {
      alert("Login inválido!")
    }
  }

  return (
    <Container>
      <ImagesContainer>
        <LogoContainer src={logo} />
        <ImageLogoContainer src={loginImage} />
      </ImagesContainer>
      <LoginContainer>
        <ProfileImage src="https://avatars.githubusercontent.com/u/47003719?v=4"/>
        <InputContainer>
          <InputIcon src={user} />
          <Input placeholder="Digite seu usuário..." value={login} onChange={event => setLogin(event.target.value)}/>
        </InputContainer>
        <InputContainer>
          <InputIcon src={passwordIcon} />
          <Input placeholder="Digite sua senha..." type="password" value={password} onChange={event => setPassword(event.target.value)}/>
        </InputContainer>
        <LoginButton onClick={buttonClick}>
          Entrar  
        </LoginButton>
        <PasswordForgot onClick={() => alert("Recuperar Senha!")}>Esqueceu sua senha? <b>Clique aqui para recuperar</b></PasswordForgot>
      </LoginContainer>
    </Container>);
};

export default Main;
