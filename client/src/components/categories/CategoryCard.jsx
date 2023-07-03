function CategoryCard({ name, id, image }) {
  return (
    <div className="  rounded-sm h-40  transition-all duration-200 cursor-pointer">
      <img
        src={image}
        alt="image"
        className="object-cover object-center h-full w-full rounded-sm     "
      />
      <h1 className=" text-5xl  text-center font-bold text-zinc-800">{name}</h1>
    </div>
  );
}

export default CategoryCard;
