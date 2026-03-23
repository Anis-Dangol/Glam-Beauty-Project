import products from '../data/product';
import Card from '../components/elements/Card';

const Scincare = () => {
    const skincareProduct = products.filter(
        (item) => item.category === "skin care"
    );
  return (
    <section className="md:px-12 lg:px-27 w-full h-full">
        <h1 className='text-2xl font-bold mb-6'>Skin Care</h1>

        <div className='grid grid-cols-4 gap-5'>
            {skincareProduct.map((item) => (
                <Card
                key={item.id}
                cardId={item.id}
                cardImage={item.image}
                cardTitle={item.title}
                cardCategory={item.category}
                cardPrice={item.price}
                cardButton={"Add to Cart"}/>
            ))}
        </div>
    </section>
  );
};

export default Scincare