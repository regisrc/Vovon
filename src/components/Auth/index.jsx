import React, { createContext, useState, useEffect, useContext } from "react";

import authApi from '../../api/auth'

export const AuthDataContext = createContext(null);

const initialAuthData = null;

const AuthDataProvider = props => {
  const [authData, setAuthData] = useState(initialAuthData);

  useEffect(() => {
    authContext()
  }, []);

  const onLogout = () => setAuthData(initialAuthData);

  const onLogin = newAuthData => setAuthData(newAuthData);

  const authContext = () => authApi().then(value => setAuthData(value.data)).catch(setAuthData(null))

  return <AuthDataContext.Provider value={{ ...authData, onLogin, onLogout, authContext }} {...props} />;
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;