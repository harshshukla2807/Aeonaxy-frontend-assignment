import React from "react";
import foundationMathImg from "../../public/images/page6.png";

const options=[
    {
        id:1,
        name: "Foundational Math",
        text:"Build your foundational skills in algebra geometry, and probabilty.",
        img: foundationMathImg
    },
    {
        id:2,
        name: "Mathematical Thinking",
        text:"Build your foundational skills in algebra geometry, and probabilty.",
        img: foundationMathImg    }
]

const FinalResultsPage = ({selectedPathOption,setSelectedPathOption}) => {
    
    const handleSelectOption = (option) => {
        setSelectedPathOption(option);
    };
    
  return (
    <div className="flex flex-col gap-4 text-center mt-[200px] items-center h-screen ml-4 mr-4 ">
      <h1 className="text-2xl font-bold">Learning paths based on your answers</h1>
      <p className="text-[10px]  opacity-70">Choose one to get started. You can switch anytime.</p>
      <div className="flex flex-col md:flex-row  gap-4 mt-10 ">
        {options.map((option,index)=><div className={`p-6 pl-4 pr-4 flex gap-2 w-72 h-32 shadow border-[2px] relative shadow-gray-200 ${selectedPathOption && option &&  option.id===selectedPathOption.id ? " border-yellow-200 shadow-gray-200 shadow-lg" : ""}`}     onClick={() => handleSelectOption(option)}
>
            {index===0 && <p className="bg-yellow-500 text-black text-[10px] w-fit p-[2px] rounded-full justify-center text-nowrap absolute h-fit top-[-7%] left-[50%]">MOST POPULAR</p>}
            <p className="text-xs text-left w-38">
                <b>{option.name}</b>{option.text} 
            </p>
            <img className="h-20" src={option.img} alt="" />
            </div>)}
      </div>
    </div>
  );
};

export default FinalResultsPage;
