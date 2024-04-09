import React from 'react'
import learn from "../../public/images/page2_1.png";
import explore from "../../public//images/page2_2.png";
import refresh from "../../public//images/page2_3.png";
import target from "../../public//images/page2_4.png";
import somethingElse from "../../public//images/page2_5.png";

const options = [
  {
    id: 1,
    name: "learning",
    desc: "Learning specific skills to advance my career",
    img: learn,
  },
  {
    id: 2,
    name: "exploring",
    desc: "Exploring new topics I'm interested in",
    img: explore,
  },
  {
    id: 3,
    name: "refreshing",
    desc: "Refreshing my math foundations",
    img: refresh,
  },
  {
    id: 4,
    name: "exercising",
    desc: "Exercising my brain to stay sharp",
    img: target,
  },
  { id: 5, name: "something else", desc: "Something else", img: somethingElse },
];

const SecondStep = ({selectedInterestedOption,setInterestedSelectedOption}) => {
  // console.log(selectedOption)
  const handleSelectOption = (option) => {
    setInterestedSelectedOption(option);
  };

  const OptionItem = ({ option, onSelect }) => (
    <div className={`flex gap-4 items-center `} onClick={() => onSelect(option)}>
      <img src={option.img} alt="" className="h-8"/>
      <p>{option.desc}</p>
    </div>
  );

  // in the we can also directly write the div without creating the OptionItem component and onSelect, directly settting onclick on div of optionItem

  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-5 text-xs md:text-base">
      <h1 className="text-xl md:text-3xl font-semibold text-center">Which are you most interested in?</h1>
      <p className="text-[8px] md:text-[12px]  opacity-75 text-center ml-8 mr-8">
        Choose just one. This will help us get you started (but won't limit your experience.)
      </p>
      <div className="flex flex-col gap-2 pl-8 pr-8 md:gap-4  md:w-[37rem] mt-7">
        {options.map((option, index) => <div key={index} className={`pt-2 pb-2 pr-2 w-full md:pt-3 md:pb-3 pl-5 rounded-md bg-white border-gray-200 ${selectedInterestedOption && option &&  option.id===selectedInterestedOption.id ? "border-yellow-200 shadow-gray-200 shadow-lg" : ""} border-[1px] `}>
          <OptionItem
            key={index}
            option={option}
            onSelect={handleSelectOption}
          />
       </div>)}
      </div>
    </div>
  );
}

export default SecondStep