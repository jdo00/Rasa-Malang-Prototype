import { ReactElement, useState } from "react";

export function useMultistepForm (steps: ReactElement[]) {
    const [currentStepIndex, setCurrenStepIndex] = useState(0)

    function next ()  {
        setCurrenStepIndex(i=> {
            if(i >= steps.length-1)return i
            return i+1
        })
    }
    function back ()  {
        setCurrenStepIndex(i=> {
            if(i <= 0)return i
            return i-1
        })
    }
    function goTo (index:number)  {
        setCurrenStepIndex(index)
    }


    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        stepIndex : currentStepIndex,
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        next,
        back,
       
    }
}