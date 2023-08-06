import  axios  from 'axios';
const SWAPI_BASE_URL = "https://swapi.dev/api/";
import { gql } from "graphql-tag";

export const typeDefs=gql`
  type Movie{
    title:String!
    episode_id:ID
    opening_crawl:String
    producer:String
    release_date:String
  }

  type Query{
    movie(id:ID!):Movie
    movies:[Movie]
  }
`

export const resolvers={
  Query:{
    movie: async (_: null, { episode_id }: { episode_id: number }) => {
      try {
        const { data } = await axios.get(`${SWAPI_BASE_URL}films/${episode_id}`);
        return data.results;
      } catch (err) {
        throw new Error("Error fetching movie data from SWAPI");
      }
    },
    movies: async () => {
      try {
        const { data } = await axios.get(`${SWAPI_BASE_URL}films/`);
        return data.results;
      } catch (err) {
        throw new Error("Error fetching movie data from SWAPI");
      }
    },

  }
}