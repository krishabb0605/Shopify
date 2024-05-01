import { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayCard, setDisplayCard] = useState([]);

  const handleStepCount = (isNext) => {
    setCurrentStep(isNext ? currentStep + 1 : currentStep - 1);
  };

  useEffect(() => {
    let cardArray = Array.from(
      { length: 2 - currentStep },
      (x, i) => (i + 1) * 20
    );
    setDisplayCard(cardArray);
  }, [currentStep]);

  return (
    <GlobalContext.Provider
      value={{
        currentStep,
        displayCard,
        handleStepCount,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
