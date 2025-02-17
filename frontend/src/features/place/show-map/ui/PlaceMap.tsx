import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { initializeMap } from "../lib";
import { PlaceMapProps } from "../model";
import { useGeographic } from "ol/proj";

export function PlaceMap(
  { center, zoom }: PlaceMapProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const mapRef = useRef<HTMLDivElement>(null);
  useGeographic();
  useEffect(() => {
    if (!mapRef.current) return;
    const map = initializeMap(mapRef.current, center, zoom);
    return () => map.setTarget(undefined);
  }, [center, zoom]);

  useImperativeHandle(ref, () => mapRef.current!);

  return <div ref={mapRef} className="h-full" />;
}

export default forwardRef(PlaceMap);
