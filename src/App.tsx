import { APIProvider, InfoWindow, Map } from "@vis.gl/react-google-maps";
import { ControlPanel } from "./ControlPanel";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { places } from "./places";
import { SCREEN_TYPES, ScreenType } from "./utils";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const App = () => {
  const [selected, setSelected] = useState<ScreenType[]>(SCREEN_TYPES);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      const newValue = SCREEN_TYPES.find((s) => s.value === value);
      newValue && setSelected((s) => [...s, newValue]);
    } else {
      setSelected((s) => s.filter((s) => s.value !== value));
    }
  }, []);

  const filteredPlaces = useMemo(
    () =>
      places.filter((place) =>
        selected.some((select) =>
          place.specs.some((p) => p.type === select.value)
        )
      ),
    [selected],
  );

  return (
    <APIProvider apiKey={API_KEY}>
      <Map zoom={6} center={{ lat: 38, lng: 138 }} disableDefaultUI={true}>
        {filteredPlaces.map((place) => (
          <InfoWindow position={place.position}>
            <p>
              <a href={place.url} target="_blank" rel="noopener noreferrer">
                {place.label}
              </a>
            </p>
          </InfoWindow>
        ))}
      </Map>
      <ControlPanel selected={selected} handler={handler} />
    </APIProvider>
  );
};
export default App;
