export default function ProductCard() {
  return (
    <div>
      <div
        className=" max-w-sm hover:bg-white rounded-sm shadow-lg shadow-zinc-700 hover:scale-105 ease-in duration-300 
      hover:shadow-purple-800   "
      >
        <img
          className="hover:scale-105 p-2 ease-in duration-500 rounded-t-sm h-52 object-cover w-full"
          src="./banner.jpg"
          alt="image"
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-wide text-gray-900 dark:text-white">
            {name}name
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {}
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <p>price</p>
          <p>cantitad</p>
        </div>
      </div>
    </div>
  );
}
