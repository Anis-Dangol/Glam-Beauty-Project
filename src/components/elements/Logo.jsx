import { Link } from "react-router-dom";

const Logo = ({ background, size, className }) => {
  return (
    <Link
      className={`bg-${background} py-4 text-[#5B4636] text-${size} font-bold ${className}`}
    >
      Glam Beauty
    </Link>
  );
};

export default Logo;
