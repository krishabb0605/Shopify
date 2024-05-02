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
          ? 'animationTop1'
          : stepCount === 2
          ? 'animationTop2'
          : 'animationTop3';

      setClassName(classNameData);

      setTimeout(() => {
        setCurrentStep(stepCount);
        setClassName('');
      }, 1000);
    } else {
      setCurrentStep(stepCount);

      const classNameData =
        stepCount === 0
          ? 'animationReturn1'
          : stepCount === 1
          ? 'animationReturn2'
          : 'animationReturn3';

      setClassName(classNameData);

      setTimeout(() => {
        setClassName('');
      }, 1000);
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
