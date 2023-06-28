import { useGetAllProductsQuery } from "../../features/productsApi";
import ProductCard from "./ProductCard";

function Products() {
  const { data: prod, error } = useGetAllProductsQuery();
  return (
    <div>
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
