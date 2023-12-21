import { AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import { FC, useState } from "react";
import { TheaterPlace } from "./places";
import { formatTheaterSpecs } from "./utils";

export const CustomMarker: FC<TheaterPlace> = (props) => {
  const [show, setShow] = useState(false);

  const toggleHandler = () => {
    setShow((show) => !show);
  };

  const closeHandler = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <InfoWindow position={props.position} onCloseClick={closeHandler}>
          <p>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              {props.label}
            </a>
          </p>
          <p>{formatTheaterSpecs(props.specs)}</p>
        </InfoWindow>
      )}
      <AdvancedMarker
        position={props.position}
        key={props.url}
        title={props.label}
        onClick={toggleHandler}
      />
    </>
  );
};
