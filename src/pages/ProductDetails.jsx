import product1 from "../assets/Products/product1.png";
import product2 from "../assets/Products/product2.png";
import product3 from "../assets/Products/product3.png";
import product4 from "../assets/Products/product4.png";
import product5 from "../assets/Products/product5.png";
import { FaHeart, FaStar } from "react-icons/fa";
import Button from "./../components/elements/Button";
import { CiHeart } from "react-icons/ci";
import { BiLeaf } from "react-icons/bi";
import { PiPawPrint } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";

import { useParams } from "react-router-dom";
import products from "../data/product.js";
import { useState } from "react";

const ProductDetails = () => {
  const productId = useParams();
  const [quantity, setQuantity] = useState(1);
  const [favourite, setFavourite] = useState(false);

  const currentProduct = products.find(
    (p) => Number(p.id) == Number(productId.id),
  );

  const quantityIncrement = () => setQuantity((prev) => prev + 1);
  const quantityDecrement = () => setQuantity((prev) => prev - 1);

  const handleFavourite = () => setFavourite((prev) => !prev);

  return (
    <section className="w-full flex flex-row gap-6 px-26">
      <div className="w-1/2 flex flex-row gap-6">
        <div className="w-1/5 flex flex-col gap-4">
          {currentProduct.images.map((img, index) => (
            <div
              key={index}
              className="flex flex-1 justify-start rounded-lg gap-4 cursor-pointer"
            >
              <img
                src={img}
                alt={`productImage${index}`}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center rounded-l">
          <img
            src={currentProduct.image}
            alt={`Product Main`}
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-8">
        <div className="flex flex-col">
          <div className="flex flex-col gap-4 px-4 pt-4">
            <h2 className="text-[#1F1F1F] font-bold text-[20px]">
              {currentProduct.title}
            </h2>

            <p className="text-[16px]">
              {currentProduct.size} |{" "}
              <span
                className={`${currentProduct.stock !== 0 ? "text-success" : "text-warning"}`}
              >
                {currentProduct.stock !== 0 ? "In Stock" : "Out of Stock"}
              </span>
            </p>

            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < Math.floor(currentProduct.rating)
                      ? "text-[#FF9C38]"
                      : "text-[#808080]"
                  }
                />
              ))}
            </div>

            <p className="text-[16px] leading-relaxed py-4">
              {currentProduct.description}
            </p>
          </div>

          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-2 grid grid-cols-3 items-center border border-[#5B4636] rounded-sm px-4 gap-4">
              <Button
                className={`text-[#5B4636] ${quantity <= 1 ? "cursor-not-allowed!" : "cursor-pointer!"}`}
                onClick={quantityDecrement}
                disabled={quantity <= 1 ? true : false}
              >
                <LuMinus size={18} />
              </Button>
              <p className="text-[#5B4636] text-center">{quantity}</p>
              <Button
                className={`text-[#5B4636] ${quantity === currentProduct.stock ? "cursor-not-allowed!" : "cursor-pointer!"}`}
                onClick={quantityIncrement}
                disabled={quantity === currentProduct.stock ? true : false}
              >
                <GoPlus size={18} />
              </Button>
            </div>

            <Button
              buttonId={currentProduct.id}
              className="col-span-6 bg-[#5B4636] border rounded-md w-102 h-12.5 flex items-center justify-center text-white"
            >
              {false ? "Already Added" : "Add to cart"}
            </Button>

            <div
              id={currentProduct.id}
              onClick={handleFavourite}
              className="col-span-2 border border-[#5B4636] rounded-sm flex items-center justify-center p-4 w-16 h-12.5 cursor-pointer"
            >
              {favourite ? (
                <CiHeart className="w-6 h-6 text-[#5B4636]" />
              ) : (
                <FaHeart className="w-5 h-5 text-[#ff5858]" />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="p-2 flex gap-2 font-bold text-xl text-[#5B4636]">
            Ingredients
          </h2>

          <div className="flex justify-center gap-8">
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
  );
};

export default ProductDetails;
