import { useNavigate } from "react-router-dom";
import Button from "../components/elements/Button";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const AccountPage = () => {
  const { logout, user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [address, setAddress] = useState("");

  useEffect(() => {
    setAddress(user?.address || "");
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSaveAddress = () => {
    if (!user) return;

    const updatedUser = { ...user, address };

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.email === updatedUser.email ? updatedUser : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setUser(updatedUser);
    setIsEditingAddress(false);
  };

  return (
    <section className="flex flex-col gap-10">
      <h2 className="px-27 py-2 font-bold text-xl text-black">
        MY ACCOUNT
      </h2>

      <div className="flex gap-6">
        <div className="flex flex-col gap-4 border-r border-primary-200 px-27">
          <Button className="bg-white border border-primary-200 p-2 pr-15 text-start! font-bold text-xl">
            Personal Information
          </Button>

          <Button className="bg-primary-200 text-white border border-primary-200 p-2 text-start! font-bold text-xl">
            Order History
          </Button>

          <Button
            onClick={handleLogout}
            className="bg-primary-200 text-white border border-primary-200 p-2 text-start! font-bold text-xl"
          >
            Logout
          </Button>
        </div>

        <div className="flex flex-col gap-6 px-27">
          <div className="flex flex-col gap-4">
            <h3 className="py-2 font-bold text-base text-black">
              PERSONAL INFORMATION
            </h3>

            <div>
              <p className="py-2 font-bold text-base">Name</p>
              <span className="py-2 text-sm">
                {user?.firstName} {user?.lastName}
              </span>
            </div>

            <div>
              <p className="py-2 font-bold text-base">Email</p>
              <span className="py-2 text-sm">
                {user?.email}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h3 className="py-2 font-bold text-base text-black">
                ADDRESS
              </h3>

              {isEditingAddress ? (
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter address"
                  className="w-full border border-gray-300 text-sm h-10 px-3 outline-none focus:border-gray-500"
                />
              ) : (
                <p
                  className={`py-2 text-sm ${
                    !user?.address ? "text-gray-500" : ""
                  }`}
                >
                  {user?.address || "Set address"}
                </p>
              )}
            </div>

            <Button
              onClick={() => {
                if (isEditingAddress) {
                  handleSaveAddress();
                } else {
                  setIsEditingAddress(true);
                }
              }}
              className="border border-gray-500 text-gray-500 font-semibold text-sm p-2"
              disabled={isEditingAddress && !address}
            >
              {isEditingAddress ? "Save" : "Change Default Address"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;