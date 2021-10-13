import { URL } from "./base";

const API = import.meta.env.VITE_GEOLOCATION_API as string;
const TOKEN = import.meta.env.VITE_GEOLOCATION_TOKEN as string;

const toJSON = (res: Response) => res.json();

interface GeoResponse {
  ip: string;
  isp: string;
  location: string;
  timezone: string;
  lat: number;
  lng: number;
}
function fromIpify(res: any): GeoResponse {
  return {
    ip: res.ip || "",
    isp: res.isp,
    location: `${res.location.city} ${res.location.country} ${res.location.geonameId}`,
    timezone: `UTC ${res.location.timezone}`,
    lat: res.location.lat,
    lng: res.location.lng,
  };
}

type Props = {
  ipAddress?: string;
  domain?: string;
};
function get(props?: Props) {
  console.log("get", props);

  return fetch(URL({ address: API, search: { apiKey: TOKEN, ...props } }))
    .then(toJSON)
    .then(fromIpify);
}

export const GeoLocation = {
  get,
};
