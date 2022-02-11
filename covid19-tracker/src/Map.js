import React from "react";
import "./Map.css";
import {MapContainer as LeafletMap, TileLayer} from "react-leaflet"; //we renamed it as LeafletMap as ours func is called Map
import { showDataOnMap } from "./util"; //this is to show the circles using the circle function in the utilities file


function MapContainer({countries, casesType, center, zoom }) {
  return( 
    <div className="map">
      {/*<h1>I'm not a map</h1>*/}
      {/*Console.log("Test in console")*/}
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />{/*here we also pull in the imported TileLayer */}

        {/*Here we have a func to loop through and draw circles on the screen*/}
        {showDataOnMap(countries, casesType)}
      </LeafletMap>{/*here we use the imported LeafletMap */}
    </div>
  );
}

export default MapContainer;
