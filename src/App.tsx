import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { ControlPanel } from "./ControlPanel";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { TheaterPlace } from "./places";
import { SCREEN_TYPES, ScreenType } from "./utils";
import { CustomMarker } from "./CustomMarker";
import { Author } from "./Author";

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

  const [places, setPlaces] = useState<TheaterPlace[] | null>(null);

  // lazy load place data
  useEffect(() => {
    if (places !== null) return;

    import("./places").then((res) => {
      setPlaces(res.default);
    });
  }, [places]);

  const filteredPlaces = useMemo(
    () =>
      places?.filter((place) =>
        selected.some((select) =>
          place.specs.some((p) => p.type === select.value),
        ),
      ),
    [places, selected],
  );

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        zoom={6}
        center={{ lat: 38, lng: 138 }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={"screen-map"}
      >
        {filteredPlaces?.map((place) => (
          <CustomMarker {...place} key={place.url} />
        ))}
      </Map>
      <Author />
      <ControlPanel selected={selected} handler={handler} />
    </APIProvider>
  );
};

export default App;
