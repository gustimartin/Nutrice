export default function ProductCard({ image, id, stock, name, price }) {
  return (
    <div>
      <div
        className=" max-w-sm hover:bg-white rounded-sm shadow-lg shadow-zinc-700 hover:scale-105 ease-in duration-300 
      hover:shadow-purple-800   "
      >
        <img
          className="hover:scale-105 p-2 ease-in duration-500 rounded-t-sm h-52 object-cover w-full"
          src={image}
          alt="image"
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-wide text-gray-900 dark:text-white">
            {name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {price}
          </p>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {}
          </p>
        </div>
      </div>
    </div>
  );
}
