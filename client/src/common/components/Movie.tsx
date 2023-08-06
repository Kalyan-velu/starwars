import { MovieTypes } from "../../types/types";

const Movie = ({ movie }: { movie: MovieTypes }) => {
  return (
    <div className='w-[18rem] h-[24rem] m-auto rounded-2xl bg-blue-950'>
      <div>
        <h3 className='text-3xl text-white-100 text-bold'>{movie.title}</h3>
      </div>
    </div>
  );
};

export default Movie;
