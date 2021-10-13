import React, { useEffect, useRef } from "react";
import { map, tileLayer, marker, icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "../images/icon-location.svg?url";
import { lerp } from "../utils";

const URL = `https://tile.openstreetmap.org/{z}/{x}/{y}.png`;

const ICON = icon({ iconUrl });

type Props = {
  center?: [number, number];
  zoom?: number;
};
export function Map({ center = [0, 0], zoom = 1 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    const instance = map(element).setView([0, 0], 100);
    tileLayer(URL).addTo(instance);

    instance
      .panTo(center)
      .setZoom(lerp(instance.getMinZoom(), instance.getMaxZoom(), zoom));

    marker(center, { icon: ICON }).addTo(instance);

    return () => void instance.remove();
  }, [center, zoom]);

  return <div ref={ref} className="map" />;
}
