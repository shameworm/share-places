import { useRef } from "react";

interface PlaceMapProps {
  center: { lat: number; lng: number };
  zoom: number;
}
const Map: React.FC<PlaceMapProps> = ({ center, zoom }) => {
  const mapRef = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);
  return <div id="map" />;
};

export default Map;
