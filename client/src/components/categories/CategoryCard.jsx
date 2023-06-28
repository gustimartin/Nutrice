function CategoryCard({ name, id, image }) {
  return (
    <div className="  rounded-sm relative transition-all duration-200 cursor-pointer filter grayscale hover:grayscale-0  ">
      <img
        src={image}
        alt="image"
        className="object-cover object-center h-40 w-full rounded-sm absolute mix-blend-overlay opacity-90  "
      />
      <h1 className=" text-5xl p-16 text-center font-bold text-zinc-800">
        {name}
      </h1>
    </div>
  );
}

export default CategoryCard;
