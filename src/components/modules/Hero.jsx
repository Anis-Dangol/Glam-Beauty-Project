import HeroBanner from "../../assets/home/hero.jpg";
import Button from "../elements/Button";

const Hero = () => {
  return (
    <section className="relative flex w-[full] h-[90vh] -mt-10">
      <img src={HeroBanner} alt="Hero Banner" className="w-full object-cover" />
      <div className="absolute top-1/2 translate-y-[-50%] left-1/10 flex flex-col gap-4 text-primary-300">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-xl p-2">SPRING SALE</p>
          <p className="font-extrabold text-[50px] p-2">20% OFF</p>
          <p className="font-extrabold text-[40px] p-2">SITEWIDE</p>
          <p className="font-bold text-[20px] p-2">free gift with any Rs 2000+ order</p>
        </div>
        <Button className={"bg-white py-4! font-bold text-xl"}>SHOP NOW</Button>
      </div>
    </section>
  );
};

export default Hero;
