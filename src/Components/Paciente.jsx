
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, duenio, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const confirmacion = window.confirm(`¿Estas seguro de eliminar a ${nombre}?`)

        if (confirmacion) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className='bg-slate-100 shadow-md px-5 py-10 rounded-xl mx-5 my-10'>
            {/* Nombre Mascota */}
            <p className='block text-gray-700 text-sm uppercase font-bold mb-3'>
                Nombre: {' '}
                <span className='text-gray-500 normal-case font-normal'>
                    {nombre}
                </span>
            </p>
            {/* Nombre Dueño */}
            <p className='block text-gray-700 text-sm uppercase font-bold mb-2'>
                Dueño: {' '}
                <span className='text-gray-500 normal-case font-normal'>
                    {duenio}
                </span>
            </p>
            {/* Email */}
            <p className='block text-gray-700 text-sm uppercase font-bold mb-2'>
                Email: {' '}
                <span className='text-gray-500 normal-case font-normal'>
                    {email}
                </span>
            </p>
            {/* Alta */}
            <p className='block text-gray-700 text-sm uppercase font-bold mb-2'>
                Alta: {' '}
                <span className='text-gray-500 font-normal'>
                    <time dateTime='2020-01-01'>
                        {fecha}
                    </time>
                </span>
            </p>
            {/* Sintomas */}
            <p className='block text-gray-700 text-sm uppercase font-bold mb-2'>
                Sintomas: {' '}
                <span className='text-gray-500 normal-case font-normal'>
                    {sintomas}
                </span>
            </p>

            {/* Agregamos botones para editar y eliminar */}
            <div className='flex justify-between mt-10'>
                <button 
                className='bg-indigo-400 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button 
                className='bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente