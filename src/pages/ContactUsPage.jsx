import { useState } from "react";
import Button from "../components/elements/Button";
import Input from "../components/elements/Input";
import Textarea from "../components/elements/Textarea";

const ContactUsPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields");
      return;
    }

    const existingData =
      JSON.parse(localStorage.getItem("contactData")) || [];

    const updatedData = [...existingData, form];

    localStorage.setItem("contactData", JSON.stringify(updatedData));

    console.log("Saved Data:", updatedData);

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    alert("Message saved successfully!");
  };
  return (
    <div className="px-4 md:px-28 w-full">
      <div className="max-w-151 space-y-10">
        <div className="">
          <h2 className="text-xl font-bold text-[#1F1F1F] py-2">
            CONTACT US
          </h2>

          <p className="text-xl text-[#1F1F1F] py-2">
            Feel free to reach out to us. Please fill out this form to continue.
          </p>
        </div>

         <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="px-2 py-2"
            />
            <Input
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              className="px-2 py-2"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <Input
            placeholder="Phone Number"
            type="text"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="px-2 py-2"
          />

          <Textarea placeholder="Message" rows={10} disabled={false} name="message" value={form.message}
  onChange={handleChange} />

          <Button type="submit" className="text-[#5B4636] text-[16px] border border-[#5B4636] -mt-1 py-4">
            Send Message
          </Button>
         </form>
      </div>
    </div>
  );
};

export default ContactUsPage;


