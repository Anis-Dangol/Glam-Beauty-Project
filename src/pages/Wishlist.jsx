import Card from "../components/elements/Card";
import { AuthContext } from "../context/AuthContext";
import { getWishlist } from "../services/wishlistService";
import products from "../data/product";
import { useNavigate } from "react-router-dom";
import Hydratingprimer from "../assets/Wishlist/wishlist-Hydrating Primer.png";
import Matteliquidlipstick from "../assets/Wishlist/wishlist-Matte Liquid Lipstick.png";
import Nourishingfaceoil from "../assets/Wishlist/wishlist-Nourishing Face Oil.png";
import Soothingfacialmist from "../assets/Wishlist/wishlist-Soothing Facial Mist.png";

import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { useContext, useState, useEffect } from "react";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlistItems, setWishlistItems] = useState([]);

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

  const navigate = useNavigate();

  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(() => {
    setRecommendedItems(
      [...products]
      .sort(() => Math.random() - 0.5)
      .slice(0, 6)
    );
  }, []);

  return (
    <section className="px-6 md:px-12 lg:px-20 py-10 space-y-12">
      <div>
        <h1 className="font-bold text-[#1F2937] text-xl mb-6">
          WISHLIST ({wishlistItems.length})
        </h1>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <Card
                key={item.id}
                silderClassName={"w-full h-93"}
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
              className="bg-[#5B4636] text-white px-6 py-2 rounded-md"
            >
              Shop Now
            </button>
          </div>
        )}
      </div>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-[#1F2937] text-xl">FOR YOU</h1>

          <div className="flex gap-3">
            <button className="bg-white border border-[#D6B89E] text-[#D6B89E] rounded-full h-10 w-10 flex items-center justify-center">
              <IoChevronBack />
            </button>

            <button className="bg-[#D6B89E] text-white rounded-full h-10 w-10 flex items-center justify-center">
              <IoChevronForward />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommendedItems.map((item) => (
            <Card
              key={item.id}
              silderClassName={"w-full h-93"}
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
      </div>
    </section>
  );
};

export default Wishlist;