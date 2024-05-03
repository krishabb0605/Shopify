import { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [className, setClassName] = useState();

  const handleStepCount = (isNext) => {
    const stepCount = isNext ? currentStep + 1 : currentStep - 1;

    setClassName(
      isNext ? `animationTop${stepCount}` : `animationReturn${currentStep}`
    );

    if (isNext) {
      setTimeout(() => {
        setCurrentStep(stepCount);
        setClassName('');
      }, 500);
    } else {
      setCurrentStep(stepCount);

      setTimeout(() => {
        setClassName('');
      }, 500);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        currentStep,
        className,
        handleStepCount,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
