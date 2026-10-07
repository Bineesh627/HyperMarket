import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { stores } from "@/lib/gateData";

export default function StoresMap() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-black/10 shadow-xl">
      <MapContainer
        center={[25.26, 55.33]}
        zoom={9}
        scrollWheelZoom={false}
        style={{ height: "460px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {stores.map((s) => (
          <Marker key={s.slug} position={s.coords}>
            <Popup>
              <strong>{s.name}</strong>
              <br />
              {s.hours}
              <br />
              <Link to={`/stores/${s.slug}`}>View store page</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}