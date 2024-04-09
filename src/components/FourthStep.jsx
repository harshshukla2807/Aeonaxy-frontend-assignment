import React from 'react'
import arithmetic from '../../public/images/page4_1.png'
import basicAlgebra from '../../public/images/page4_2.png'
import intermediateAlgebra from '../../public/images/page4_3.png'
import calculus from '../../public/images/page4_4.png'


const options = [
  {
    id: 1,
    name: "Arithmetic",
    desc: "Introductory",
    img: arithmetic,
  },
  {
    id: 2,
    name: "Basic Algebra",
    desc: "Foundational",
    img: basicAlgebra,
  },
  {
    id: 3,
    name: "Intermediate Algebra",
    desc: "Intermediate",
    img: intermediateAlgebra,
  },
  {
    id: 4,
    name: "Calculus",
    desc: "Advanced",
    img: calculus,
  }
];

const FourthStep = ({selectedMathOption,setMathSelectedOption}) => {
  
  // console.log(selectedOption)
  const handleSelectOption = (option) => {
    setMathSelectedOption(option);
  };

  const OptionItem = ({ option, onSelect }) => (
    <div className={`flex flex-col items-center justify-between`} onClick={() => onSelect(option)}>
      <div className='h-14 mt-2'>
        <img src={option.img} alt=""   className={`${option.id === 1 ? "w-28" : option.id === 2 ? "w-28" : option.id === 3 ? "w-28" : option.id === 4 ? "w-28" : ""}`}/>
      </div>
      <div className='flex flex-col items-center justify-center'>
            <p className='text-[13px]'>{option.name}</p>
            <p className='font-normal opacity-55'>{option.desc}</p>
      </div>
    </div>
  );
  
  return (
    <div className="flex flex-col items-center justify-center w-screen gap-2 mt-5 text-xs md:text-base p-10">
      <h1 className="text-xl md:text-3xl font-semibold text-center">What is your math comfort level?</h1>
      <p className="text-[8px] md:text-[12px]  opacity-75 text-center font-medium ">
       Choose the highest level you feel confident in — you can always adjust later.
      </p>
      <div className="flex flex-wrap gap-2 pl-8 pr-8 md:gap-4 mt-12 mb-6 w-screen items-center justify-center">
        {options.map((option, index) => <div key={index} className={`flex flex-col items-center justify-between pt-2 pb-2 pr-2 w-44 h-40 md:pt-3 md:pb-3 pl-5 rounded-md bg-white border-gray-200 cursor-pointer  ${selectedMathOption && option &&  option.id===selectedMathOption.id ? "border-yellow-200 shadow-gray-200 shadow-lg" : ""} border-[2px] `}>
          <OptionItem
            key={index}
            option={option}
            onSelect={handleSelectOption}
          />
       </div>)}
      </div>
    </div>
  )
}

export default FourthStep