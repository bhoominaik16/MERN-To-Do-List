import Home from "./pages/Home"
import Schedule from "./pages/Schedule"
import { Route, Routes, Link } from "react-router-dom"

function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col sm:flex-row justify-between">
            <div className="sm:min-w-[25vw] lg:min-w-[15vw] sm:min-h-screen text-white bg-black flex sm:flex-col sm:items-center sm:justify-center justify-between p-5 sm:gap-4">
                <Link to={'/'} className="text-2xl font-bold border border-white p-1 rounded-lg hover:bg-white hover:text-black">View Task List</Link>
                <Link to={'/schedule'} className="text-2xl font-bold border border-white p-1 rounded-lg hover:bg-white hover:text-black">Add New Task</Link>
            </div>
            <div className="min-h-screen p-5 min-w-[85vw]">
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
            </Routes>  
            </div>
        </div>
    </>
  )
}

export default App
