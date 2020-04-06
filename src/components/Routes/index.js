import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import About from '../../pages/About';
import Articles from '../../pages/Articles';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Route from './RouteWrapper';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/articles" component={Articles} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
