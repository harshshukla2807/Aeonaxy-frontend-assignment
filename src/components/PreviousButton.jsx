import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const PreviousButton = ({currentStep,setCurrentStep}) => {
  
  const handlePreviousClick=()=>{
    setCurrentStep(currentStep - 1);
  }
  
  return (
    <div>
      <button onClick={handlePreviousClick}><FontAwesomeIcon className='text-2xl' icon={faChevronLeft} /></button>
    </div>
  )
}

export default PreviousButton