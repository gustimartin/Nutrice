import { useGetAllProductsQuery } from "../../features/productsApi";
import ProductCard from "./ProductCard";

function Products() {
  const { data: prod, error } = useGetAllProductsQuery();
  return (
    <div className=" grid md:grid-cols-4 gap-4 p-6">
      {prod?.length
        ? prod.map((el) => (
            <div key={el.id}>
              <ProductCard
                image={el.image}
                name={el.name}
                amount={el.cantidad}
                price={el.price}
              />
            </div>
          ))
        : console.log(error)}
    </div>
  );
}

export default Products;
