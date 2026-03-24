import NavbarIcons from "../elements/NavbarIcons";
import Logo from "../elements/Logo";
import NavbarLink from "../elements/navbarlink";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Shop", path: "/shop" },
  { title: "Skin Care", path: "/skincare" },
  { title: "Lip wear", path: "/lipwear" },
  { title: "Fragrance", path: "/Fragrance" },
];

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between items-center py-4 px-28">
      <div>
        <Logo />
      </div>

      <div className="p-4">
        {navItems.map((item) => (
          <NavbarLink
            key={item.path}
            to={item.path}
            children={item.title}
            className={"px-4 py-2"}
          />
        ))}
      </div>

      <div>
        <NavbarIcons />
      </div>
    </nav>
  );
};

export default Navbar;
