
import "dotenv/config"
import {ApolloServer} from "@apollo/server"
import { typeDefs,resolvers } from './src/graphql'
import app from "./app"

const bootstrapServer=async()=>{
  
  const server=new ApolloServer({
    typeDefs,
    resolvers
  })

  await server.start()
  app.use("/graphql",expressMiddleware(server))
app.get('/',(req:Request,res:Response)=>{
  res.send('Hello World')
})
}

bootstrapServer()
