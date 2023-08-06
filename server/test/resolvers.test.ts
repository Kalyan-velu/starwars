// resolvers.test.ts

import axios from 'axios';
import { ApolloServer  } from '@apollo/server';
import {gql} from "graphql-tag"
import { createTestClient } from 'apollo-server-testing';
import { typeDefs, resolvers } from '../src/graphql/index'; // Replace 'your-file' with the actual path to your file

const SWAPI_BASE_URL = 'https://swapi.dev/api/';

describe('GraphQL Resolvers', () => {
  // Create an instance of ApolloServer with the provided typeDefs and resolvers
  const server = new ApolloServer({ typeDefs, resolvers });

  // Helper function to create a test server and execute a query
  const createTestServer = async () => {
    const { query } = createTestClient(server);
    return query;
  };

  // Mock the axios.get function to return specific data for testing
  jest.mock('axios');
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  const mockMoviesData = {
    data: {
      results: [
        {
          episode_id: 1,
          title: 'A New Hope',
          opening_crawl: 'It is a period of civil war...',
          producer: 'Gary Kurtz, Rick McCallum',
          release_date: '1977-05-25',
        },
        // Add more movies data here for testing
      ],
    },
  };
  mockedAxios.get.mockResolvedValue(mockMoviesData);

  // Test case for the 'movies' query
  describe('movies', () => {
    it('returns a list of movies', async () => {
      const QUERY_MOVIES = gql`
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

      const expectedResponse = mockMoviesData.data.results;
      const response = await createTestServer().query({ query: QUERY_MOVIES });

      expect(response.data).toEqual({ movies: expectedResponse });
    });

    // Add more test cases for the 'movies' query if needed
  });

  // Test case for the 'movie' query
  describe('movie', () => {
    it('returns a single movie by id', async () => {
      const QUERY_MOVIE = gql`
        query {
          movie(id: 1) {
            episode_id
            title
            opening_crawl
            producer
            release_date
          }
        }
      `;

      const expectedResponse = mockMoviesData.data.results[0];
      const response = await createTestServer().query({ query: QUERY_MOVIE });

      expect(response.data).toEqual({ movie: expectedResponse });
    });

    // Add more test cases for the 'movie' query if needed
  });
});
