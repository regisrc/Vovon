import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2"

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
import { useAuthDataContext } from '../../components/Auth'

import loginImage from "../../assets/login-image.svg"
import logo from "../../assets/logo.svg"
import user from "../../assets/user.svg"
import passwordIcon from "../../assets/password.svg"

const Main = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const { onLogin } = useAuthDataContext();

  const buttonClick = () => {
    onLogin(login, password).then(loginHandler)
  }

  const loginHandler = (value) => {
    if (value) {
      let path = `dashboard`;
      history.push(path);
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'error',
        title: 'Falha no login!'
      })
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
          <Input placeholder="Digite seu usuário" value={login} onChange={event => setLogin(event.target.value)}/>
        </InputContainer>
        <InputContainer>
          <InputIcon src={passwordIcon} />
          <Input placeholder="Digite sua senha" type="password" value={password} onChange={event => setPassword(event.target.value)}/>
        </InputContainer>
        <LoginButton onClick={buttonClick}>
          Entrar  
        </LoginButton>
        <PasswordForgot onClick={() => alert("Recuperar Senha!")}>Esqueceu sua senha?</PasswordForgot>
      </LoginContainer>
    </Container>);
};

export default Main;
