import Card from "../components/elements/Card";
import Conceler from "../assets/Wishlist/wishlish-Concealer.png";
import Liquidlipgloss from "../assets/Wishlist/wishlish-Liquid Lip Gloss.png";
import Mattelipgloss from "../assets/Wishlist/wishlish-Matte Lip Gloss.png";
import Settingspray from "../assets/Wishlist/wishlish-Setting Spray.png";

import Hydratingprimer from "../assets/Wishlist/wishlist-Hydrating Primer.png";
import Matteliquidlipstick from "../assets/Wishlist/wishlist-Matte Liquid Lipstick.png";
import Nourishingfaceoil from "../assets/Wishlist/wishlist-Nourishing Face Oil.png";
import Soothingfacialmist from "../assets/Wishlist/wishlist-Soothing Facial Mist.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Wishlist = () => {
  return (
    <section className="px-27 grid gap-20">
      <div className="grid gap-4">
        <h1 className="font-bold color=[#1F2937] text-xl py-2">WISHLIST (5)</h1>
        <div className="flex gap-6">
          <Card
            cardImage={Mattelipgloss}
            ImageClassName="w-90 h-90 object-cover shadow-[0px_4px_4px_0px_#00000040]"
            cardTitle="Matte Lip Gloss"
            cardCategory="Lips"
            cardPrice="$8.00"
            cardButton="Add to Cart"
          />
          <Card
            cardImage={Liquidlipgloss}
            ImageClassName="w-90 h-90 object-cover shadow-[0px_4px_4px_0px_#00000040]"
            cardTitle="Liquid Lip Gloss"
            cardCategory="Lips"
            cardPrice="$8.00"
            cardButton="Add to Cart"
          />
          <Card
            cardImage={Conceler}
            ImageClassName="w-90 h-90 object-cover shadow-[0px_4px_4px_0px_#00000040]"
            cardTitle="Concealer"
            cardCategory="Lips"
            cardPrice="$8.00"
            cardButton="Add to Cart"
          />
          <Card
            cardImage={Settingspray}
            ImageClassName="w-90 h-90 object-cover shadow-[0px_4px_4px_0px_#00000040]"
            cardTitle="Setting Spray"
            cardCategory="Lips"
            cardPrice="$10.00"
            cardButton="Add to Cart"
          />
        </div>
      </div>
      <div className="gap-4">
        <h1 className="font-bold text-gray-800 text-xl py-2">FOR YOU</h1>
        <div className="flex justify-end gap-2 py-2">
          <span className="hover:bg-[#D6B89E] text-[#D6B89E] hover:text-white border border-[#D6B89E] rounded-[50%] cursor-pointer ">
            <IoIosArrowBack size={40} />
          </span>
          <span className="hover:bg-[#D6B89E] text-[#D6B89E] hover:text-white cursor-pointer border border-[#D6B89E] rounded-[50%]">
            <IoIosArrowForward size={40} />
          </span>
        </div>
      </div>

      <div className="flex gap-6">
        <Card
          cardImage={Nourishingfaceoil}
          ImageClassName="w-90 h-90 object-cover shadow-[0px_4px_4px_0px_#00000040]"
          cardTitle="Nourishing Face Oil"
          cardCategory="Face"
          cardPrice="$18.00"
          cardButton="Add to Cart"
        />
        <Card
          cardImage={Hydratingprimer}
          ImageClassName="w-90 h-90 object-cover shadow-[0px_4px_4px_0px_#00000040]"
          cardTitle="Hydrating Primer"
          cardCategory="Face"
          cardPrice="$15.00"
          cardButton="Add to Cart"
        />
        <Card
          cardImage={Matteliquidlipstick}
          ImageClassName="w-90 h-90 object-cover shadow-[0px_4px_4px_0px_#00000040]"
          cardTitle="Matte Liquid Lipstick"
          cardCategory="Face"
          cardPrice="$10.00"
          cardButton="Add to Cart"
        />
        <Card
          cardImage={Soothingfacialmist}
          ImageClassName="w-90 h-90 object-cover shadow-[0px_4px_4px_0px_#00000040]"
          cardTitle="Soothing Facial Mist"
          cardCategory="Face"
          cardPrice="$12.00"
          cardButton="Add to Cart"
        />
      </div>
    </section>
  );
};

export default Wishlist;
