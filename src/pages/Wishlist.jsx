import Card from "../components/elements/Card";
import { AuthContext } from "../context/AuthContext";
import { getWishlist } from "../services/wishlistService";
import products from "../data/product";
import { useNavigate } from "react-router-dom";

import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { useContext, useState, useEffect } from "react";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    const wishlist = getWishlist();

    const userWishlist = wishlist.find(
      (item) => item.userId === user.id
    );

    if (!userWishlist) {
      setWishlistItems([]);
      return;
    }

    const items = userWishlist.items
      .map((wishItem) =>
        products.find((p) => p.id === wishItem.productId)
      )
      .filter(Boolean);

    setWishlistItems(items);
  }, [user]);

  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(() => {
    setRecommendedItems(
      [...products]
        .sort(() => Math.random() - 0.5)
        .slice(0, 8)
    );
  }, []);

  const visibleCount = 4;

  const handleNext = () => {
    if (startIndex + visibleCount < recommendedItems.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="px-6 md:px-12 lg:px-20 space-y-12">
      <div>
        <h1 className="font-bold text-[#1F2937] text-xl mb-6">
          WISHLIST ({wishlistItems.length})
        </h1>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <Card
                key={item.id}
                silderClassName={"w-full h-[372px]"}
                cardId={item.id}
                cardImage={item.image}
                ImageClassName="w-full h-full object-cover rounded-lg shadow-md"
                cardTitle={item.title}
                cardCategory={item.category}
                cardPrice={item.price}
                cardButton="Add to Cart"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <p className="text-lg text-gray-600">
              You don't have any products in your wishlist
            </p>

            <button
              onClick={() => navigate("/shop")}
              className="bg-[#5B4636] text-white px-6 py-2 rounded-md hover:cursor-pointer"
            >
              Shop Now
            </button>
          </div>
        )}
      </div>

      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-[#1F2937] text-xl">
            FOR YOU
          </h1>

          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="bg-white border border-[#D6B89E] text-[#D6B89E] rounded-full h-10 w-10 flex items-center justify-center disabled:opacity-50"
            >
              <IoChevronBack />
            </button>

            <button
              onClick={handleNext}
              disabled={startIndex + visibleCount >= recommendedItems.length}
              className="bg-[#D6B89E] text-white rounded-full h-10 w-10 flex items-center justify-center disabled:opacity-50"
            >
              <IoChevronForward />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
            }}
          >
            {recommendedItems.map((item) => (
              <div
                key={item.id}
                className="min-w-[25%] px-3"
              >
                <Card
                  silderClassName={"w-full"}
                  cardId={item.id}
                  cardImage={item.image}
                  ImageClassName="w-full h-full object-cover rounded-lg shadow-md"
                  cardTitle={item.title}
                  cardCategory={item.category}
                  cardPrice={item.price}
                  cardButton="Add to Cart"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;