import { useSelector } from 'react-redux';
import { useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';

import { Place } from '../../models/Place';
import { RootState } from '../../shared/store';

const PlaceItem: React.FC<Place> = ({
  id,
  image,
  title,
  description,
  address,
  // creatorId,
  coordinates,
}) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [showMap, setShowMap] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);

  const handleOpenMap = () => {
    setShowMap(true);
  };

  const handleOpenDelete = () => {
    setDeleteModal(true);
  };

  const handleCloseMap = () => {
    setShowMap(false);
  };

  const handleCloseDelete = () => {
    setDeleteModal(false);
  };

  const handleConfirmDeletion = () => {
    setDeleteModal(true);
    console.log('DELETING...');
  };

  return (
    <>
      <Modal showMap={showMap} onClose={handleCloseMap}>
        <header>{address}</header>
        <div className="modal_wrapper">
          <Map center={coordinates} zoom={16} />
        </div>
        <Button onClick={handleCloseMap}>Close</Button>
      </Modal>

      <Modal showMap={showDeleteModal} onClose={handleCloseDelete}>
        <header> You want to delete this shared place?</header>
        <div className="modal_wrapper text-center max-h-[40rem]">
          <p>
            Deleting a shared place can permanently remove it from your records.
            Make sure you're certain about this decision, as it cannot be
            undone.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Button danger onClick={handleConfirmDeletion}>
            Delete
          </Button>
          <Button inverse onClick={handleCloseDelete}>
            Close
          </Button>
        </div>
      </Modal>

      <li className="my-4 mx-0">
        <Card className={'p-0'}>
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
            {isLoggedIn && (
              <>
                <Button to={`/places/${id}`}>Edit</Button>
                <Button danger onClick={handleOpenDelete}>
                  Delete
                </Button>
              </>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
