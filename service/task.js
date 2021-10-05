import axios from "axios";
import { application, urlencoded } from "express";
import Task from "../model/task.js";
const addTask = (req, res) => {
    Task.create(req.body)
    .then(task => res.status(200).send(task))
    .catch(err => res.send(err))
};

const getTask = async (req, res) => {
    const {time} = req.query;
    if(!time)
    {
        Task.find()
        .then(task => res.status(200).send(task))
        .catch(err => res.send(err))
    }
    else
    {
        const tasks= await Task.find()
        for(const task of tasks)
        {
       const changedDate= task.DueDate.toLocaleString('en-US', { timeZone: time })
        task.DueDate=changedDate;
        }
    return res.send(tasks);
    }
    
};

const deleteTask = (req, res) => {
    const {_id}=req.params;
    Task.deleteOne({_id})
    .then(task => res.status(200).send(task))
    .catch(err => res.send(err))
};
const updateTask = (req, res) => {
    console.log(req.params)
    const {_id} = req.params;
    Task.updateOne({_id},req.body)
    .then(task => res.status(200).send(task))
    .catch(err => res.send(err))
};





const TaskServices = { addTask, getTask, deleteTask, updateTask };

export default TaskServices;