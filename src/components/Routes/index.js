import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import NotFound from '../../pages/NotFound';
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
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
