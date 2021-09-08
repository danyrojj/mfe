import React , {lazy, Suspense, useState} from 'react';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Progress from './components/Progress';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({productionPrefix: 'co'});

const MarketingLazy = lazy(()=>import('./components/MarketingApp'));
const AuthLazy = lazy(()=>import('./components/AuthApp'));

export default () => {
  const [isSignedIn,setIsSignedIn] = useState(false)
  return (
    <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
    <div>
      <Header isSignedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)}/>
      <hr />
      <Suspense fallback={<Progress></Progress>}>
    <Switch>
      <Route path="/auth">
        <AuthLazy  onSignIn={()=>setIsSignedIn(true)}></AuthLazy>
      </Route>
      <Route path="/" component={MarketingLazy} />
    </Switch>
    </Suspense>
    </div>
    </StylesProvider>
    </BrowserRouter>
    
  );
};
