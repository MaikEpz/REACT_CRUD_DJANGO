import React, { useEffect, useState } from "react";
import { getAllPerson } from "../api/person.api";
import { PersonCard } from './PersonCard';
export function PersonList() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    async function loadPersons() {
      try {
        const res = await getAllPerson();
        console.log(res); // Verificar la respuesta en la consola
        setPersons(res.data);
      } catch (error) {
        console.error(error); // Verificar si hay errores en la consola
      }
    }
    loadPersons();
  }, []);

  return (
    
      <div className="container ">
        
        <div className="row justify-content-center">
          
          <div className="col-auto mt-5">
            
            <table className="table table-bordered table-striped mx-auto d-block">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Direccion</th>
                  <th scope="col">Telefono</th>
                  <th scope="col">Correo</th>
                </tr>
              </thead>
              <tbody>
                {persons.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </tbody>
            </table>
            
          </div>
        </div>
        
      </div>
    
  );
}