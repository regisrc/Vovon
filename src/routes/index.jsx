import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ReactLoadingContainer } from './styles';

import AuthDataProvider, { useAuthDataContext } from '../components/Auth'

const Main = lazy(() => import('../pages/Main'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const List = lazy(() => import('../pages/List'));
const Config = lazy(() => import('../pages/Config'));
const MedicalRecord = lazy(() => import('../pages/MedicalRecord'));
const AddAlerts = lazy(() => import('../pages/AddAlerts'));
const VerifyAlerts = lazy(() => import('../pages/VerifyAlerts'));
const ManualInput = lazy(() => import('../pages/ManualInput'));

const Loading = (
  <div>
    <ReactLoadingContainer />
  </div>
);

const Routes = () => (
  <Suspense fallback={Loading}>
    <Redirect from="/" to="/login" />
    <AuthDataProvider>
      <Switch>
        <Route exact path="/login" component={Main} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/list" component={List} />
        <PrivateRoute exact path="/config" component={Config} />
        <PrivateRoute path="/medicalRecord/:id" component={MedicalRecord} />
        <PrivateRoute exact path="/addAlerts" component={AddAlerts} />
        <PrivateRoute exact path="/verifyAlerts" component={VerifyAlerts} />
        <PrivateRoute path="/manualInput/:id" component={ManualInput} />
      </Switch>
    </AuthDataProvider>
  </Suspense>
);

function PrivateRoute({ component: Component, ...rest }) {
  const { token } = useAuthDataContext();

  return (
    <Route
      {...rest} 
      render={(props) => token
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

export default Routes;