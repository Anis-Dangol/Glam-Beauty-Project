import { useState } from "react";
import Button from "../components/elements/Button";
import Input from "../components/elements/Input";
import Textarea from "../components/elements/Textarea";

const ContactUsPage = () => {
  const [text, setText] = useState("");
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

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              className="px-2 py-2"
            />
            <Input
              placeholder="Email"
              type="text"
              id="name"
              name="name"
              className="px-2 py-2"
            />
          </div>

          <Input
            placeholder="Phone Number"
            type="text"
            id="name"
            name="name"
            className="px-2 py-2"
          />

          <Textarea placeholder="Message" rows={10} disabled={false} value={text}
  onChange={(e) => setText(e.target.value)} />

          <Button className="text-[#5B4636] text-[16px] border border-[#5B4636] -mt-1 py-4 obej">
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;


