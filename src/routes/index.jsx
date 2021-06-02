import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ReactLoadingContainer } from './styles';

import AuthDataProvider, { useAuthDataContext } from '../components/Auth'

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
    <AuthDataProvider>
      <Switch>
        <Route exact path="/" component={Main} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/list" component={List} />
        <PrivateRoute exact path="/config" component={Config} />
        <PrivateRoute path="/medicalRecord/:id" component={MedicalRecord} />
      </Switch>
    </AuthDataProvider>
  </Suspense>
);

function PrivateRoute({ component: Component, ...rest }) {
  const { auth } = useAuthDataContext();

  return (
    <Route
      {...rest} 
      render={(props) => auth
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}

export default Routes;