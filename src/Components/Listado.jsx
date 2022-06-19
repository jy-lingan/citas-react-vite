import Paciente from './Paciente'

const Listado = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className='container md:flex'>

      {pacientes && pacientes.length ? (
        <>

          <h2 className='font-black text-zinc-700 text-2xl text-center'>Listado de Pacientes</h2>
          <p className='text-lg text-center text-gray-600 mt-5 mb-10'>
            Administra tus {' '}
            <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>{' '}
          </p>
          <div>
            <div className='flex flex-wrap justify-center'>

              {pacientes.map(paciente => (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className='font-black text-zinc-700 text-2xl text-center'>No hay pacientes</h2>
          <p className='text-lg text-center text-gray-600 mt-5 mb-10'>
            Comienza agregando pacientes {' '}
            <span className='text-indigo-600 font-bold'>para poder administrarlos</span>{' '}
          </p>
        </>
      )}
    </div>
  )
}

export default Listado