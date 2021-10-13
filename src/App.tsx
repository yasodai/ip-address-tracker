import React, { useCallback, useEffect, useState } from "react";
import { Search, DataView, Map } from "./components";
import { GeoLocation } from "./api";
import { isIP, isFQDN } from "validator";
//import { URLSearchParams } from "./utils";
function geoSearch(search?: string) {
  if (search) {
    if (isIP(search)) return GeoLocation.get({ ipAddress: search });
    if (isFQDN(search)) return GeoLocation.get({ domain: search });
  }
  return GeoLocation.get();
}
interface Pair {
  title: string;
  value: string;
}
type Location = [number, number];
function App() {
  const [list, setList] = useState<Pair[]>([]);
  const [center, setCenter] = useState<Location>([0, 0]);

  const search = useCallback((search?) => {
    geoSearch(search).then((res) => {
      setList([
        { title: "IP Address", value: res.ip },
        { title: "Location", value: res.location },
        { title: "Timezone", value: res.timezone },
        { title: "ISP", value: res.isp },
      ]);

      setCenter([res.lat, res.lng]);
    });
  }, []);

  useEffect(() => {
    //search(URLSearchParams(window.location.search).search || "");
    search();
  }, []);

  return (
    <main>
      <header>
        <div>
          <h1>IP Address Tracker</h1>
          <Search onChange={search} />
          <ul className="output">
            {list.map(({ title, value }) => (
              <li key={title}>
                <DataView title={title} value={value} />
              </li>
            ))}
          </ul>
        </div>
      </header>

      <Map center={center} zoom={1} />
    </main>
  );
}

export default App;
