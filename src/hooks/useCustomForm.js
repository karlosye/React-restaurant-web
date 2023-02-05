import { useState } from "react";

// prop-step is a list of React element
const useCustomMultiStepsForm = (steps) => {
  // set up the currStepIndex state:
  const [currStepIndex, setCurrStepIndex] = useState(0);

  const goNextStep = () => {
    setCurrStepIndex((prevIndex) => {
      if (currStepIndex >= steps.length - 1) {
        return prevIndex;
      }
      return prevIndex + 1;
    });
  };

  const goPrevStep = () => {
    setCurrStepIndex((prevIndex) => {
      if (prevIndex == 0) {
        return prevIndex;
      }
      return prevIndex - 1;
    });
  };

  const goToStep = (index) => {
    setCurrStepIndex(index);
    return currStepIndex[index];
  };

  // return an object of things:
  return {
    currStepIndex: currStepIndex,
    step: steps[currStepIndex],
    steps:steps,
    goNextStep: goNextStep,
    goPrevStep: goPrevStep,
    goToStep: goToStep,
    isFirstStep: currStepIndex === 0,
    isLastStep: currStepIndex === steps.length - 1
  };
};

export {useCustomMultiStepsForm};