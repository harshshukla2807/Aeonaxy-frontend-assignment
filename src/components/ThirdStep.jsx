import React from "react";
import weightImg from "../../public/images/page3_1.png";

const ThirdStep = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-32 sm:ml-10 sm:pl-10 sm:pr-10 mt-20 mb-10 text-xs md:text-base">
      <div>
        <img src={weightImg} alt="" className="h-40 sm:h-60 lg:h-80" />
      </div>
      <div className="flex flex-col gap-6 p-8 items-center sm:items-start justify-center sm:w-96">
        <h1 className="text-xl md:text-2xl font-bold">
          You're in the right place
        </h1>
        <p className="text-[8px] sm:text-[10px] md:text-[12px]  font-normal max-w-96">
          Brillant gots you hands-on to help improve your professional skills
          and knowledge. You'l interact with concepts and solve. fun problems in
          math, science, and computer science.
        </p>
      </div>
    </div>
  );
};

export default ThirdStep;
