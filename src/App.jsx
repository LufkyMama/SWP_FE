import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login'
import Register from './Register'

function App() {
  
  return (
   <div className="app-container">
    <Routes>

    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
    </Routes>
   </div>
    
    
  )
}

export default App
