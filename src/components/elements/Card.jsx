import { Link } from "react-router-dom";
import Button from "./Button";

const Card = ({
  cardId,
  silderClassName,
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
    <div className="w-full justify-center">
      <div>
        <div id={cardId} className={`relative ${silderClassName}`}>
          <Link to={`/productdetails/${cardId}`}>
          <div className="w-full h-93 bg-gray-100 flex items-center justify-center rounded-lg">


            <img
              src={cardImage}
              alt="Matte Lip Gloss"
              className={`w-full h-full object-cover ${ImageClassName}`}
            />
          </div>
          </Link>
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
            <p className="p-4 font-normal text-sm text-gray-800">{`$${cardPrice}`}</p>
          </div>
        )}
        {cardButton && (
          <Button
            buttonId={cardId}
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
