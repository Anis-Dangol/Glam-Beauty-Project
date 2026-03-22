import Card from "../components/elements/Card";
import Conceler from "../assets/Wishlist/wishlish-Concealer.png";
import Liquidlipgloss from "../assets/Wishlist/wishlish-Liquid Lip Gloss.png";
import Mattelipgloss from "../assets/Wishlist/wishlish-Matte Lip Gloss.png";
import Settingspray from "../assets/Wishlist/wishlish-Setting Spray.png";

import Hydratingprimer from "../assets/Wishlist/wishlist-Hydrating Primer.png";
import Matteliquidlipstick from "../assets/Wishlist/wishlist-Matte Liquid Lipstick.png";
import Nourishingfaceoil from "../assets/Wishlist/wishlist-Nourishing Face Oil.png";
import Soothingfacialmist from "../assets/Wishlist/wishlist-Soothing Facial Mist.png";

import { IoChevronForward, IoChevronBack } from "react-icons/io5";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      image: Mattelipgloss,
      title: "Matte Lip Gloss",
      category: "Lips",
      price: "$8.00",
    },
    {
      id: 2,
      image: Liquidlipgloss,
      title: "Liquid Lip Gloss",
      category: "Lips",
      price: "$8.00",
    },
    {
      id: 3,
      image: Conceler,
      title: "Concealer",
      category: "Lips",
      price: "$8.00",
    },
    {
      id: 4,
      image: Settingspray,
      title: "Setting Spray",
      category: "Lips",
      price: "$10.00",
    },
  ];
  const recommendedItems = [
    {
      id: 5,
      image: Nourishingfaceoil,
      title: "Nourishing Face Oil",
      category: "Face",
      price: "$18.00",
    },
    {
      id: 6,
      image: Hydratingprimer,
      title: "Hydrating Primer",
      category: "Face",
      price: "$15.00",
    },
    {
      id: 7,
      image: Matteliquidlipstick,
      title: "Matte Liquid Lipstick",
      category: "Face",
      price: "$10.00",
    },
    {
      id: 8,
      image: Soothingfacialmist,
      title: "Soothing Facial Mist",
      category: "Face",
      price: "$12.00",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-10 space-y-12">
      <div>
        <h1 className="font-bold text-[#1F2937] text-xl mb-6">
          WISHLIST ({wishlistItems.length})
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <Card
              key={item.id}
              cardImage={item.image}
              ImageClassName="w-full h-64 object-cover rounded-lg shadow-md"
              cardTitle={item.title}
              cardCategory={item.category}
              cardPrice={item.price}
              cardButton="Add to Cart"
            />
          ))}
        </div>
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
          {/* hello */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommendedItems.map((item) => (
            <Card
              key={item.id}
              cardImage={item.image}
              ImageClassName="w-full h-64 object-cover rounded-lg shadow-md"
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