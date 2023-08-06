import React from "react";
import { MovieTypes } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { setMovies } from "../../features/actions";
import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "../../gql";
import Movie from "../../common/components/Movie";
import Loading from "../../common/components/Loading";

const Movies = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector(({ movies }: RootState) => movies);
  const { loading, error, data } = useQuery(GET_MOVIES);

  React.useEffect(() => {
    if (data && !loading && !error && movies.length === 0) {
      // Dispatch action to update Redux store with the received data
      dispatch(setMovies(data.movies));
    }
  }, [data, loading, error, dispatch, movies]);

  if (loading)
    return (
      <>
        <Loading />
      </>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='w-[90%] mx-auto h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {movies &&
        movies.map((movie: MovieTypes) => (
          <React.Fragment key={movie.episode_id}>
            <Movie movie={movie} />
          </React.Fragment>
        ))}
    </div>
  );
};

export default Movies;
