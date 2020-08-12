
import React, { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
function UseWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

 function WindowDimension(WrappedComponent){
    const {height, width} = UseWindowDimensions();
    return (
        <WrappedComponent
            windowWidth={height}
            windowHeight={width}
        />
    )
}

export default WindowDimension;