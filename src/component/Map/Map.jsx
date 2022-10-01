import * as React from "react";
import Map, {Marker } from "react-map-gl";
import './map.css'
import { motion } from "framer-motion";
export default function Mapbox(props) {

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
    >
      {props?.data &&
        props?.data?.map((item, index) => {
          // if(!item?.geo) return <></>
          return (
            <Marker
              key={index}
              latitude={item?.geo?.lat || 26.91026351703445}
              longitude={item?.geo?.lon || 75.6340804153019}
            >
              <motion.img
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                src={require("../../assests/mappin1.png")}
                alt=""
                className="tooltip"
              />
            </Marker>
          );
        })}
      {/* <Popup
        
        latitude={"26.91026351703445"}
        longitude={"75.6340804153019"}
      >
        <img
          src={require("../../assests/mapbox-icon.png")}
          alt=""
          className="tooltip"
        />
      </Popup> */}
    </Map>
  );
}
