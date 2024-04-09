import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import NextButton from './components/NextButton';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import FourthStep from './components/FourthStep';
import FirstStep from './components/FirstStep';
import PreviousButton from './components/PreviousButton';
import FifthStep from './components/FifthStep';
import FinalResultsPage from './components/FinalResultsPage';
import LoadingPage from './components/LoadingPage'; // Import LoadingPage component

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedInterestedOption, setInterestedSelectedOption] = useState(null);
  const [selectedMathOption, setMathSelectedOption] = useState(null);
  const [selectedPathOption, setSelectedPathOption] = useState(null);

  const progress = (currentStep / 5) * 100; 

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <FirstStep selectedOption={selectedOption} setSelectedOption={setSelectedOption} />;
      case 2:
        return <SecondStep selectedInterestedOption={selectedInterestedOption} setInterestedSelectedOption={setInterestedSelectedOption} />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FourthStep selectedMathOption={selectedMathOption} setMathSelectedOption={setMathSelectedOption} />;
      case 5:
        return <FifthStep />;
      case 6:
        return <LoadingPage setCurrentStep={setCurrentStep} />;
      case 7:
        return <FinalResultsPage selectedPathOption={selectedPathOption} setSelectedPathOption={setSelectedPathOption}/>;

      default:
        return null;
    }
  };

  const isNextButtonDisabled = () => {
    switch (currentStep) {
      case 1:
        return selectedOption === null;
      case 2:
        return selectedInterestedOption === null;
      case 4:
        return selectedMathOption === null;
      default:
        return false; // For other steps, assume it's not disabled
    }
  };

 

  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <div className='flex w-full justify-center items-center gap-2'>
        {currentStep > 1 && currentStep < 6 && <PreviousButton currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        {currentStep < 6 && <ProgressBar progress={progress} />}
      </div>

      {renderStepComponent()}
      {currentStep < 6 && <NextButton currentStep={currentStep} setCurrentStep={setCurrentStep} isDisabled={isNextButtonDisabled()} />}

    </div>
  );
}

export default App;
