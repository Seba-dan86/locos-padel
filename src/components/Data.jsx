import React from 'react'
import './../App.css';
import data from '../Data';
import {Navbar} from "./Navbar";
import whatsapp from "../img/icons8-whatsapp.svg";
import face from "../img/icons8-facebook.svg";
import instagram from "../img/icons8-instagram.svg";
export const Data = () => {

  return (
    <>
<Navbar/>

      <h1>
        Donde Jugamos....??
      </h1>
    <div className="card-container">
{
  data.map(turno=>{
    return(

      <div className="card"  key={turno.id} >

<img className="image" src={turno.image} alt=""  />
<div className="info">
          <p className='tittle'>{turno.title}</p>
      <div className='ico-container'>
      <a href={`http://wa.me/${turno.phone}`}><img src={whatsapp} alt=""/></a>
      <a href={turno.social_data}><img src={face} alt=""/></a>
      <a href={turno.social_data1}><img src={instagram} alt=""/></a>
      </div>
      <p className='directionn'>{turno.direction}</p>
</div>
      </div>
    )
  })
}

</div>






    </>
  )
}


