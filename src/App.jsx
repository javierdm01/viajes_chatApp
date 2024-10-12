import './App.css'
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Panel from './pages/Panel';
function App() {

  return (
    <>
      <div className="h-screen text-zinc-500">
        <Panel />
      {/*<Router>
        <Routes>
           Layout general para envolver las rutas */}
            {/* Ruta de login (página principal) 
            <Route index element={<Panel />} />
            
            {/* Ruta del Dashboard 
            <Route path="dashboard" element={<Dashboard />}>
              {/* Rutas anidadas dentro del Dashboard 
              <Route path="factura" element={<Factura />} />
              <Route path="productos" element={<Productos />} />
            </Route>
        </Routes>
      </Router>*/}
    </div>
    </>
  )
}

export default App
