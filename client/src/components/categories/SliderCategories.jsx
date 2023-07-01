import Slider from "react-slick";
import CategoryCard from "./CategoryCard";
import { useGetCategoriesQuery } from "../../features/productsApi";
import SliderCard from "./SliderCard";

function SliderCategories() {
  const { data: categories } = useGetCategoriesQuery();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
  };
  return (
    <div className=" m-6  ">
      <Slider {...settings}>
        {categories?.length
          ? categories.map((category) => (
              <SliderCard
                key={category.id}
                name={category.name}
                image={category.image}
              />
            ))
          : ""}
      </Slider>
    </div>
  );
}
export default SliderCategories;
