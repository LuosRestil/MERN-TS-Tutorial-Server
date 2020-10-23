import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4400;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(router);


const uri: string = `${process.env.MONGO_URI}`;
const options = {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false};

mongoose.connect(uri, options)
.then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
.catch(error => {throw error});
