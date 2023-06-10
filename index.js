import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

dotenv.config();
const app =express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use (morgan("common"));
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


app.use("/auth",authRoutes);
app.use("/users",userRoutes);
app.use("/posts",postRoutes);

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,}).then(()=>{
    app.listen(PORT,()=>console.log(`Server has started with MONGO connection at port ${PORT}`))
}).catch((error)=> console.log(`${error} did not connect`))


