import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { ControlPanel } from "./ControlPanel";
import { useState } from "react";
import { places } from "./places";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const App = () => {
  const [zoom, setZoom] = useState(6);
  const [center, setCenter] = useState({ lat: 38, lng: 138 });

  return (
    <APIProvider apiKey={API_KEY}>
      <Map zoom={zoom} center={center} disableDefaultUI={true}>
        {places.map((place) => (
          <Marker
            label={place.label}
            position={place.position}
            onClick={() => {
              setZoom(10);
              setCenter(place.position);
            }}
          />
        ))}
      </Map>
      <ControlPanel />
    </APIProvider>
  );
};
export default App;
