import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ReactLoadingContainer } from './styles';

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
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/list" component={List} />
      <Route exact path="/config" component={Config} />
      <Route path="/medicalRecord/:id" component={MedicalRecord} />
    </Switch>
  </Suspense>
);

export default Routes;