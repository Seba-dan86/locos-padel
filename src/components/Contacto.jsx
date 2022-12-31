import React from 'react';
import {Navbar} from "./Navbar";
import data from "../Data";
import { useState } from 'react';

function Contacto() {

const [datos,setDatos]=useState("")
// funcion que captura los datos del input
const handleInputChange=(e)=>{
    setDatos(e.target.value)
}
// funcion que borra los datos del input
const delette= ()=>{
    setDatos("");
}
// funcion que envia el formulario
const send = (e)=>{
    e.preventDefault();
console.log(datos)
}
// filtrado
let results=[];
if(!datos){
results=data
} else {
   results= data.filter(dato=>
        dato.title.toLowerCase().includes(datos.toLowerCase())
        )

}
    return (
        <div>
            <Navbar/>

<h1>ENCONTRA TU CLUB</h1>
<h4 >Introducir el Nombre de un Club</h4>
<form onSubmit={send}>
<input type="text"
class="form-control mr-3"
 onChange={handleInputChange}
 placeholder='----'
 value={datos}
 name="buscar"/>


</form>
<button class="btn btn-danger" onClick={delette}>Delete</button>
<hr />


<div className='container-fluid'>
<table className="table table-striped table-hover mt-5 shadow-lg">
  <thead>
    <tr className='bg-curso text-white'>
      <th scope="col">#</th>
      <th scope="col">Club</th>
      <th scope="col">Direccion</th>
      <th scope="col">Telefono</th>
    </tr>
  </thead>
  <tbody>
    {results.map(info=>{
        return(

<tr>
      <th scope="row">{info.id}</th>
      <td>{info.title}</td>
      <td>{info.direction}</td>
      <td>{info.phone}</td>
    </tr>

        )
    })}


  </tbody>
</table>

</div>
        </div>
    );
}

export default Contacto;