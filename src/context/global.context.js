import { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayCard, setDisplayCard] = useState([]);
  const [className, setClassName] = useState();

  const handleStepCount = (isNext) => {
    
    const stepCount = isNext ? currentStep + 1 : currentStep - 1;

    const classNameData =
      stepCount === 1
        ? 'animationTop'
        : stepCount === 2
        ? 'animationTop1'
        : 'animationTop2';

    setClassName(classNameData);

    setTimeout(() => {
      setCurrentStep(stepCount);
    }, 1000);
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
        className,
        handleStepCount,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
