import express,{Express, NextFunction, Request, Response }  from 'express'
import cors from 'cors'
import path from 'path'
const app:Express = express();
const __dirname1 = path.resolve()

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}))


//Enabling Cors
app.use(cors())
app.options('*', cors());
const allowCrossDomain = function (req:Request, res:Response, next:NextFunction) {    //
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
app.use(allowCrossDomain);
app.use(express.json())
app.use(express.urlencoded({extended:true}))


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname1, '../client/dist')))

  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname1, "../client", "dist", "index.html"))
  })
} else {
  app.get("/", (request:Request, response:Response) => {
    response.json({message: "Server is Up"});
  });
}


export default app