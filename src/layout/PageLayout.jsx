import Header from "../components/modules/Header";
import Navbar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Header
          label="Stock Clearance - flat 50% off on all products"
          className="px-4 py-4"
        />
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
