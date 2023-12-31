import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useCreateCategoryMutation } from "../../features/productsApi";

function CategoryForm() {
  const [createCategory] = useCreateCategoryMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { errors: err } = useSelector((state) => state.user);

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", data.image[0]);
    createCategory(formData);
  });
  return (
    <div className=" ">
      <form
        onSubmit={onSubmit}
        className=" rounded-sm p-10 shadow-lg   w-full h-full    "
      >
        {err?.map((el) => (
          <div
            className="my-2 bg-red-500 text-white p-2 rounded-sm"
            key={el.id}
          >
            {el}
          </div>
        ))}
        <div>
          <h1 className=" text-zinc-800 text-3xl ">Agregar Categoria</h1>
        </div>
        <div className="relative z-0 my-10">
          <input
            type="text"
            {...register("name", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-800 peer"
            placeholder=" "
          />
          {errors.name && <p className=" text-red-500">nombre es requerido</p>}
          <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Nombre
          </label>
        </div>
        <div className="relative z-0 my-10">
          <input
            type="file"
            {...register("image", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-800 peer"
            placeholder=" "
          />
          {errors.image && <p className=" text-red-500">imagen requerida</p>}
          <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Image
          </label>
        </div>
        <div>
          <button
            className=" lg:my-10 my-6  w-full p-1.5  rounded-sm bg-purple-800 text-zinc-200 ease-in hover:duration-300 hover:scale-105"
            type="submit"
          >
            Crear
          </button>
        </div>
      </form>
    </div>
  );
}

export default CategoryForm;
