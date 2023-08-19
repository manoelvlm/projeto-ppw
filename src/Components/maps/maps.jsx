import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import citiesData from './cities.json';
import { useNavigate } from "react-router-dom";

function Maps() {
  const position = [-15.7942, -47.8825];
  const navigate = useNavigate();
  const backHome = () => {
    navigate('/');
  }
  const padding = {
    marginRight: '10px',
    padding:'10px'
};
  console.log(citiesData);
  return (
    <div>
      <Button className="btn-warning" onClick={backHome} style={padding}>Voltar</Button>
      <Card title="Mapa de Acessos">
        <href></href>
        <MapContainer center={position} zoom={4} style={{ height: '100vh', width: '100%' }} scrollWheelZoom={true}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {citiesData.map(city => (
            <Marker key={city.city} position={[parseFloat(city.lat), parseFloat(city.lon)]}>
              {<Popup>
                <strong>{city.city}, {city.country}</strong><br />
                Acessos: {city.access}
              </Popup>}
            </Marker>
          ))}
        </MapContainer>
      </Card>
      <Card>

      </Card>
    </div>


  );
}

export default Maps;