import express, { urlencoded } from "express";
import cors from "cors";
import upload from 'express-fileupload'
import FileRoute from "./routes/fileRoute.js";
import connectDB from "./connection/db_connect.js";
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(urlencoded());
app.use(express.json());
app.use(upload())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.use("/file", FileRoute);

app.listen(5000);

connectDB();