import React from "react";
import "./Map.css";
import {MapContainer as LeafletMap, TileLayer} from "react-leaflet"; //we renamed it as LeafletMap as ours func is called Map


function MapContainer({center, zoom }) {
  return( 
    <div className="map">
      <h1>I'm not a map</h1>
      
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />{/*here we also pull in the imported TileLayer */}
      </LeafletMap>{/*here we use the imported LeafletMap */}
    </div>
  );
}

export default MapContainer;
