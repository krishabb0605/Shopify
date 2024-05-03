import { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animationClass, setAnimationClass] = useState();

  const handleStepCount = (isNext, StepCountForClass) => {
    const stepCount = isNext ? currentStep + 1 : currentStep - 1;

    if (currentStep === StepCountForClass) {
      setAnimationClass(isNext ? 'animationCard' : 'animationCardReturn');
    } else {
      setAnimationClass('');
    }

    if (isNext) {
      setTimeout(() => {
        setCurrentStep(stepCount);
        setAnimationClass('');
      }, 1000);
    } else {
      setCurrentStep(stepCount);

      setTimeout(() => {
        setAnimationClass('');
      }, 1000);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        currentStep,
        animationClass,
        handleStepCount,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
