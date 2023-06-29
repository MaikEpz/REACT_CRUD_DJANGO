import { Link } from 'react-router-dom'
export function Navigation() {
    return (


        <div className='p-3 mb-2 bg-dark text-white'>
            <Link to="/person">
                <button type="button" className="btn btn-primary btn-lg"> Listar Personas </button>

            </Link>


            <Link to="/person-create"> <button type="button" className="btn btn-primary btn-lg">Crear Persona</button></Link>
        </div>


    )
}