import React from 'react';
import "../App.css";
import video from "../img/video.mp4";

export const Principal = () => {

  return (
    <>
      <div className="presentation">

        <a href='/home' >Ingresar</a>
      </div>

      <video className="video-home" autoPlay loop muted>
        <source src={video}  type="video/mp4"/>
      </video>
</>

  )
}
