import { Link } from "react-router-dom";
import Assets from "../../../assets";
import RoutesPath from "../../../constants/Routes";
import { useState } from "react";

const NavBar = ({ activeTab }: { activeTab: string }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="bg-black fixed top-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <div className="flex items-center">
          <img src={Assets.Logo} className="h-8 mr-3" alt="Flowbite Logo" />
        </div>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={` w-full md:block md:w-auto ${open ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <Link
                to={RoutesPath.home}
                className={`${
                  activeTab === "Home" ? "font-[700]" : "font-[400]"
                } text-lg text-white`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#whatwedo"
                className={`${
                  activeTab === "Assortments" ? "font-[700]" : "font-[400]"
                } text-lg text-white`}
              >
                What we Do
              </Link>
            </li>
            <li>
              <Link
                to={RoutesPath.about}
                className={`${
                  activeTab === "About" ? "font-[700]" : "font-[400]"
                } text-lg text-white`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/#recentworks"
                className={`${
                  activeTab === "RecentWorks" ? "font-[700]" : "font-[400]"
                } text-lg text-white`}
              >
                Recent works
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                className={`${
                  activeTab === "Contact" ? "font-[700]" : "font-[400]"
                } text-lg text-white`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

//  <div className="bg-[#45a3af] fixed top-0 w-full z-50">
//       <div className=" xl:block lg:block md:block sm:hidden xs:hidden container mx-auto px-20">
//         <div className="flex items-center justify-between">
//           <img
//             className="w-20 h-20 object-contain"
//             src={Assets.LogoWhite}
//             alt=""
//           />
//           <ul className="flex items-center gap-10">
//             <li>
//               <Link
//                 to={RoutesPath.home}
//                 className={`${
//                   activeTab === "Home" ? "font-[700]" : "font-[400]"
//                 } text-lg text-white`}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/#brands"
// className={`${
//   activeTab === "Assortments" ? "font-[700]" : "font-[400]"
// } text-lg text-white`}
//               >
//                 Assortments
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/#recipies"
//                 className={`${
//                   activeTab === "Blogs" ? "font-[700]" : "font-[400]"
//                 } text-lg text-white`}
//               >
//                 Recipies
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={RoutesPath.about}
// className={`${
//   activeTab === "About" ? "font-[700]" : "font-[400]"
// } text-lg text-white`}
//               >
//                 About Farmfresh
//               </Link>
//             </li>
//             <li>
//               <a
//                 href="#contact"
// className={`${
//   activeTab === "Contact" ? "font-[700]" : "font-[400]"
// } text-lg text-white`}
//               >
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className=" xl:hidden lg:hidden md:hidden sm:block xs:block container mx-auto px-20">
//         <div className="flex items-center justify-between">
//           <img
//             className="w-20 h-20 object-contain"
//             src={Assets.LogoWhite}
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
