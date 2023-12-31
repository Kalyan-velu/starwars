import { DocumentNode } from 'graphql'
import {gql} from 'graphql-tag'

export const typeDefs:DocumentNode=gql`
  type Movie{
    title:String!
    episode_id:Int
    opening_crawl:String
    producer:String
    release_date:String
  }
  
  type Query{
    movie(id:Int!):Movie
    movies:[Movie]
  }
`
