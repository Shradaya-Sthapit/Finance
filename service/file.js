import File from "../model/file.js";
import fs from 'fs'



const addFile = (req, res) => {
    const files=JSON.parse(req.files.file.data)
    console.log(JSON.parse(req.files.file.data))
    files.map(file=>File.create(file))
  
     
   

 

};

const getFile = (req, res) => {};



const FileServices = { addFile, getFile };

export default FileServices;