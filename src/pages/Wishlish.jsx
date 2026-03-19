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

const Wishlish = () => {
  return (
    <section className="px-27 grid gap-20">
      <div className="grid gap-4">
        <h1 className="font-bold color=[#1F2937] text-[20px]">WISHLIST (5)</h1>
        <div className="flex gap-6">
          <Card
            cardImage={Mattelipgloss}
            ImageClassName="w-90 h-90 object-cover rounded-lg shadow-[0px_4px_4px_0px_#00000040]"
            cardTitle="Matte Lip Gloss"
            cardCategory="Lips"
            cardPrice="$8.00"
            cardButton="Add to Cart"
          />
          <Card
            cardImage={Liquidlipgloss}
            ImageClassName="w-90 h-90 object-cover rounded-lg shadow-[0px_4px_4px_0px_#00000040]"
            cardTitle="Liquid Lip Gloss"
            cardCategory="Lips"
            cardPrice="$8.00"
            cardButton="Add to Cart"
          />
          <Card
            cardImage={Conceler}
            ImageClassName="w-90 h-90 object-cover rounded-lg shadow-[0px_4px_4px_0px_#00000040]"
            cardTitle="Concealer"
            cardCategory="Lips"
            cardPrice="$8.00"
            cardButton="Add to Cart"
          />
          <Card
            cardImage={Settingspray}
            ImageClassName="w-90 h-90 object-cover rounded-lg shadow-[0px_4px_4px_0px_#00000040]"
            cardTitle="Setting Spray"
            cardCategory="Lips"
            cardPrice="$10.00"
            cardButton="Add to Cart"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <h1 className="font-bold color=[#1F2937] text-[20px]">FOR YOU</h1>
        <div className="relative flex">
          <button className="bg-[#D6B89E] h-10 w-10 text-white rounded-full font-bold text-2xl flex items-center justify-center absolute right-0 top-1 cursor-pointer">
            <IoChevronForward />
          </button>

          <button className="bg-white border-2 border-[#D6B89E] text-[#D6B89E] rounded-full h-10 w-10 font-bold text-2xl flex items-center justify-center absolute right-12 top-1 cursor-pointer">
            <IoChevronBack />
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        <Card
          cardImage={Nourishingfaceoil}
          ImageClassName="w-90 h-90 object-cover rounded-lg shadow-[0px_4px_4px_0px_#00000040]"
          cardTitle="Nourishing Face Oil"
          cardCategory="Face"
          cardPrice="$18.00"
          cardButton="Add to Cart"
        />
        <Card
          cardImage={Hydratingprimer}
          ImageClassName="w-90 h-90 object-cover rounded-lg shadow-[0px_4px_4px_0px_#00000040]"
          cardTitle="Hydrating Primer"
          cardCategory="Face"
          cardPrice="$15.00"
          cardButton="Add to Cart"
        />
        <Card
          cardImage={Matteliquidlipstick}
          ImageClassName="w-90 h-90 object-cover rounded-lg shadow-[0px_4px_4px_0px_#00000040]"
          cardTitle="Matte Liquid Lipstick"
          cardCategory="Face"
          cardPrice="$10.00"
          cardButton="Add to Cart"
        />
        <Card
          cardImage={Soothingfacialmist}
          ImageClassName="w-90 h-90 object-cover rounded-lg shadow-[0px_4px_4px_0px_#00000040]"
          cardTitle="Soothing Facial Mist"
          cardCategory="Face"
          cardPrice="$12.00"
          cardButton="Add to Cart"
        />
      </div>
    </section>
  );
};

export default Wishlish;
