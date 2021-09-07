import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history= useHistory();

  useEffect(() => {
    const {onParentNavigate}  = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({pathname:nextPathName})=>{
      console.log(`container have detected navigation to  ${nextPathName } inside Marketing`)
      const {pathname}  = history.location;

      if(pathname !== nextPathName){
      history.push(nextPathName)
      }
    }});

    history.listen(onParentNavigate)
  }, []);

  return <div ref={ref} />;
};
