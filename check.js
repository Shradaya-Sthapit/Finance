import axios from "axios";
import Task from "./model/task.js";


const date = new Date();
 
    const a = async()=>{
        const tasks = await Task.find({
            "Notified": false
        })
        for(const task of tasks){
            
        if(task.DueDate <= date)
        {
            
            axios.post('https://api.kaleyra.io/v1/HXIN1709604395IN/voice/outbound?to=+917667362566&api-key=A7d9a93081fcd9840089b138b995e51c4&bridge=+918046983237&target=[{"message": {"text":"Some of your tasks are due.Its not good to procastinate"}}]',{
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(async ()=>{
                // task.updateOne({"Notified": true})
                task.Notified = true
                await task.save();
                console.log('Call Sent')})
            .catch(err=>console.log(err))
        }
    }  
    }
export default a;
  
    



