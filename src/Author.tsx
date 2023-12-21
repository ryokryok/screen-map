import { ControlPosition, MapControl } from "@vis.gl/react-google-maps";
import { FC } from "react";

export const Author: FC = () => (
  <MapControl position={ControlPosition.BOTTOM_LEFT}>
    <p>
      Author: <a href="https://mrozin.me/">@Mr_ozin</a>
    </p>
  </MapControl>
);
