import express from "express";
import TaskController from "../controller/taskController.js";

const router = express.Router();

const UserRouter = router;

router.get("/", async (req, res) => {
  TaskController.getTask(req,res);
});

router.post("/", async (req, res) => {
  TaskController.addTask(req,res);
    
  });
  
router.delete("/:_id", async (req, res) => {
  TaskController.deleteTask(req,res);
      
  });

router.put("/:_id", async (req, res) => {
  TaskController.updateTask(req,res);
        
  });
  
export default UserRouter;