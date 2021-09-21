import express from "express";

import FileController from "../controller/fileController.js";

const router = express.Router();

const UserRouter = router;

router.get("/", async (req, res) => {
  console.log("API HIT");
  res.send("USER APIS");
});

router.post("/", async (req, res) => {
  FileController.addFile(req,res);
    
  });
  
export default UserRouter;