import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PersonPage } from './pages/PersonaPage'
import { PersonFormPage } from './pages/PersonFormPage';
import {Navigation} from "./components/Navigation"
import { Toaster } from "react-hot-toast"
function App(){
  return (
    
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Navigate to ="/person"/>}/>
        <Route path="/person" element={<PersonPage />}/>
        <Route path="/person-create" element={<PersonFormPage />}/>
        <Route path="/person/:id" element={<PersonFormPage />}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}
export default App