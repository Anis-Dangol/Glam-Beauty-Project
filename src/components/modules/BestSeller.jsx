import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from "../elements/Card";
import { useEffect, useRef, useState } from "react";
import Button from "../elements/Button";
import { Link } from "react-router-dom";
import products from "../../data/product";

const BestSeller = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  const translateX = index * (width / 3);

  const nextSlide = () => {
    // if (index < bestSellerArray.length - 3) {
    //   setIndex(index + 1);
    // }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

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
        <div className={`flex gap-6 `}>
          {products.map((c, i) => {
            return (
              c.isBestSeller === true && (
                <Card
                  key={c.id}
                  cardId={c.id}
                  cardImage={c.image}
                  ImageClassName={"cursor-pointer"}
                  cardTitle={c.title}
                  cardCategory={c.category}
                  cardPrice={`${c.price}`}
                  cardButton={"ADD TO CART"}
                />
              )
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
