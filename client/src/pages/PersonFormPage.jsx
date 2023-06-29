import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { createPerson, deletePerson, updatePerson, getPerson } from '../api/person.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-hot-toast";

export function PersonFormPage() {
    const { register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();
    const navigate = useNavigate();
    const params = useParams();


    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updatePerson(params.id, data);
            toast.success('Datos actualizados', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
        } else {
            await createPerson(data);
            toast.success('Ingresado correctamente', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
        }
        navigate("/person")

    })

    useEffect(() => {
        async function loadPerson() {
            if (params.id) {
                const res = await getPerson(params.id)
                setValue('nombre', res.data.nombre)
                setValue('direccion', res.data.direccion)
                setValue('telefono', res.data.telefono)
                setValue('correo', res.data.correo)

            }
        }
        loadPerson()

    }, [])
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-6 mt-6">
                    <form>
                        <div className="mb-3 mt-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Nombre: </label>
                            <input type="text" className="form-control"
                                {...register("nombre", { required: true })}
                            />
                            {errors.nombre && <span>Este campo es requerido</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Direccion:</label>
                            <input type="text" className="form-control"
                                {...register("direccion", { required: true })}
                            />
                            {errors.direccion && <span>Este campo es requerido</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Telefono:</label>
                            <input type="text" className="form-control"
                                {...register("telefono", { required: true })}
                            />
                            {errors.telefono && <span>Este campo es requerido</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email:</label>
                            <input type="email" className="form-control"
                                {...register("correo", { required: true })}
                            />
                            {errors.correo && <span>Este campo es requerido</span>}
                        </div>
                      
                        <button type="button" onClick={onSubmit} className="btn btn-secondary btn-lg mb-2">Guardar</button>

                    </form>
                    {
                        params.id && <button
                            onClick={async () => {
                                const accept = window.confirm("Estas seguro?")
                                if (accept) {
                                    console.log(params.id)
                                    await deletePerson(params.id);
                                    toast.success('Persona eliminada', {
                                        position: "bottom-right",
                                        style: {
                                            background: "#101010",
                                            color: "#fff"
                                        }
                                    })
                                    navigate('/person');

                                }
                            }} className="btn btn-danger btn-lg" >Borrar</button>
                    }

                </div>
            </div>
        </div>
    )
}