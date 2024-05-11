import { useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/PlaceMap";

import { Place } from "../../models/Place";

const PlaceItem: React.FC<Place> = ({
  id,
  image,
  title,
  description,
  address,
  creatorId,
  coordinates,
}) => {
  const [showMap, setShowMap] = useState(false);

  const handleOpenMap = () => {
    setShowMap(true);
  };

  const handleCloseMap = () => {
    setShowMap(false);
  };

  return (
    <>
      <Modal showMap={showMap} onClose={handleCloseMap}>
        <header>{address}</header>
        <div className="map_wrapper">
          <Map center={coordinates} zoom={16} />
        </div>
        <Button onClick={handleCloseMap}>Close</Button>
      </Modal>
      <li className="my-4 mx-0">
        <Card className={"p-0"}>
          <div className="w-full h-[12.5rem] mr-6 md:h-80">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 text-center bg-[#EEEEEE]">
            <h2 className="mb-2">{title}</h2>
            <h3 className="mb-2">{address}</h3>
            <p className="mb-2">{description}</p>
          </div>
          <div className="p-0 text-center border-t border-solid bg-[#EEEEEE] border-[#ccc]">
            <Button inverse onClick={handleOpenMap}>
              View On Map
            </Button>
            <Button to={`places/${id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
