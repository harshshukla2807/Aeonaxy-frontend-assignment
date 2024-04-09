import React from 'react'

const NextButton = ({currentStep,setCurrentStep,isDisabled}) => {
    
    const handleNextClick = () => {
        setCurrentStep(currentStep + 1);
      };
    
  return (
    <div onClick={handleNextClick}  className={`p-10 pt-3 pb-3 bg-black text-white rounded-md mt-5 mb-4 cursor-pointer ${isDisabled ? 'opacity-50 pointer-events-none' : ''} `}>
        <button disabled={isDisabled} >Continue</button>
    </div>
  ) 
}

export default NextButton