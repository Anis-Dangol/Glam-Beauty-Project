import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from "../elements/Card";
import { useEffect, useState } from "react";
import products from "../../data/product";

const BestSeller = () => {
  const [translate, setTranslate] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth - 216);
  
  const cardWidth = 372;
  const cardGap = 24;

  const bestSellerProducts = products.filter((p) => p.isBestSeller);

  const maxTranslate =
    ((bestSellerProducts.length) * (cardWidth + cardGap)) - (screenWidth);

  const nextSlide = () => {
    setTranslate((prev) => Math.min(prev + 372, maxTranslate));
  };

  const prevSlide = () => {
    setTranslate((prev) => Math.max(prev - 372, 0));
  };

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth - 216);
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <section className="px-27 flex flex-col gap-4">
      <div>
        <h2 className="py-2 text-xl font-bold text-gray-800">BESTSELLER</h2>
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
              <IoIosArrowForward size={40} />
            </span>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-hidden">
        <div
          className="flex gap-6 transition-transform duration-300 "
          style={{ transform: `translateX(-${translate}px)` }}
        >
          {products.map((c, i) => {
            return (
              c.isBestSeller === true && (
                <Card
                  key={c.id}
                  silderClassName={"w-93 h-93"}
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
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
