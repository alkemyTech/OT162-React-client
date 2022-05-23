import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const MapRegister = (props) => {
  const [positionCoord, setPositionCoord] = useState(
    navigator.geolocation.getCurrentPosition((position) => {
      return {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    })
  );

  const componentDidMount = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPositionCoord({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  const handleOnClick = (e) => {
    setPositionCoord({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
    props.setInitialValues({
      ...props.initialValues,
      direction: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    });
  };

  return (
    <>
      {positionCoord && (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={positionCoord}
          onClick={handleOnClick}
        >
          <Marker position={positionCoord} />
        </GoogleMap>
      )}
    </>
  );
};

export default withScriptjs(withGoogleMap(MapRegister));
