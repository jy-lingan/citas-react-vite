import {useState, useEffect } from "react"
import Formulario from "./Components/Formulario"
import Header from "./Components/Header"
import Listado from "./Components/Listado"

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente , setPaciente] = useState({})

  useEffect(() => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
    
    setPacientes(pacientesLS)
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))

  }, [pacientes])

  const eliminarPaciente = id => {
    setPacientes(pacientes.filter(paciente => paciente.id !== id))
  }

  return (
    <div className="container mx-auto mt-20" >
      <Header />

      <div className="mt-2 flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
      </div>
      <div className="mt-2 flex">
        <Listado
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
