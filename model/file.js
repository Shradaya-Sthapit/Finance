import mongoose from "mongoose";

const FileSchema = mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  id:{
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  }

});

const File = mongoose.model("File", FileSchema);

export default File;