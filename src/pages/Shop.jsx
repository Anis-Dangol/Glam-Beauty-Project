import products from "../data/product";
import categories from "../data/categories";
import Card from "../components/elements/Card";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  return (
    <section className="px-6 md:px-12 lg:px-27 space-y-12">
      {categories.map((cat) => {
        const filteredProducts = products.filter(
          (item) => item.category === cat.name,
        );

        if (filteredProducts.length === 0) return null;

        return (
          <div key={cat.id}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                {cat.label}
              </h2>

              <button
                onClick={() => navigate(`/${cat.route}`)}
                className="flex items-center gap-2 text-sm text-primary-3 text-gray-800/90 hover:text-shadow-sm/10 hover:text-gray-800  cursor-pointer"
              >
                See More <FaLongArrowAltRight />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredProducts.slice(0, 4).map((item) => (
                <Card
                  cardId={item.id}
                  key={item.id}
                  cardId={item.id}
                  cardImage={item.image}
                  cardTitle={item.title}
                  cardCategory={item.category}
                  cardPrice={`${item.price}`}
                  cardButton="Add to Cart"
                  imageCenterLabelClass="text-white text-sm bg-black/60 px-3 py-1 rounded"
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Shop;
