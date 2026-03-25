import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import categories from "../../data/categories";

const ShopByCategory = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrevious = () => {
    setStartIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const visibleCards = Array.from(
    { length: visibleCount },
    (_, i) => categories[(startIndex + i) % categories.length]
  );

  const navigate=useNavigate();

  const handleNavigate = (route) =>{
    navigate(`/${route}`)
      window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <section className="px-27 flex flex-col gap-4">
      <div className="flex justify-between items-center py-2">
        <p className="font-semibold text-xl text-gray-800 tracking-[10%]">
          SHOP BY CATEGORY
        </p>

        <div className="flex gap-2">
          <span className="hover:bg-[#D6B89E] text-[#D6B89E] hover:text-white border border-[#D6B89E] rounded-full cursor-pointer">
            <IoIosArrowBack onClick={handlePrevious} size={40} />
          </span>

          <span className="hover:bg-[#D6B89E] text-[#D6B89E] hover:text-white border border-[#D6B89E] rounded-full cursor-pointer">
            <IoIosArrowForward onClick={handleNext} size={40} />
          </span>
        </div>
      </div>

      <div className="flex gap-6">
        {visibleCards.map((c) => (
          <Link 
          to={`/${c.route}`}
          key={c.id} 
          onClick={() =>handleNavigate(c.route)}
          className="w-full h-98 relative">
            <img
              src={c.image}
              alt={c.label}
              className="w-full h-full object-cover brightness-75"
            />
            <p className="absolute py-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-xl text-white">
              {c.label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;