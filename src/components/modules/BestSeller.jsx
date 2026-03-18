import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image1 from "../../assets/home/bestseller/img1.jpg";
import Image2 from "../../assets/home/bestseller/img2.jpg";
import Image3 from "../../assets/home/bestseller/img3.jpg";
import Card from "../elements/Card";

const bestSellerArray = [
  { cardImage: Image1 },
  { cardImage: Image2 },
  { cardImage: Image3 },
  { cardImage: Image1 },
  { cardImage: Image2 },
  { cardImage: Image3 },
];

const BestSeller = () => {
  return (
    <section className="pl-27 flex flex-col gap-4">
      <div>
        <h2 className="py-2">BESTSELLER</h2>
        <div className="flex justify-between items-center py-2">
          <p className="font-bold text-base text-primary-300 tracking-[10%]">
            SHOP NOW
          </p>
          <div className="flex gap-2    ">
            <span className="hover:bg-[#D6B89E] text-[#D6B89E] hover:text-white border border-[#D6B89E] rounded-[50%] cursor-pointer ">
              <IoIosArrowBack size={40} />
            </span>
            <span className="hover:bg-[#D6B89E] text-[#D6B89E] hover:text-white cursor-pointer border border-[#D6B89E] rounded-[50%]">
              <IoIosArrowForward size={40} className="" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-6 overflow-x-hidden">
        {bestSellerArray.map((c) => {
          return (
            <Card
              cardImage={c.cardImage}
              ImageClassName={"max-w-93"}
              cardTitle={"Matte Lip Gloss"}
              cardCategory={"Lips"}
              cardPrice={"$8.00"}
              cardButton={"ADD TO CART"}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BestSeller;
