import { useEffect, useRef } from 'react';

interface PlaceMapProps {
  center: { lat: number; lng: number };
  zoom: number;
}

const Map: React.FC<PlaceMapProps> = ({ center, zoom }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function initMap(): void {
      const Map = google.maps.Map;
      const map = new Map(mapRef.current as HTMLDivElement, {
        center,
        zoom,
      });
      new google.maps.Marker({
        position: center,
        map,
      });
    }

    google.maps.importLibrary('maps').then(() => {
      initMap();
    });
  }, [center, zoom]);

  return <div ref={mapRef} id="map"></div>;
};

export default Map;
