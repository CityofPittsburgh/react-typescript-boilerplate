import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const mapStyle = require("./style.json");
const key = process.env.REACT_APP_GOOGLE_API;

const Map = () => {
  const MapComponent = compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=" +
        key +
        "&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `100%` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 40.437470539681442, lng: -79.987124601795273 }}
      defaultOptions={{
        styles: mapStyle as any,
        streetViewControl: false,
        fullscreenControl: false,
        scaleControl: false,
        mapTypeControl: false
      }}
    />
  ));

  return (
      <div className="full-map">
        <MapComponent />
      </div>
  );
};

export default Map;
