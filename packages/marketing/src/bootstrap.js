import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory } from 'history';
// Mount function to start up the app
const mount = (el,  {onNavigate, defaultHistory, initialPath}) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries:[initialPath]
  });

  if(onNavigate){
  history.listen(onNavigate)
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate: ({pathname:nextPathName})=> {
      console.log('detected container navigation')
      const {pathname} = history.location
      if(nextPathName !== pathname){
        history.push(nextPathName)
      }
    }
  }
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, {defaultHistory:createBrowserHistory()});
  }
}

// We are running through container
// and we should export the mount function
export { mount };
