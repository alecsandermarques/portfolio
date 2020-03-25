import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import NotFound from '../NotFound';
import About from '../../pages/About';
import Home from '../../pages/Home';
import Skills from '../../pages/Skills';
import Route from './RouteWrapper';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
