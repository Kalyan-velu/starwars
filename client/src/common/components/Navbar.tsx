import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className='fixed top-0 left-0 right-0 h-[5rem] bg-gray-600'>
      <ul className='flex text-bold'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/favorite'>Favourites</Link>
        </li>
      </ul>
      <div className=''>
        {location.pathname === "/" ? (
          <h4 className='text-xl text-bold'>Movies</h4>
        ) : (
          <h4 className='text-xl text-bold'>Favourite Starwars Movies</h4>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
