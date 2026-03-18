import React from "react";
import Input from "../components/elements/Input";
import Button from "../components/elements/Button";
import Label from "../components/elements/Label";
import FormLabel from "../components/elements/Label";

const Checkout = () => {
  return (
    <section className="px-28">
      <div className="flex gap-26">
        <div className="w-1/2 flex flex-col gap-6">
          <h2 className="text-lg font-semibold mb-4">DELIVERY</h2>

          <div className="flex flex-col gap-6">
            <FormLabel label="Country/Region" required />
            <Input placeholder="Nepal" className={"p-2"} />

            <div className="flex gap-6 w-full">
              <div className="w-1/3">
                <FormLabel label="First Name" required />
                <Input  className={"p-2"} />
              </div>
              <div className="w-1/3">
                <FormLabel label="Middle Name" />
                <Input  className={"p-2"} />
              </div>
              <div className="w-1/3">
                <FormLabel label="Last Name" />
                <Input  className={"p-2"} />
              </div>
            </div>
            <div className="w-100%">
              <FormLabel label="Address" required />
              <Input  className={"p-2"} />
            </div>

            <div className="flex gap-6">
              <div className="w-1/2">
                <FormLabel label="City" required />
                <Input  className={"p-2"} />
              </div>
              <div className="w-1/2">
                <FormLabel label="Postal Code" />
                <Input  className={"p-2"} />
              </div>
            </div>
            <div>
              <FormLabel label="Phone" required />
              <Input  className={"p-2"} />
            </div>
          </div>

          <h2 className="text-lg font-semibold">PAYMENT</h2>

          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              Bank
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              Cash on delivery
            </label>
          </div>
          
          <Button label="Pay Now" className=" w-full py-3 text-primary-300 border-primary-300!" />
          
        </div>

        <div className="w-1/2 border rounded-lg p-4 shadow-sm bg-[#F9FAFB] h-2/3">
          <div className="h-auto bg-trasparent">

            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <span>Matte Lip Gloss</span>
                <span>$12.00</span>
              </div>

              <div className="flex justify-between">
                <span>Matte Lip Gloss</span>
                <span>$24.00</span>
              </div>
            </div>

            <div className="  pt-4 flex flex-col gap-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$36.00</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>

              <div className="flex justify-between font-semibold text-[20px] bg-[#F3E8DC] p-4 rounded">
                <span>Total</span>
                <span>$41.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
