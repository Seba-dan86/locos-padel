
import "../App.css";
import { Navbar } from "./Navbar";
import {TileLayer,Marker,Popup, MapContainer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from '../Data';
import { iconLock } from "./Icon";
 const Mapa = () => {
  let place= {
    location:{lat:'-33.67571',lng:'-65.45783'},
    zoom: 13
  }


  return (
    <>
      <Navbar />
      <h1>Ubica a tu Club Preferido</h1>
      <div className="container">
      <MapContainer center={place.location} zoom={place.zoom} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {data.map(places=>{
      return (
        <Marker
          key={places.id}
          position={places.maps}
          icon={iconLock}
          zIndex={2}

          ><Popup>{places.title}</Popup></Marker>)
        })}



  </MapContainer>
  </div>
    </>
  );
};


export default Mapa;
