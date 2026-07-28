import { useNavigate } from "react-router";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({ products }) => {

  let navigate = useNavigate()
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">
            Featured Products
          </h2>

          <button onClick={() => navigate("/main/shop")} className="text-indigo-600 font-semibold">
            View All
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;