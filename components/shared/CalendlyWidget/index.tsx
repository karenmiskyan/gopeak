import React, {useState, useEffect} from 'react';
import {InlineWidget} from 'react-calendly';
import Loading from "../Loading";

const CalendlyWidget = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading with a delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set the delay time in milliseconds
    
    return () => clearTimeout(timer);
  }, []);
  
  const divStyles = {
    width: '100%',
    minHeight: '900px',
  };
  
  return (
    <>
      {isLoading ? <Loading/> : null}
      <div style={divStyles} className={`${isLoading? 'opacity-0': ''}`}>
        <InlineWidget styles={{width: '100%', minHeight: '900px'}}
                      url="https://calendly.com/armen-gopeak/saas-link-building-service-offer"/>
      </div>
    </>
  );
};

export default CalendlyWidget;
