import React from "react";
import studentImg from "../../public/images/student.png";
import ProfessionalImg from "../../public//images/professional.png";
import ParentImg from "../../public//images/parent.png";
import LifelongLearnerImg from "../../public//images/lifelong.png";
import TeacherImg from "../../public//images/teacher.png";
import OtherImg from "../../public//images/other.png";

const options = [
  {
    id: 1,
    name: "student",
    desc: "Student or soon to be enrolled",
    img: studentImg,
  },
  {
    id: 2,
    name: "Professional",
    desc: "Professional pursuing a career",
    img: ProfessionalImg,
  },
  {
    id: 3,
    name: "Parent",
    desc: "Parent of a school-age child",
    img: ParentImg,
  },
  {
    id: 4,
    name: "Lifelong Learner",
    desc: "Lifelong learner",
    img: LifelongLearnerImg,
  },
  { id: 5, name: "Teacher", desc: "Teacher", img: TeacherImg },
  { id: 6, name: "Other", desc: "Other", img: OtherImg },
];

const FirstStep = ({selectedOption,setSelectedOption}) => {
  // console.log(selectedOption)
  const handleSelectOption = (option) => {
    setSelectedOption(option);
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
      <h1 className="text-xl md:text-3xl font-semibold">Which describes you best?</h1>
      <p className="text-[8px] md:text-[12px]  opacity-75">
        This will help us personalise your experience.
      </p>
      <div className="flex flex-col gap-2 pl-8 pr-8 md:gap-4  md:w-[37rem] mt-7">
        {options.map((option, index) => <div key={index} className={`pt-2 pb-2 pr-2 w-full md:pt-3 md:pb-3 pl-5 rounded-md bg-white border-gray-200 ${selectedOption && option &&  option.id===selectedOption.id ? "border-yellow-200 shadow-gray-200 shadow-lg" : ""} border-[1px] `}>
          <OptionItem
            key={index}
            option={option}
            onSelect={handleSelectOption}
          />
       </div>)}
      </div>
    </div>
  );
};

export default FirstStep;
