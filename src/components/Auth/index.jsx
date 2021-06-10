import React, { createContext, useState, useEffect, useContext } from "react";

import authApi from '../../api/auth'
import loginApi from '../../api/login'

export const AuthDataContext = createContext(null);

const initialAuthData = null;

const AuthDataProvider = props => {
  const [authData, setAuthData] = useState(initialAuthData);

  useEffect(() => {
    authContext()
  }, []);

  const onLogout = () => setAuthData(initialAuthData);

  const onLogin = (login, password) => loginApi(login, password) 
                  .then(value => { setAuthData(value.data); return value.data; })
                  .catch(() => { onLogout(); return initialAuthData; });

  const authContext = () => authApi().catch(setAuthData(null));

  return <AuthDataContext.Provider value={{ ...authData, onLogin, onLogout, authContext }} {...props} />;
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;