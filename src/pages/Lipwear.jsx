import products from "../data/product";
import Card from "../components/elements/Card";

const Lipwear = () => {
    const lipwearProduct = products.filter(
        (item) => item.category === "lips"
    );
  return (
    <section className="md:px-12 lg:px-27 w-full h-full">
        <h1 className="text-2xl font-bold mb-6">Lip Wear</h1>

        <div className="grid grid-cols-4 gap-5">
            {lipwearProduct.map((item)=> (
                <Card
                key={item.id}
                cardId={item.id}
                cardImage={item.image}
                cardTitle={item.title}
                cardCategory={item.category}
                cardPrice={item.price}
                cardButton={"Add to Cart"}
                />
            ))}
        </div>
    </section>
  );
};

export default Lipwear