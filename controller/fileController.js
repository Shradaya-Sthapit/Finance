import fileServices from "../service/file.js";

const addFile = (req, res) => fileServices.addFile(req, res);
const getFile = (req, res) => fileServices.addFile(req, res);


const FileController = { addFile, getFile};

export default FileController;