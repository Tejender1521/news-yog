import * as React from "react";
import Map from "react-map-gl";

export default function Mapbox() {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoidGVqZW5kZXIiLCJhIjoiY2w4bzhudnMwMDZlbDNvcWx6aWhjdmN1eiJ9.vclIgy8FL1JN4jxIFl5msQ"
      initialViewState={{
        longitude: 75.6340804153019,
        latitude: 26.91026351703445,
        zoom: 10,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onClick={(e) => {
        console.log(e);
      }}
    />
  );
}
