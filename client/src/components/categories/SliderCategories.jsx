import Slider from "react-slick";
import { useGetCategoriesQuery } from "../../features/productsApi";
import SliderCard from "./SliderCard";

function SliderCategories() {
  const { data: categories } = useGetCategoriesQuery();

  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
  };
  return (
    <div className="pt-80 md:pt-0 md:px-6 pb-4 px-6  ">
      <Slider
        className="
       "
        {...settings}
      >
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
