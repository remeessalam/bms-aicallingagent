import { whatitdo } from "../constant";

const WhatItDo = () => {
  return (
    <div>
      {" "}
      <div className="flex wrapper text-white flex-col gap-5">
        <h2 className="text-4xl font-bold text-white text-center">
          Let <span className="text-primary">AI Handle</span> the Calls,
          <br /> You Focus on <span className="text-primary">Growth</span>
        </h2>
        <p className=" text-center">
          Running a business is stressful, and the constant stream of calls only
          adds to that burden. Let AI take care of your customer service,
          complaints, and booking calls so you can focus on growing your
          business and reclaiming your time.
        </p>
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-14 mt-5">
          {whatitdo.map((item, index) => (
            <div
              key={index}
              className={`accordion-item h-full bg-[#111111] text-center flex flex-col justify-center p-5 rounded-lg 
        ${index % 2 !== 0 ? "sm:mt-5" : ""} 
        ${
          index === whatitdo.length - 1
            ? "sm:col-span-2 mx-auto w-full sm:w-2/3 sm:mt-5"
            : ""
        }`}
            >
              <p className="accordion-title text-xl font-semibold text-white">
                {item.title}
              </p>
              <p className="accordion-content text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-2xl font-semibold py-[3rem]">
          Stop wasting hours on dead-end calls and start focusing on what really
          matters-
          <span className="text-primary">
            scaling
            <br /> your business and achieving work-life balance.
          </span>
        </p>
      </div>
    </div>
  );
};

export default WhatItDo;
