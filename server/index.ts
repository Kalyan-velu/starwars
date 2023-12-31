import {expressMiddleware} from "@apollo/server/express4"
import "dotenv/config"
import {ApolloServer} from "@apollo/server"
import { typeDefs } from "./src/graphql/typeDefs"
import { resolvers } from "./src/graphql/resolvers"

import app from "./src/app"

const bootstrapServer=async()=>{
  
  const server=new ApolloServer({
    typeDefs,
    resolvers
  })

  await server.start()
  app.use("/graphql",expressMiddleware(server))

  const port= process.env.PORT || 4000;

  app.listen(port,()=>{
    console.log(`The graphql server running on ${port}`)
  })
}

bootstrapServer()
