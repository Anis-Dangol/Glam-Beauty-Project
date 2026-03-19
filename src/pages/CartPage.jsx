import MatteLipGloss from "../assets/cart/matte_lip_gloss.jpg";

import Input from "../components/elements/Input";

import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import Button from "../components/elements/Button";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [values, setValues] = useState(1);

  const handleIncrement = () => {
    setValues((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValues((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <section className="bg-white flex flex-col gap-4 px-27">
      <h2 className="py-2 text-gray-800 font-bold text-xl">CART</h2>
      <table className="w-full text-left  border-separate border-spacing-y-3">
        <thead>
          <tr className="text-base tracking-[10%] text-gray-800">
            <th scope="col" className="w-1/4 font-normal">
              PRODUCT
            </th>
            <th scope="col" className="font-normal">
              PRICE
            </th>
            <th scope="col" class="font-normal">
              QUANTITY
            </th>
            <th scope="col" class="font-normal">
              SUB TOTAL
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="font-medium whitespace-nowrap">
              <div className="flex flex-row items-center gap-3">
                <img className="h-22" src={MatteLipGloss} alt="MatteLipGloss" />
                <span className="w-full text-center text-gray-800 font-bold text-base">
                  Matte Lip Gloss
                </span>
              </div>
            </th>
            <td className="text-gray-800 font-bold text-base">$12</td>
            <td>
              <div className="relative w-20">
                <Input
                  type="number"
                  value={values}
                  onChange={(e) => setValues(Number(e.target.value))}
                  className="w-full rounded border border-gray-600 px-4 py-2 text-gray-800 font-bold text-base"
                />
                <div className="absolute right-2 top-0 flex flex-col text-xs">
                  <IoIosArrowUp
                    className="cursor-pointer"
                    size={18}
                    onClick={handleIncrement}
                  />
                  <IoIosArrowDown
                    className="cursor-pointer"
                    size={18}
                    onClick={handleDecrement}
                  />
                </div>
              </div>
            </td>
            <td>
              <div className="flex justify-between">
                <span className="text-gray-800 font-medium text-base">$12</span>
                <RiDeleteBinLine
                  color="red"
                  size={24}
                  className="cursor-pointer"
                />
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row" className="font-medium whitespace-nowrap"></th>
            <td className="text-gray-800 font-bold text-base"></td>
            <td></td>
            <td className="py-4 flex justify-between">
              <p className="text-gray-800 font-bold text-base">$24</p>
              <Link to={"/checkout"} className={"w-2/6! "}>
                <Button className={"font-semibold bg-primary-200 text-white "}>
                  Checkout
                </Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default CartPage;
