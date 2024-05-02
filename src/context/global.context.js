import { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [className, setClassName] = useState();

  const handleStepCount = (isNext) => {
    const stepCount = isNext ? currentStep + 1 : currentStep - 1;
    if (isNext) {
      const classNameData =
        stepCount === 1
          ? 'animationTop'
          : stepCount === 2
          ? 'animationTop1'
          : 'animationTop2';

      setClassName(classNameData);
      setTimeout(() => {
        setClassName('');
      }, 2000);
      setTimeout(() => {
        setCurrentStep(stepCount);
      }, 1000);
    } else {
      setCurrentStep(stepCount);

      const classNameData =
        stepCount === 0
          ? 'animationReturn'
          : stepCount === 1
          ? 'animationReturn1'
          : 'animationReturn2';
      setClassName(classNameData);

      setTimeout(() => {
        // setClassName('');
      }, 2000);
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
