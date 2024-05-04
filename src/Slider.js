import React, { useState } from "react";
import SliderItem from "./SliderItem";
import data from "./data";
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [currentIndex, SetCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex >= people.length - 1) {
      SetCurrentIndex(0);
    } else {
      SetCurrentIndex(currentIndex + 1);
    }
  };
  const handlePrev = () => {
    if (currentIndex <= 0) {
      SetCurrentIndex(people.length - 1);
    } else {
      SetCurrentIndex(currentIndex - 1);
    }
  };

  console.log(currentIndex);
  return (
    <div className="h-screen flex items-center justify-center max-w-full">
      <div className="w-[1000px] h-[600px] flex justify-center flex-col overflow-hidden relative">
        <div className="flex h-fit justify-center">
          <p className="text-xl text-red-700 font-extrabold flex items-center">
            /
          </p>
          <h1 className="text-3xl font-semibold text-slate-600">Reviews</h1>
        </div>
        {/*slider div */}
        <div
          className={`flex translate-y-20 h-fit justify-start pb-20 duration-300`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {people.map((person, index) => {
            return (
              <div>
                <SliderItem key={index} people={person} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-between absolute w-full">
          <div className="w-fit flex items-center">
            <button
              onClick={handlePrev}
              className="bg-gray-700 hover:bg-purple-600 rounded-lg"
            >
              <HiChevronLeft size={30} color="white" />
            </button>
          </div>
          <div className="w-fit flex items-center">
            <button
              onClick={handleNext}
              className="bg-gray-700 hover:bg-purple-600 duration-300 rounded-lg"
            >
              <HiChevronRight size={30} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
