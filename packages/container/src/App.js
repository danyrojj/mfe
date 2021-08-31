import React from 'react';
import MarketingApp from './components/MarketingApp';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassname = createGenerateClassName({productionPrefix: 'co'});

export default () => {
  return (
    <BrowserRouter>
    <StylesProvider generateClassname={generateClassname}>
    <div>
      <Header/>
      <hr />
      <MarketingApp />
    </div>
    </StylesProvider>
    </BrowserRouter>
    
  );
};
