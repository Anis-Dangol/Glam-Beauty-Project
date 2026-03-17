const Logo = ({ background, size, className }) => {
  return (
    <div
      className={`bg-${background} py-4 text-[#5B4636] text-${size} font-bold ${className}`}
    >
      Glam Beauty
    </div>
  );
};

export default Logo;
