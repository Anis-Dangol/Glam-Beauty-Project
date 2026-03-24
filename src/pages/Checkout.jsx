import Input from "../components/elements/Input";
import Button from "../components/elements/Button";
import FormLabel from "../components/elements/Label";
import CheckOutEsewa from "../assets/CheckOut/CheckOut-esewa.png";
import CheckoutKhalti from "../assets/CheckOut/CheckOut-khalti.png";
import CheckoutNic from "../assets/CheckOut/CheckOut-nic.png";
import CheckoutNabil from "../assets/CheckOut/CheckOut-nabil.png";
import { useContext, useEffect, useState } from "react";
import { clearCart } from "../services/cartService";
import { createOrder } from "../services/orderService";
import { getData } from "../services/storage";
import products from "../data/product";
import { AuthContext } from "../context/AuthContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const {user}=useContext(AuthContext)
  const navigate=useNavigate()
  const cart=getData("cart") || []
  const cartData=cart.find((c)=>c.userId===user?.id)
  
  const [form, setForm] = useState({
    country: "Nepal",
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });
  const [payment, setPayment] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const subtotal = (cartData?.items || []).reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  const shipping = 5;
  const total = subtotal + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.address || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    if (!payment) {
      alert("Please select payment method");
      return;
    }

    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
      alert("Please login first");
      return;
    }

    const order = createOrder(user.id, cartData.items, products);

    console.log("Order:", order);

    clearCart(user?.id);

    toast.message("Order successful!", {
      description: `Your order has been placed successfully`,
      duration: 4000,
      type: "success",
    });
    navigate("/")
  };

  useEffect(() => {
    if (!user) {
    navigate("/login");
    return;
  }

  if (!cartData?.items || cartData.items.length === 0) {
    toast.message("Cart Null", {
      description: `Please add items in cart!`,
      duration: 4000,
      type: "warning",
    });
    navigate("/cart");
  }
}, [cartData, navigate,user]);

  return (
    <section className="px-28">
      <div className="flex gap-26">
        <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-6">
          <h2 className="text-lg font-semibold mb-4">DELIVERY</h2>

          <div className="flex flex-col gap-6">
            <div>
              <FormLabel label="Country/Region" required />
              <Input
                placeholder="Nepal"
                className={"py-2 px-3"}
                name="country"
                value={form.country}
                onChange={handleChange}
              />
            </div>

            <div className="flex gap-6 w-full">
              <div className="w-1/3">
                <FormLabel label="First Name" required />
                <Input
                  className={"py-2 px-3"}
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/3">
                <FormLabel label="Middle Name" />
                <Input
                  className={"py-2 px-3"}
                  name="middleName"
                  value={form.middleName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/3">
                <FormLabel label="Last Name" />
                <Input
                  className={"py-2 px-3"}
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full">
              <FormLabel label="Address" required />
              <Input
                className={"py-2 px-3"}
                name="address"
                value={form.address}
                onChange={handleChange}
              />
            </div>

            <div className="flex gap-6">
              <div className="w-1/2">
                <FormLabel label="City" required />
                <Input
                  className={"py-2 px-3"}
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <FormLabel label="Postal Code" />
                <Input
                  className={"py-2 px-3"}
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <FormLabel label="Phone" required />
              <Input
                className={"py-2 px-3"}
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
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
                  value="bank"
                  onChange={(e) => setPayment(e.target.value)}
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
                value="cod"
                onChange={(e) => setPayment(e.target.value)}
              />
              Cash on delivery
            </label>
          </div>

          <Button className=" w-full p-4 text-primary-300! border border-primary-300!" type="submit">
            Pay Now
          </Button>
        </form>

        <div className="w-1/2 rounded-lg p-4 bg-[#F9FAFB] shadow">
          <div className="grid gap-6">
            {(cartData?.items || []).map((item) => {
              const product = products.find(
                (p) => p.id === item.productId
              );

              if (!product) return null;

              return (
                <div key={item.productId} className="flex gap-2">
                  <div className="relative">
                    <img
                      src={product.image}
                      className="w-21 h-21"
                    />
                    <span className="absolute -top-2 -right-2 bg-gray-700 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>

                  <div className="grid w-full">
                    <h1 className="font-bold p-3">
                      {product.title}
                    </h1>

                    <div className="flex justify-between px-3 py-2">
                      <span className="text-gray-400">
                        Category: {product.category}
                      </span>
                      <span>${product.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-4 flex flex-col gap-5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className="flex justify-between font-bold text-[20px] bg-[#F3E8DC] p-4 rounded">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
