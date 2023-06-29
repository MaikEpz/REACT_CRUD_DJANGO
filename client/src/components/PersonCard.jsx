import { useNavigate } from "react-router-dom"


//recibe la propiedad person
export function PersonCard ({person})  {
  
  const navigate= useNavigate()
    return (
      
    <tr style={{background:"white"}}
    onClick={()=>{
      //navigate('/person/'+person.id)
      navigate(`/person/${person.id}`)
      
    }}
  
  >
        <th scope="row">{person.id}</th>
        <td>{person.nombre}</td>
        <td>{person.direccion}</td>
        <td>{person.telefono}</td>
        <td>{person.correo}</td>
        
      </tr>
      
    )
}