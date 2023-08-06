import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieTypes } from "../../types/types";
import StarRegular from "/icons/star-regular.svg";
import StarSolid from "/icons/star-solid.svg";
import { addFav } from "../../features/actions";

const Movie = ({ movie }: { movie: MovieTypes }) => {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = React.useState(false);
  const { favorite: favMov } = useSelector(({ favorite }) => favorite);

  React.useEffect(() => {
    //check current  movie is in favorite list
    const isInFavorite = favMov.some(
      (favMovie: MovieTypes) => favMovie.episode_id === movie.episode_id
    );

    setFavorite(isInFavorite);
  }, [favMov, movie.episode_id]);

  const handleFavorite = () => {
    dispatch(addFav([movie]));
    setFavorite(!favorite);
  };
  return (
    <div className='relative w-[100%] sm:w-[28rem] m-auto mb-6 h-[24rem]'>
      <div className=' m-auto inset-0 bg-amber-400 rounded-lg blur-sm absolute'></div>
      <div className='relative w-[100%]  sm:w-[28rem] m-auto h-[24rem] py-4 px-4 bg-[#171717] rounded-lg leading-none grid items-center'>
        <p className='text-xl font-bold text-gray-100'>
          Episode: {movie.episode_id}
        </p>
        <div className='flex items-center justify-between'>
          <h3 className='text-2xl font-bold text-gray-100'>{movie.title}</h3>
          <span className='text-[0.5rem] sm:text-[1rem] text-white'>
            {movie.release_date}
          </span>
        </div>
        <span className='leading-loose text-sm text-gray-200'>
          {movie.opening_crawl}
        </span>
        <button
          type='button'
          className='w-[fit-content] cursor-pointer m-auto flex items-center gap-1 rounded-lg bg-green-500 px-4 py-2 text-white'
          onClick={handleFavorite}
        >
          <img
            src={favorite ? StarSolid : StarRegular}
            className='w-[24px] h-[24px]'
            alt='star'
          />
          <span className='font-medium'>Add to favorite</span>
        </button>
      </div>
    </div>
  );
};

export default Movie;
