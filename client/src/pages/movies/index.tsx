import React from "react";
import { MovieTypes } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { setMovies } from "../../features/actions";
import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "../../gql";
import Movie from "../../common/components/Movie";

const Movies = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector(({ movies }: RootState) => movies);
  const { loading, error, data } = useQuery(GET_MOVIES);

  React.useEffect(() => {
    if (data && !loading && !error) {
      // Dispatch action to update Redux store with the received data
      dispatch(setMovies(data.movies));
    }
  }, [data, loading, error, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='w-[90%] mx-auto'>
      <div className='grid grid-cols-3 gap-4'>
        {movies &&
          movies.map((movie: MovieTypes) => (
            <React.Fragment key={movie.episode_id}>
              <Movie movie={movie} />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default Movies;
