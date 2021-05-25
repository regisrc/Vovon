import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  padding: 0;
  text-align: center;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

export const CheckBoxContainer = styled.div`
  max-width: 300px;
  padding: 5px;
  margin: 0px 25px;
  margin-top: 20px;
`;

export const IconsCheckBox = styled.input`
  cursor: pointer;
`;

export const IconLabel = styled.label`
  padding: 5px;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */              
  cursor: pointer;
`;

export const Button = styled.button`
  max-width: 300px;
  height: 35px;
  min-height: 35px;
  margin: 10px 20px;

  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.tertiaryGray};
  color: ${(props) => props.theme.colors.primaryGray};
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.quaternaryGray};
  }
`;