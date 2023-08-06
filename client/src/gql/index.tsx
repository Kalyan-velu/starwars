import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
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
