import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "Contacts",
    },
  ];
  return (
    <div className=" flex justify-between items-center w-full h-20 text-white bg-navbar fixed z-50">
      <div>
        <h1 className=" text-xl font-signature text-secondary  ml-2">Elite Mwungere</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className=" md:hidden cursor-pointer pr-4 z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className=" flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className=" px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;


// import { useState } from "react";
// // import {FaBars, FaTimes} from "react-icons"
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const links = [
//     {
//       id: 1,
//       link: "home",
//     },
//     {
//       id: 2,
//       link: "about",
//     },
//     {
//       id: 3,
//       link: "projects",
//     },
//     {
//       id: 5,
//       link: "skills",
//     },
//     {
//       id: 4,
//       link: "contacts",
//     },
    
//   ];
//   return (
//     <div className=" bg-navbar h-20 font-body flex justify-around py-6">
//       <h2 className=" text-secondary text-xl ml-10 w-1/2 lg:ml-40">
//         Elite Mwungere
//       </h2>
//       <div class="text-white flex justify-around w-1/2">
//         {links.map(({ id, link }) => (
//           <p
//             className="hover:text-secondary transition-colors duration-300 cursor-pointer"
//             key={id}
//           >
//             <Link to={link} smooth duration={500}>
//               {link}
//             </Link>
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
