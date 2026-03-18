const Header = ({ className, label }) => {
  return (
    <header
      className={`bg-primary text-center font-family font-normal text-[14px] text-yellow-600 ${className}`}
    >
      <span className="px-4">{label}</span>
    </header>
  );
};

export default Header;
