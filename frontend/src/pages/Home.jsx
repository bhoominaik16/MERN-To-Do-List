import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export default function Home(){
    const[todo, setTodo] = useState([])
    const[ongoing, setOngoing] = useState([])
    const[done, setDone] = useState([])
    const[currentDate] = useState(new Date());

    const format ={
        day : 'numeric',
        year : 'numeric',
        month : 'long',
        weekday : 'long',
    };

    const formattedDate = currentDate.toLocaleDateString(undefined, format);

    useEffect(() => {
        axios.get('http://localhost:3001/gettodo')
            .then(result => setTodo(result.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3001/getongoing')
            .then(result => setOngoing(result.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3001/getdone')
            .then(result => setDone(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleSetOngoing = (id) => {
        axios.put('http://localhost:3001/updateOngoing/'+id)
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleSetDone = (id) => {
        axios.put('http://localhost:3001/updateDone/'+id)
            .then(result => { 
                location.reload()
            })
            .catch(err => console.log(err))

    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/'+id)
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }
    return(
        <>
        <header className="min-h-[8%] border-b-2 text-black flex items-end justify-between">
            <h1 className="text-2xl font-bold py-4 px-2">List</h1>
            <h1 className="font-semibold py-4 px-2">{formattedDate}</h1>
        </header>
        <div className="p-5 grid lg:grid-cols-3 gap-2 xl:gap-5 min-h-[92%]">
            <div className=" min-h-full border border-black rounded-2xl">
                <h1 className="border-b border-black text-xl font-bold p-4">To Do</h1>
                <div className="p-3 xl:p-4">
                    {
                        todo.length === 0 ? 
                        <div>
                            <h1>Nothing here</h1>
                        </div> :
                        todo.map(todo => (
                            <div className="grid grid-cols-2 p-1 border-b border-black ">
                                <p className="text-md xl:text-lg font-semibold">{todo.task}</p>
                                <div className="flex justify-around gap-2 xl:gap-4">
                                    <button onClick={() => handleSetOngoing(todo._id)} className="bg-green-300 hover:bg-green-400 border border-green-500 lg:text-sm xl:text-md font-semibold p-1 xl:p-2 rounded-xl">Set Ongoing</button>
                                    <button onClick={() => handleDelete(todo._id)} className="bg-red-300 hover:bg-red-400 border border-red-500 lg:text-sm  xl:text-md font-semibold p-1 xl:p-2 rounded-xl">Delete</button>
                                </div>
                            </div>
                        ))       
                    }
                </div>
            </div>
            <div className="min-h-full border border-black rounded-2xl">
                <h1 className="border-b border-black text-xl font-bold p-4">Ongoing</h1>
                <div className="p-2 xl:p-4">
                    {
                        ongoing.length === 0 ? 
                        <div>
                            <h1>Nothing here</h1>
                        </div> :
                        ongoing.map(ongo => (
                            <div className="grid grid-cols-2 p-1 border-b border-black ">
                                <p className="text-md xl:text-lg font-semibold">{ongo.task}</p>
                                <div className="flex justify-center gap-2 xl:gap-4">
                                    <button onClick={() => handleSetDone(ongo._id)} className="bg-green-300 hover:bg-green-400 border border-green-500 lg:text-sm xl:text-md font-semibold p-1 xl:p-2 rounded-xl">Set Done</button>
                                    <button onClick={() => handleDelete(ongo._id)} className="bg-red-300 hover:bg-red-400 border border-red-500 lg:text-sm xl:text-md font-semibold p-1 xl:p-2 rounded-xl">Delete</button>
                                </div>
                            </div>
                        ))        
                    }
                </div>
            </div>
            <div className=" min-h-full border border-black rounded-2xl">
                <h1 className="border-b border-black text-xl font-bold p-4">Done</h1>
                <div className="p-2 xl:p-4">
                    {
                        done.length === 0 ? 
                        <div>
                            <h1>Nothing here</h1>
                        </div> :
                        done.map(doneTask => (
                            <div className="flex p-1 border-b border-black justify-between">
                                <p className="text-lg font-semibold">{doneTask.task}</p>
                                <button onClick={() => handleDelete(doneTask._id)} className=" bg-red-300 hover:bg-red-400 border border-red-500 font-semibold p-1 rounded-xl">Delete</button>
                            </div>
                        ))         
                    }
                </div>
            </div>
        </div>
        </>
    )
}