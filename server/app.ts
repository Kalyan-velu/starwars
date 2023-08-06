import express,{ Request, Response }  from "express"
import {expressMiddleware} from "@apollo/server/express4"
import cors from 'cors'
const app = express();

const port= process.env.PORT || 4000;


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port,()=>{
  console.log("Server is runing")
})

export default app