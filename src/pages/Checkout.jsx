import Input from "../components/elements/Input";
import Button from "../components/elements/Button";
import FormLabel from "../components/elements/Label";
import CheckOutEsewa from "../assets/CheckOut/CheckOut-esewa.png";
import CheckoutKhalti from "../assets/CheckOut/CheckOut-khalti.png";
import CheckoutNic from "../assets/CheckOut/CheckOut-nic.png";
import CheckoutNabil from "../assets/CheckOut/CheckOut-nabil.png";
import CheckOutMatLip from "../assets/CheckOut/CheckOut-MatLip.jpg";
import CheckOutMatLip2 from "../assets/CheckOut/CheckOut-MatLip2.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getCartByUser } from "../services/cartService";
import products from "../data/product";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState({ items: [] });

  const totalPrice = cartData.items.reduce((total, p) => {
    const foundProduct = products.find((f) => f.id === p.productId);
    return foundProduct ? total + foundProduct.price * p.quantity : total;
  }, 0);

  useEffect(() => {
    if (user) {
      setCartData(getCartByUser(user.id));
    }
  }, [user]);

  return (
    <section className="px-28">
      <div className="flex gap-26">
        <form className="w-1/2 flex flex-col gap-6">
          <h2 className="text-lg font-semibold mb-4">DELIVERY</h2>

          <div className="flex flex-col gap-6">
            <div>
              <FormLabel label="Country/Region" required />
              <Input placeholder="Nepal" className={"py-2 px-3"} />
            </div>

            <div className="flex gap-6 w-full">
              <div className="w-1/3">
                <FormLabel label="First Name" required />
                <Input className={"py-2 px-3"} />
              </div>
              <div className="w-1/3">
                <FormLabel label="Middle Name" />
                <Input className={"py-2 px-3"} />
              </div>
              <div className="w-1/3">
                <FormLabel label="Last Name" />
                <Input className={"py-2 px-3"} />
              </div>
            </div>
            <div className="w-100%">
              <FormLabel label="Address" required />
              <Input className={"py-2 px-3"} />
            </div>

            <div className="flex gap-6">
              <div className="w-1/2">
                <FormLabel label="City" required />
                <Input className={"py-2 px-3"} />
              </div>
              <div className="w-1/2">
                <FormLabel label="Postal Code" />
                <Input className={"py-2 px-3"} />
              </div>
            </div>
            <div>
              <FormLabel label="Phone" required />
              <Input className={"py-2 px-3"} />
            </div>
          </div>

          <h2 className="text-lg font-bold">PAYMENT</h2>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  className="accent-[#5B4636] scale-100 checked:scale-140 transition-all duration-200"
                />
                Bank
              </label>
              <div className="flex gap-2.5">
                <img src={CheckoutNic} alt="Nic" className="w-12.5" />
                <img src={CheckoutNabil} alt="Nabil" className="w-12.5" />
                <img src={CheckoutKhalti} alt="khalti" className="w-12.5" />
                <img src={CheckOutEsewa} alt="esewa" className="w-12.5" />
              </div>
            </div>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                className=" accent-[#5B4636] scale-100 checked:scale-140 transition-all duration-100"
              />
              Cash on delivery
            </label>
          </div>

          <Button className=" w-full p-4 text-primary-300! border border-primary-300!">
            Pay Now
          </Button>
        </form>

        <div className="w-1/2 rounded-lg p-4  bg-[#F9FAFB] h-2/3 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]">
          <div className="h-auto bg-trasparent grid gap-6">
            <div className="flex flex-col gap-5">
              {cartData.items.map((p) => {
                const foundProduct = products.find((f) => f.id === p.productId);
                console.log(foundProduct);
                if (foundProduct) {
                  return (
                    <div className="flex gap-2">
                      <div className="relative">
                        <img
                          src={foundProduct.images[0]}
                          alt="LipBam"
                          className="w-[84px] h-[84px]"
                        />
                        <span className="absolute -top-2 -right-2 bg-[#374151] text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                          {p.quantity}
                        </span>
                      </div>
                      <div className="grid w-full">
                        <h1 className="font-bold p-3">{foundProduct.title}</h1>
                        <div className="flex justify-between px-3 py-2">
                          <span className="text-[#9CA3AF]">
                            Category:{foundProduct.category}
                          </span>
                          <span>${foundProduct.price * p.quantity}</span>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            <div className="  pt-4 flex flex-col gap-5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>

              <div className="flex justify-between font-bold text-[20px] bg-[#F3E8DC] p-4 rounded">
                <span>Total</span>
                <span>${totalPrice + 5}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
