import React from 'react';
import MarketingApp from './components/MarketingApp';
import {BrowserRouter} from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <hr />
      <MarketingApp />
    </div>
    </BrowserRouter>
  );
};
