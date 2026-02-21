import { useState } from "react"
import axios from 'axios'

export default function Schedule(){
    const[task, setTask] = useState("");

    const handleAdd = (e) => {
        if(task.trim()===""){
            alert("Please add task first!")
        }
        else{
            axios.post('http://localhost:3001/add', {task:task})
            .then(result=> {
                location.reload()})
            .catch(err => console.log(err))
        }
    }


    return(
        <div className="flex flex-col items-center justify-center h-full gap-5">
            <h1 className="text-2xl font-bold">Add a new Task below</h1>
            <div className="flex items-center justify-center gap-5">
                <input type="text" onChange={(e) => setTask(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleAdd()} placeholder="Add task" className="max-w-md sm:w-md p-2 border border-black rounded-2xl"/>
                <button type="button" onClick={handleAdd} className="w-fit py-2 px-4 border-2 font-bold border-black rounded-2xl hover:bg-black hover:text-white">Add</button>
            </div>
        </div>
    )
}