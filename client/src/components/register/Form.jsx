import { useForm } from "react-hook-form";
import { registerRequest } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Form() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { register: reg } = useSelector((state) => state.user);
  const { errors: err } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (reg.id) navigate("/");
  }, [reg]);

  const onSubmit = async (values) => {
    try {
      const res = await registerRequest(values);
      dispatch(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" fixed left-0 top-0 w-full h-screen bg-purple-950/80">
      <div className=" fixed left-auto  sm:right-0 z-[100] top-[80px] t md:top-0 top w-[100%] sm:w-[65%] md:w-[45%] h-full  md:h-[90%] lg:h-[90%] lg:w-[30%] bg-gray-200  ease-in overl dark:bg-slate-800  duration-500    ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" rounded-sm p-10 shadow-lg   w-full h-full    "
        >
          {err?.map((el) => (
            <div className=" bg-red-500 text-white p-2 rounded-sm" key={el.id}>
              {el}
            </div>
          ))}
          <div className="relative z-0 my-10">
            <input
              type="text"
              {...register("username", { required: true })}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-800 peer"
              placeholder=" "
            />
            {errors.username && (
              <p className=" text-red-500">Nombre es requerido</p>
            )}
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Username
            </label>
          </div>
          <div className="relative z-0 my-10">
            <input
              type="email"
              {...register("email", { required: true })}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-800 peer"
              placeholder=" "
            />
            {errors.email && (
              <p className=" text-red-500">email es requerido</p>
            )}
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
          </div>
          <div className="relative z-0 my-10">
            <input
              type="password"
              {...register("password", { required: true })}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-800 peer"
              placeholder=" "
            />
            {errors.username && (
              <p className=" text-red-500">password es requerido</p>
            )}
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
          </div>
          <div>
            <button
              className=" lg:my-10 my-6  w-full p-1.5  rounded-sm bg-purple-800 text-zinc-200 ease-in hover:duration-300 hover:scale-105"
              type="submit"
            >
              Register
            </button>
          </div>{" "}
          <Link to="/">
            <button className=" lg:my-10 my-6 text-lg   font-semibold px-4 py-1.5 shadow-zinc-400 ease-in hover:duration-300 hover:scale-105 shadow-sm w-2/6 hover:border-b-2 hover:border-purple-800  text-zinc-800">
              Home
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Form;
