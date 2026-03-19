import product1 from "../assets/Products/product1.png";
import product2 from "../assets/Products/product2.png";
import product3 from "../assets/Products/product3.png";
import product4 from "../assets/Products/product4.png";
import product5 from "../assets/Products/product5.png";
import { FaStar } from "react-icons/fa";
import Button from "./../components/elements/Button"
import { CiHeart } from "react-icons/ci";
import { BiLeaf } from "react-icons/bi";
import { PiPawPrint } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";

const ProductDetails = () => {
  const images = [product1, product2, product3, product4];
  const rating = 4;
  return (
    <section className='w-full flex flex-row gap-6 px-26'>
      <div className='w-1/2 flex flex-row gap-6'>
        <div className='w-1/5  flex flex-col gap-4'>
          {images.map((img, index) => (
          <div
            key={index}
            className="flex flex-1 justify-start  rounded-lg gap-4"
          >
            <img
              src={img}
              alt={`Product-${index}`}
              className="object-cover"
            />
          </div>
        ))}
        </div>
        <div className='w-full flex items-center justify-center rounded-l'>
          <img
          src={product5} 
          alt={`Product Main`} 
          className='object-cover'/>

        </div>
      </div>

      <div className='w-1/2 flex flex-col gap-8'>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-4 px-4 pt-4'>

            <h2 className='text-[#1F1F1F] font-bold text-[20px]'>
              Lip Butter
            </h2>

            <p className='text-[16px]'>
              0.35 oz | <span className='text-success'>In Stock</span>
            </p>

            <div className='flex gap-1'>
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                    className={index < rating ? "text-[#FF9C38]" : "text-[#808080]"}
                />
              ))}
            </div>

            <p className='text-[16px] leading-relaxed py-4'>
            lip butter is an ultra-hydrating, barrier-protecting formula for a healthy-looking lip. this skincare-rich balm instantly quenches dry, chapped lips in silky moisture for up to 24 hours, maintains the skin barrier, and visibly improves the look of lip lines.
            </p>
          </div>

          <div className='flex gap-4'>
            <div className='flex items-center border w-26 h-12.5 border-[#5B4636] rounded-sm p-4 gap-4'>
              <button className='text-[#5B463]'><LuMinus size={18}/></button>
              <span className='text-[#5B4636]'>1</span>
              <button className='text-[#5B4636]'><GoPlus size={18}/></button>
            </div>

            <Button children="Add to cart" className="bg-[#5B4636] borde rounded-md w-102 h-12.5 flex items-center justify-center text-white"/>

            <div className='border border-[#5B4636] rounded-sm flex items-center justify-center p-4 w-16 h-12.5'>
              <CiHeart className="w-6 h-6 text-[#5B4636]"/>
            </div>
          </div>
        </div>
          <div className='flex flex-col gap-2'>
            <h2 className='p-2 flex gap-2 font-bold text-[20px] text-[#5B4636]'>Ingredients</h2>

            <div className='flex justify-center gap-8'> 

                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full border border-[#5B4636] flex items-center justify-center">
                    <BiLeaf className="w-5 h-5 text-[#5B4636]" />
                  </div>
                  <p className="text-xs text-[#5B4636]">vegan</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full border border-[#5B4636] flex items-center justify-center">
                    <PiPawPrint className="w-5 h-5 text-[#5B4636]" />
                  </div>
                  <p className="text-xs text-[#5B4636]">cruelty free</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full border border-[#5B4636] flex items-center justify-center">
                    <BsStars className="w-5 h-5 text-[#5B4636]" />
                  </div>
                  <p className="text-xs text-[#5B4636]">clean</p>
                </div>

            </div>
          </div>
              
      </div>
    </section>
  )
}

export default ProductDetails
