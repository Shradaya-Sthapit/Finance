import express, { urlencoded } from "express";
import cors from "cors";
import upload from 'express-fileupload'
import FileRoute from "./routes/taskRoute.js";
import connectDB from "./connection/db_connect.js";
import bodyParser from 'body-parser';
import cron from "node-cron";
import shell from "shelljs";
import Task from "./check.js";

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

app.use("/task", FileRoute);

app.listen(8080);

connectDB();

cron.schedule("* * * * * *",()=>{
  Task();
})