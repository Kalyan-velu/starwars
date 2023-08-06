import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Movie from "../../common/components/Movie";
import { MovieTypes } from "../../types/types";

const Favorite = () => {
  const { favorite } = useSelector(({ favorite }) => favorite);

  return (
    <div
      className={`${
        favorite.length !== 0
          ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          : "justify-center gap-4"
      } w-[90%] mx-auto h-full grid`}
    >
      {favorite.length !== 0 ? (
        <>
          {favorite.map((movie: MovieTypes) => (
            <React.Fragment key={movie.episode_id}>
              <Movie movie={movie} />
            </React.Fragment>
          ))}
        </>
      ) : (
        <>
          <h2 className='font-bold text-white text-4xl text-center'>
            No Favorite Movies Added
          </h2>
          <button
            type='button'
            className='w-[fit-content] cursor-pointer m-auto flex items-center gap-1 rounded-lg bg-green-500 px-4 py-2 text-white'
            disabled
          >
            <Link to='/' className='font-medium'>
              Add Youe Favorite Movies
            </Link>
          </button>
        </>
      )}
    </div>
  );
};

export default Favorite;
