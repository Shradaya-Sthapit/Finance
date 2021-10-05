import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
  
  Task: {
    type: String,
    required: true,
  },
  DueDate: {
    type: Date,
    required: true,
  },
  Notified:{
    type: Boolean,
    defaultValue: false
  }

});

const Task = mongoose.model("Task", TaskSchema);

export default Task;