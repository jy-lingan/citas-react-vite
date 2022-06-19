import { useEffect, useState } from "react"
import Error from "./Error"

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('')
  const [duenio, setDuenio] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setDuenio(paciente.duenio)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])


  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validar formulario
    if ([nombre, duenio, email, fecha, sintomas].includes('')) {
      console.log('Hay un campo vacio')

      setError(true)
      return
    }

    setError(false)

    // Objecto con los datos del paciente
    const objetoPaciente = {
      nombre,
      duenio,
      email,
      fecha,
      sintomas
    }

    if (paciente.id) {
      // Editando registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
        paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      // Nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    // Limpiar formulario
    setNombre('')
    setDuenio('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className='container md:flex'>

      <h2 className='font-black text-zinc-700 text-2xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg text-center text-gray-600 mt-5 mb-10'>
        Añade Pacientes y {' '}
        <span className='text-indigo-600 font-bold'>Administralos</span>{' '}
      </p>

      <form
        onSubmit={handleSubmit}
        className='bg-slate-100 shadow-md rounded-lg py-10 px-5 mb-10 mx-5'>
        <div className='mb-5'>

          {error && <Error><p>Todos los campos son obligatorios</p></Error>}
          {/* Nombre Mascota */}
          <label className='block text-gray-700 text-sm uppercase font-bold mb-2' htmlFor='nombre'>
            Nombre Mascota
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='nombre'
            type='text'
            placeholder='Nombre de la mascota'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          {/* Nombre Dueño */}
          <label className='block text-gray-700 text-sm uppercase font-bold mb-2' htmlFor='nombre2'>
            Nombre Dueño
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='nombre2'
            type='text'
            placeholder='Nombre del dueño'
            value={duenio}
            onChange={(e) => setDuenio(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          {/* Email */}
          <label className='block text-gray-700 text-sm uppercase font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          {/* Alta */}
          <label className='block text-gray-700 text-sm uppercase font-bold mb-2' htmlFor='alta'>
            Alta
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='alta'
            type='date'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          {/* Sintomas */}
          <label className='block text-gray-700 text-sm uppercase font-bold mb-2' htmlFor='sintomas'>
            Síntomas
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='sintomas'
            type='text'
            placeholder='Describe los síntomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        {/* Agregar nuevo paciente */}
        <input
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
          value={
            paciente.id ? 'Editar Paciente' : 'Agregar Paciente'
          } />
      </form>
    </div>
  )
}

export default Formulario