import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import { NavBar } from './components/NavBar';
import { Welcome } from './components/Welcome';
import { Footer } from './components/Footer';
import { Help } from './components/Help';
import { Arrow } from './components/Arrow';


const END_POINT = "http://localhost:3001"
function App() {

  return (
    <div>
      <NavBar />
      <Arrow/>
      <Routes> 
        <Route path='/' element={<Welcome/>}/>
         <Route path='/Ayuda/:Seccion'  element={<Help />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
