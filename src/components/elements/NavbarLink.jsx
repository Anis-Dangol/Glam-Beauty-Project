import { NavLink } from "react-router-dom";

const NavbarLink = ({ to, children, key, className }) => {
  return (
        <NavLink
          key={key}
          to={to}
          className={`font-normal text-[16px] text-[#4B5563] ${className}`}
        >
          {children}
        </NavLink>
  );
};

export default NavbarLink;
