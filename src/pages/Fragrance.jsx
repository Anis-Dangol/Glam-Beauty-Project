import products from "../data/product";
import Card from "../components/elements/Card";

function Fragrance() {
    const fragranceProduct = products.filter(
        (item) => item.category === "fragrance"
    );
  return (
    <section className="px-28">
        <h1 className="text-2xl font-bold mb-6">Fragrance</h1>

        <div className="grid grid-cols-4 gap-5">
            {fragranceProduct.map((item)=> (
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

export default Fragrance