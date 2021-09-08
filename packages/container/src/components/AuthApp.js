import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({onSingIn}) => {
  const ref = useRef(null);
  const history= useHistory();

  useEffect(() => {
    const {onParentNavigate}  = mount(ref.current, {
        initialPath: history.location.pathname,
      onNavigate: ({pathname:nextPathName})=>{
      console.log(`container have detected navigation to  ${nextPathName } inside Auth`)
      const {pathname}  = history.location;

      if(pathname !== nextPathName){
      history.push(nextPathName)
      }
    },
    onSingIn:  () =>{
        console.log('singned in')
        onSingIn();
    }
});

    history.listen(onParentNavigate)
  }, []);

  return <div ref={ref} />;
};
