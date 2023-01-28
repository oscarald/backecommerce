import express from "express"
import cookieparser from "cookie-parser"
import morgan from "morgan"
import routes from "../routers/index.js"
import cors from "cors"
import fileUpload from "express-fileupload"
import connectDB from "./database/index.js"
import dotenv from "dotenv"

dotenv.config()
connectDB()

const server = express();
server.use(express());
server.use(express.urlencoded({ extended: true, limit: "150mb" }));
server.use(express.json({ limit: "50mb" }));

server.use(cookieparser());
server.use(morgan("dev"));
server.use(cors());
server.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './uploads'
}));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use("/", routes);
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default server