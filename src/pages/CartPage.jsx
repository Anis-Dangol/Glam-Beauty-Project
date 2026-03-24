import Input from "../components/elements/Input";

import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState, useContext, useEffect } from "react";
import Button from "../components/elements/Button";
import { Link } from "react-router-dom";
import {
  getCartByUser,
  removeFromCart,
  updateQuantity,
} from "../services/cartService.js";
import { AuthContext } from "../context/AuthContext.jsx";
import products from "../data/product.js";

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState({ items: [] });

  const handleIncrement = (foundProductId, currentQty) => {
    updateQuantity(user.id, foundProductId, currentQty + 1);
    refreshCart();
  };

  const handleDecrement = (foundProductId, currentQty) => {
    updateQuantity(user.id, foundProductId, currentQty - 1);
    refreshCart();
  };

  const handleRemove = (productId) => {
    removeFromCart(user.id, productId);
    refreshCart();
  };

  const totalPrice = cartData.items.reduce((total, p) => {
    const foundProduct = products.find((f) => f.id === p.productId);
    return foundProduct ? total + foundProduct.price * p.quantity : total;
  }, 0);

  const refreshCart = () => {
    setCartData(getCartByUser(user.id));
  };

  useEffect(() => {
    if (user) {
      setCartData(getCartByUser(user.id));
    }
  }, [user]);

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
            <th scope="col" className="font-normal">
              QUANTITY
            </th>
            <th scope="col" className="font-normal">
              SUB TOTAL
            </th>
          </tr>
        </thead>
        <tbody>
          {cartData.items.map((p) => {
            const foundProduct = products.find((f) => f.id === p.productId);
            console.log(foundProduct);
            if (foundProduct) {
              return (
                <tr>
                  <th scope="row" className="font-medium whitespace-nowrap">
                    <div className="flex flex-row items-center gap-3">
                      <img
                        className="h-22"
                        src={foundProduct.image}
                        alt="MatteLipGloss"
                      />
                      <span className="w-full text-center text-gray-800 font-bold text-base">
                        {foundProduct.title}
                      </span>
                    </div>
                  </th>
                  <td className="text-gray-800 font-bold text-base">
                    ${foundProduct.price}
                  </td>
                  <td>
                    <div className="relative w-20">
                      <Input
                        type="number"
                        value={p.quantity}
                        className="w-full rounded border border-gray-600 px-4 py-2 text-gray-800 font-bold text-base"
                      />
                      <div className="absolute right-2 top-0 flex flex-col text-xs">
                        <IoIosArrowUp
                          className="cursor-pointer"
                          size={18}
                          onClick={() =>
                            handleIncrement(foundProduct.id, p.quantity)
                          }
                        />
                        <IoIosArrowDown
                          className="cursor-pointer"
                          size={18}
                          onClick={() =>
                            handleDecrement(foundProduct.id, p.quantity)
                          }
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-between">
                      <p className="text-gray-800 font-medium text-base">
                        ${foundProduct.price * p.quantity}
                      </p>
                      <div>
                        <RiDeleteBinLine
                          color="red"
                          size={24}
                          className="cursor-pointer"
                          onClick={() => handleRemove(foundProduct.id)}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            }
          })}
          <tr>
            <th scope="row" className="font-medium whitespace-nowrap"></th>
            <td className="text-gray-800 font-bold text-base"></td>
            <td></td>
            <td className="py-4 flex justify-between">
              <p className="text-gray-800 font-bold text-base">${totalPrice}</p>
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
