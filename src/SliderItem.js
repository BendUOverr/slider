import React from "react";

const SliderItem = ({ people }) => {
  return (
    <div className="flex flex-col w-[1000px] h-[420px] justify-between gap-5 items-center p-10">
      <div>
        <img
          className="w-[170px] h-[160px] rounded-full shadow-slate-950 shadow-lg border-4 border-purple-600 object-cover"
          src={people.image}
          alt={people.name}
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-purple-600 text-xl">{people.name}</h2>
        <h3 className="font-semibold text-zinc-600">{people.title}</h3>
      </div>
      <div>
        <p className="font-mono text-slate-500">{people.quote}</p>
      </div>
    </div>
  );
};

export default SliderItem;
