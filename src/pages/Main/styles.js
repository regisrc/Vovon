import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100vw;
  padding: 0;
  text-align: center;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-color: ${(props) => props.theme.colors.primaryGreen};
  height: 100vh;
  width: 70vw;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 0px;
    justify-content: center;
  }
`;

export const LogoContainer = styled.img`
  height: 50vh;
  width: 70vw;

  position: absolute;

  @media (max-width: 500px) {
    position: relative;
  }
`;

export const ImageLogoContainer = styled.img`
  height: 90vh;
  width: 70vw;

  position: relative;
  top: 170px;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.primaryWhite};
  height: 100vh;
  width: 30vw;

  @media (max-width: 500px) {
    width: 100vw;

    position: relative;
  }
`;

export const ProfileImage = styled.img`
  width: 128px;
  height: 128px;

  border-radius: 50%;
  margin-bottom: 50px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 80%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.primaryWhite};
  margin: 10px 0px;

  background-color: ${(props) => props.theme.colors.primaryGray};
  border: 1px solid ${(props) => props.theme.colors.secundaryGray};
  border-radius: 3px;
`;

export const InputIcon = styled.img`
  width: 24px;
  height: 24px;

  margin-right: 10px;
`;

export const Input = styled.input`
  width: 60%;
  height: 80%;

  background-color: ${(props) => props.theme.colors.primaryGray};
  border: 0px;
  padding: 3px;
`;

export const LoginButton = styled.button`
  width: 80%;
  height: 50px;
  margin: 10px 0px;
  margin-bottom: 20px;

  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.tertiaryGray};
  color: ${(props) => props.theme.colors.primaryGray};
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.quaternaryGray};
  }
`;

export const PasswordForgot = styled.p`
  color: ${(props) => props.theme.colors.tertiaryGray};

  font-size: 14px;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.quaternaryGray};
  }
`;
