const ShadeCard = ({ image, isActive, onClick }) => {
  return (
    <div className="flex justify-center">
      <img
        src={image}
        alt="Image not found"
        onClick={onClick}
       className={`
                  object-cover cursor-pointer transition-all duration-300 ease-in-out
                  w-full contrast-103 saturate-115 brightness-90
                  ${isActive ? "h-127.5" : "h-108.5"}
                `}
      />
    </div>
  );
};
export default ShadeCard