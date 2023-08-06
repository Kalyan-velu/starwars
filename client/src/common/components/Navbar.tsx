import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isFixed, setIsFixed] = React.useState(false);
  const innerHeight = window.innerHeight; // Adjust this value to set the scrolling threshold

  const location = useLocation();
  const handleScroll = () => {
    const scrollY = window.scrollY;

    setIsFixed(scrollY >= innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [innerHeight]);

  return (
    <nav
      className={`${
        isFixed ? "fixed top-0 z-10" : "sticky"
      } flex items-center justify-between w-full text-yellow-100 h-[4rem] bg-[#374151]`}
    >
      <div className='w-[10%] ml-2'>
        <ul className='flex gap-3 text-bold'>
          <li>
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? "bg-yellow-500 px-3 py-2 rounded-full  font-bold"
                  : "px-3 py-2 hover:bg-slate-500 rounded-full bg-slate-600 font-bold"
              }
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? "bg-yellow-500 px-3 py-2  rounded-full  font-bold"
                  : "px-3 py-2 hover:bg-slate-500 rounded-full bg-slate-600 font-bold"
              }
              to='/favorite'
            >
              Favourites
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='grow'></div>
      <div>
        {location.pathname === "/" ? (
          <h4 className='text-2xl sm:text-3xl font-bold'>Movies</h4>
        ) : (
          <h4 className='text-2xl sm:text-3xl font-bold'>Favourite Movies</h4>
        )}
      </div>

      <div className='grow-0 mr-7 sm:grow'></div>
    </nav>
  );
};

export default Navbar;
