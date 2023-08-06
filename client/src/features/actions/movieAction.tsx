// Fetch data from GraphQL API (Example using Apollo Client)
import { gql } from "@apollo/client";
import { store } from "../../app/store";
import { setMovies } from "../actions";

// Example GraphQL query
const GET_MOVIES = gql`
  query {
    movies {
      episode_id
      title
      opening_crawl
      producer
      release_date
    }
  }
`;

// Fetch data from GraphQL API
client.query({ query: GET_MOVIES }).then((response) => {
  const moviesData = response.data.movies;
  // Dispatch action to update Redux store with the received data
  store.dispatch(setMovies(moviesData));
});
