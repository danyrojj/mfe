import React , {lazy, Suspense, useState, useEffect} from 'react';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Progress from './components/Progress';
import {BrowserRouter, Route, Switch, Redirect, Router} from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import {createBrowserHistory} from 'history';

const generateClassName = createGenerateClassName({productionPrefix: 'co'});

const MarketingLazy = lazy(()=>import('./components/MarketingApp'));
const AuthLazy = lazy(()=>import('./components/AuthApp'));
const DashboardLazy = lazy(()=>import('./components/DashboardApp'));


const history = createBrowserHistory();
export default () => {
  const [isSignedIn,setIsSignedIn] = useState(false)


  useEffect(()=>{
    if(isSignedIn){
      history.push('/dashboard')
    }
  }, [isSignedIn])
  return (
    <Router history={history}>
    <StylesProvider generateClassName={generateClassName}>
    <div>
      <Header isSignedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)}/>
      <hr />
      <Suspense fallback={<Progress></Progress>}>
    <Switch>
      <Route path="/auth">
        <AuthLazy  onSignIn={()=>setIsSignedIn(true)}></AuthLazy>
      </Route>
      <Route path="/dashboard">
        {!isSignedIn && <Redirect to="/"/>}
        <DashboardLazy/>
      </Route>
      <Route path="/" component={MarketingLazy} />
    </Switch>
    </Suspense>
    </div>
    </StylesProvider>
    </Router>
    
  );
};
