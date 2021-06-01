import React, { Suspense, lazy} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ReactLoadingContainer } from './styles';

import auth from '../api/axiosInstance'

const Main = lazy(() => import('../pages/Main'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const List = lazy(() => import('../pages/List'));
const Config = lazy(() => import('../pages/Config'));
const MedicalRecord = lazy(() => import('../pages/MedicalRecord'));

const Loading = (
  <div>
    <ReactLoadingContainer />
  </div>
);

const Routes = () => (
  <Suspense fallback={Loading}>
    <Switch>
      <Route exact path="/" component={Main} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/list" component={List} />
      <PrivateRoute exact path="/config" component={Config} />
      <PrivateRoute path="/medicalRecord/:id" component={MedicalRecord} />
    </Switch>
  </Suspense>
);

function PrivateRoute({ component: Component, ...rest }) {
  const authToken = localStorage.getItem('authToken')

  const authenticated = auth.post("/login/auth", { "token": authToken }).then(() => { return true }).catch(() => { return false })

  console.log(authenticated)

  return (
    <Route
      {...rest} 
      render={(props) => authenticated.then(value => { return value })
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}

const Auth = () => {
  const authToken = localStorage.getItem('authToken')

  const authenticated = auth.post("/login/auth", { "token": authToken }).catch(err => { return false })

  return authenticated
}

export default Routes;