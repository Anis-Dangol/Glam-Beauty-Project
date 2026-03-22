import { Link } from "react-router-dom";
import Button from "../components/elements/Button";

const AccountPage = () => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="px-27 py-2 font-bold text-xl text-black">MY ACCOUNT</h2>
      <div className="flex gap-6">
        <div>
          <div className="flex flex-col gap-4 border-r border-primary-200 px-27">
            
              <Button
                children={"Personal Information"}
                className={
                  "bg-white border border-primary-200 p-2 pr-15 text-start! font-bold text-xl"
                }
              />
            <Button
              children={"Order History"}
              className={
                "bg-primary-200 text-white border border-primary-200 p-2 text-start! font-bold text-xl"
              }
            />
            <Link to={"/login"}>
            <Button
              children={"Logout"}
              className={
                "bg-primary-200 text-white border border-primary-200 p-2 text-start! font-bold text-xl"
              }
            /></Link>
          </div>
        </div>
        <div className="flex flex-col gap-6 px-27">
          <div className="flex flex-col gap-4">
            <h3 className="py-2 font-bold text-base text-black">
              PERSONAL INFORMATION
            </h3>
            <div>
              <p className="py-2 font-bold text-base">Name</p>
              <span className="py-2 font-normal text-sm">Selena Gomez</span>
            </div>
            <div>
              <p className="py-2 font-bold text-base">Email</p>
              <span className="py-2 font-normal text-sm">selena@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="py-2 font-bold text-base text-black">ADDRESS</h3>
            <div>
              <p className="py-2 font-bold text-base">Selena Gomez</p>
              <span className="py-2 font-normal text-sm">Kathmandu, Nepal</span>
            </div>
            <div>
              <Button
                children={"Change Default Address"}
                className={
                  "border rounded-xs! border-gray-500 text-gray-500 font-semibold text-sm p-2"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
