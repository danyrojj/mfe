import React from 'react';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({productionPrefix: 'co'});

export default () => {
  return (
    <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
    <div>
      <Header/>
      <hr />
    <Switch>
      <Route path="/auth" component={AuthApp}/>
      <Route path="/" component={MarketingApp} />
    </Switch>
    </div>
    </StylesProvider>
    </BrowserRouter>
    
  );
};
