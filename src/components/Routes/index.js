import React from 'react';
import { Switch } from 'react-router-dom';
import About from '../../pages/About';
import Articles from '../../pages/Articles';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Route from './RouteWrapper';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/articles" component={Articles} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
