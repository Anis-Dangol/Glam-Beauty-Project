import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image1 from "../../assets/home/shopByCategory/img1.png";
import Image2 from "../../assets/home/shopByCategory/img2.png";
import Image3 from "../../assets/home/shopByCategory/img3.png";

import Card from "../elements/Card";
const bestSellerArray = [
  { cardImage: Image1, imageCenterLabel: "LIPS" },
  { cardImage: Image2, imageCenterLabel: "FRAGNANCE" },
  { cardImage: Image3, imageCenterLabel: "FACE" },
];

const ShopByCategory = () => {
  return (
    <section className="px-27 flex flex-col gap-4">
      <div className="flex justify-between items-center py-2">
        <p className="font-semibold text-xl text-gray-800 tracking-[10%]">
          SHOP BY CATEGORY
        </p>
        <div className="flex gap-2">
          <span className="hover:bg-[#D6B89E] text-[#D6B89E] hover:text-white border border-[#D6B89E] rounded-[50%] cursor-pointer ">
            <IoIosArrowBack size={40} />
          </span>
          <span className="hover:bg-[#D6B89E] text-[#D6B89E] hover:text-white cursor-pointer border border-[#D6B89E] rounded-[50%]">
            <IoIosArrowForward size={40} />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {bestSellerArray.map((c) => {
          return (
            <div className="w-full h-98 relative">
              <img
                src={c.cardImage}
                alt=""
                className="w-full h-full object-cover brightness-75"
              />
              <p className="absolute py-4 top-1/2 translate-x-[-50%] translate-y-[-50%] left-1/2 font-bold text-xl text-white">
                {c.imageCenterLabel}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShopByCategory;
