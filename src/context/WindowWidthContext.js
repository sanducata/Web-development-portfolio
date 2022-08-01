import React, { createContext, useEffect, useState } from "react";

const WindowWidthContext = createContext();

function WindowWidthContextProvider(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const getWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getWindowWidth);
  }, []);

  return (
    <WindowWidthContext.Provider value={{ windowWidth }}>
      {props.children}
    </WindowWidthContext.Provider>
  );
}

export default WindowWidthContext;
export { WindowWidthContextProvider };
