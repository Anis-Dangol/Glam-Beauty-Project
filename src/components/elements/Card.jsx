import Button from "./Button";

const Card = ({
  cardImage,
  ImageClassName,
  imageCenterLabelColor = "white",
  imageCenterLabelSize = "xl",
  imageCenterLabel,
  cardTitle,
  cardCategory,
  cardPrice,
  cardButton,
}) => {
  return (
    <div className="flex flex-row justify-center">
      <div>
        <div className="relative">
          <img
            src={cardImage}
            alt="Matte Lip Gloss"
            className={ImageClassName}
          />
          {imageCenterLabel && (
            <p
              className={`absolute top-1/2 translate-x-[-50%] translate-y-[-50%] left-1/2 items-center text-${imageCenterLabelColor} py-4 font-bold text-${imageCenterLabelSize}`}
            >
              {imageCenterLabel}
            </p>
          )}
        </div>
        {cardTitle && cardCategory && cardPrice && (
          <div>
            <p className="p-4 font-bold text-base text-gray-800">{cardTitle}</p>
            <p className="px-4 py-2 font-bold text-base text-gray-400">
              Category: {cardCategory}
            </p>
            <p className="p-4 font-normal text-sm text-gray-800">{cardPrice}</p>
          </div>
        )}
        {cardButton && (
          <Button
            className={"border border-primary-300 text-primary-300 py-4!"}
          >
            {cardButton}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
