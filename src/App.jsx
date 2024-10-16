import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/StudentRegistrationForm'
import Login from './pages/Login'
import FacultyRegistrationForm from './pages/FacultyRegistrationForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/facultyregister" element={<FacultyRegistrationForm />} />
        
      </Routes>
    </Router>
    
    </>
  )
}

export default App
