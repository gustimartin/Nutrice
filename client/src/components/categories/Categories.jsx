import { useGetCategoriesQuery } from "../../features/productsApi";
import CategoryCard from "./CategoryCard";

function Categories() {
  const { data: cat, error } = useGetCategoriesQuery();
  console.log(cat);
  return (
    <div className=" h-screen w-full p-3 ">
      {cat?.length
        ? cat.map((el) => (
            <div className="bg-blue-300 grid md:grid-cols-3 gap-3 " key={el.id}>
              <CategoryCard name={el.name} image={el.image} />;
            </div>
          ))
        : console.log(error)}
    </div>
  );
}

export default Categories;
