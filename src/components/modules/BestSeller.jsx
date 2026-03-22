import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image1 from "../../assets/home/bestseller/img1.jpg";
import Image2 from "../../assets/home/bestseller/img2.jpg";
import Image3 from "../../assets/home/bestseller/img3.jpg";
import Card from "../elements/Card";
import { useEffect, useRef, useState } from "react";
import Button from "../elements/Button";
import { Link } from "react-router-dom";

const bestSellerArray = [
  { cardImage: Image1 },
  { cardImage: Image2 },
  { cardImage: Image3 },
  { cardImage: Image1 },
  { cardImage: Image2 },
  { cardImage: Image3 },
];

const BestSeller = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  const translateX = index * (width / 3);

  const nextSlide = () => {
    if (index < bestSellerArray.length - 3) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  console.log("width" + width);
  console.log("translateX" + translateX);
  console.log("index" + index);

  useEffect(() => {
    if (elementRef.current) {
      const elementWidth = elementRef.current.offsetWidth;
      setWidth(elementWidth);
    }
  }, []);

  return (
    <section className="px-27 flex flex-col gap-4">
      <div>
        <h2 className="py-2">BESTSELLER</h2>
        <div className="flex justify-between items-center py-2">
          <p className="font-bold text-base text-primary-300 tracking-[10%]">
            SHOP NOW
          </p>
          <div className="flex gap-2">
            <span
              onClick={prevSlide}
              className="hover:bg-[#D6B89E] text-[#D6B89E] hover:text-white border border-[#D6B89E] rounded-[50%] cursor-pointer "
            >
              <IoIosArrowBack size={40} />
            </span>
            <span
              onClick={nextSlide}
              className="hover:bg-[#D6B89E] text-[#D6B89E] hover:text-white cursor-pointer border border-[#D6B89E] rounded-[50%]"
            >
              <IoIosArrowForward size={40} className="" />
            </span>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-hidden" ref={elementRef}>
        <div className={`flex gap-6 translate-x-[-${translateX}px] duration-500`}>
          {bestSellerArray.map((c, i) => {
            return (
              <Card
                key={i}
                cardImage={c.cardImage}
                ImageClassName={"max-w-93 cursor-pointer"}
                cardTitle={"Matte Lip Gloss"}
                cardCategory={"Lips"}
                cardPrice={"$8.00"}
                cardButton={"ADD TO CART"}
              />
            );
          })}
          <Link to={"/shop"} className="flex flex-row justify-center">
            <Button
              className={"border border-primary-300 text-primary-300 py-4!"}
            >
              See More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
