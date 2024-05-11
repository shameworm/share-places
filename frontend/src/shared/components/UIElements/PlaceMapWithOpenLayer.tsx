//* This is simply playthrougth with openlayers API

// import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

// import Map from "ol/Map";
// import View from "ol/View";
// import TileLayer from "ol/layer/Tile";
// import OSM from "ol/source/OSM";
// import Feature from "ol/Feature";
// import Point from "ol/geom/Point";
// import VectorLayer from "ol/layer/Vector";
// import VectorSource from "ol/source/Vector";
// import { fromLonLat } from "ol/proj";
// import { Icon, Style } from "ol/style";
// import { useGeographic } from "ol/proj";

// import MarkerImg from "../../../assets/marker.svg";



// interface PlaceMapProps {
//   center: { lat: number; lng: number };
//   zoom: number;
// }

// const PlaceMap2 = forwardRef<HTMLDivElement, PlaceMapProps>(
//   ({ center, zoom }, ref) => {
//     const mapRef = useRef<HTMLDivElement>(null);

//     useGeographic();

//     useEffect(() => {
//       if (!mapRef.current) return;

//       const map = new Map({
//         target: mapRef.current,
//         layers: [
//           new TileLayer({
//             source: new OSM(),
//           }),
//         ],
//         view: new View({
//           center: [center.lng, center.lat],
//           zoom: 2,
//         }),
//       });

//       const marker = new Feature({
//         geometry: new Point(fromLonLat([center.lng, center.lat])),
//       });

//       const markerStyle = new Style({
//         image: new Icon({
//           src: MarkerImg,
//           anchor: [0.5, 32],
//           anchorXUnits: "fraction",
//           anchorYUnits: "pixels",
//         }),
//       });

//       marker.setStyle(markerStyle);

//       const markerLayer = new VectorLayer({
//         source: new VectorSource({
//           features: [marker],
//         }),
//       });

//       map.addLayer(markerLayer);

//       return () => {
//         map.setTarget(undefined);
//       };
//     }, [center, zoom]);

//     useImperativeHandle(ref, () => mapRef.current!);

//     return <div ref={mapRef} id="map" />;
//   }
// );

// export default PlaceMap2;
