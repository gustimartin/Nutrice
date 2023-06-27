import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
// import { ImSearch } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
function NavBar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  // const [isExpanded, setExpanded] = useState(false);

  // const toggleSearchBar = () => {
  //   setExpanded(!isExpanded);
  // };

  return (
    <div className=" w-full h-20 shadow-lg shadow-zinc-400   ">
      <div className=" flex  items-center justify-between w-full h-full px-2 2xl:px-16 ">
        <Link to="/">
          <img className=" w-28 h-20 object-fill" src="./log.png" alt="logo" />
        </Link>
        {/* search bar */}
        <div>
          <ul className=" hidden md:flex ">
            <Link to="/categories">
              <li className="list-none hover:border-b-purple-800 uppercase ml-10 text-sm hover:border-b-2">
                categorias
              </li>
            </Link>
            <Link to="/contact">
              <li className="list-none  hover:border-b-2 uppercase ml-10 text-sm hover:border-purple-800">
                contacto
              </li>
            </Link>{" "}
            <Link to="/about">
              <li className="list-none  hover:border-b-purple-800  uppercase text-sm ml-10 hover:border-b-2">
                About
              </li>
            </Link>
            <Link to="/">
              <li className="list-none  hover:border-b-purple-800  uppercase text-sm ml-10 hover:border-b-2">
                ????
              </li>{" "}
            </Link>
            <li className="list-none uppercase ml-10 text-sm">
              <button className="  px-4 py-1 rounded-sm">login</button>
            </li>
          </ul>

          <div onClick={handleNav} className=" md:hidden  text-purple-800">
            <GiHamburgerMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-purple-900/80 "
            : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0     z-[100] top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-gray-200 p-10 ease-in overl dark:bg-slate-800  duration-500 overflow-auto   "
              : " fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <div className=" ">
                <img
                  className=" w-20 h-18 object-fill"
                  src="./log.png"
                  alt="logo"
                />
              </div>
              <div
                onClick={handleNav}
                className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:text-gray-200 dark:bg-gray-900 dark:shadow-gray-700"
              >
                <IoMdClose className=" text-violet-700" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col py-4">
            <ul className=" uppercase">
              <Link to="/">
                <li
                  onClick={() => setNav(false)}
                  className=" py-4 text-sm text-purple-700"
                >
                  Home
                </li>
              </Link>
              <Link to="/categories">
                <li
                  onClick={() => setNav(false)}
                  className=" py-4 text-sm text-purple-700 "
                >
                  Categories
                </li>
              </Link>
              <Link to="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className=" py-4 text-sm text-purple-700 "
                >
                  products
                </li>
              </Link>
              <Link to="/about">
                <li
                  onClick={() => setNav(false)}
                  className=" py-4 text-sm text-purple-700"
                >
                  About
                </li>
              </Link>
              <Link to="/contact">
                <li
                  onClick={() => setNav(false)}
                  className=" py-4 text-sm text-purple-700"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default NavBar;
