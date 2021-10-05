import TaskServices from "../service/Task.js";

const addTask = (req, res) => TaskServices.addTask(req, res);
const getTask = (req, res) => TaskServices.getTask(req, res);
const deleteTask = (req, res) => TaskServices.deleteTask(req, res);
const updateTask = (req, res) => TaskServices.updateTask(req, res);


const TaskController = { 
    addTask, 
    getTask,
    deleteTask,
    updateTask
};

export default TaskController;