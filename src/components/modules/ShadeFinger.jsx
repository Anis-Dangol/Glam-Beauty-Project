
import shadeImage1 from "../../assets/home/shadeImage1.jpg";
import shadeImage2 from "../../assets/home/shadeImage2.jpg";
import shadeImage3 from "../../assets/home/shadeImage3.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useState } from "react";
import ShadeCard from "../elements/ShadeCard";

 const shades = [
    {
      id: 1,
      image: shadeImage1,
    },
    {
      id: 2,
      image: shadeImage2,
    },
    {
      id: 3,
      image: shadeImage3,
    },
  ];

const ShadeFinger = () => {
    const [selected, setSelected] = useState(2);

const ArrowForward = () => {
  if (selected === shades.length) {
    setSelected(1);
  } else {
    setSelected(selected + 1);
  }
}

const ArrroBackward = () => {
  if (selected === 1) {
    setSelected(shades.length);
  } else {
    setSelected(selected - 1);
  }
}

  return (
    <section className="w-full h-[90vh] bg-white flex flex-col gap-4 px-27">
        <div className="flex justify-between items-center py-2">
          <p className="font-bold text-base text-primary-300 tracking-[10%]">
            FOUNDATION SHADE FINDER
          </p>
          <div className="flex gap-2    ">
            <span
            onClick={ArrroBackward}
            className="hover:bg-[#D6B89E] text-[#D6B89E] hover:text-white border border-[#D6B89E] rounded-[50%] cursor-pointer ">
              <IoIosArrowBack size={40} />
            </span>
            <span
            onClick={ArrowForward}
            className="hover:bg-[#D6B89E] text-[#D6B89E] hover:text-white cursor-pointer border border-[#D6B89E] rounded-[50%]">
              <IoIosArrowForward size={40} className="" />
            </span>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {shades.map((shade) => (
          <ShadeCard
            key={shade.id}
            image={shade.image}
            isActive={selected === shade.id}
            onClick={() => setSelected(shade.id)}
          />
        ))}
        </div>
      </section>
  )
}

export default ShadeFinger