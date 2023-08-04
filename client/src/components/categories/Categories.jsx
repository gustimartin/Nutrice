import { useGetCategoriesQuery } from "../../features/productsApi";
import CategoryCard from "./CategoryCard";

function Categories() {
  const { data: cat, error } = useGetCategoriesQuery();
  // console.log(cat);
  return (
    <div className=" h-full w-full p-3 grid md:grid-cols-3 gap-4">
      {cat?.length
        ? cat.map((el) => (
            <CategoryCard
              name={el.name}
              image={el.image ? el.image : el.image.secure_url}
              key={el.id}
            />
          ))
        : console.log(error)}
    </div>
  );
}

export default Categories;
