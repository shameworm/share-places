/* eslint-disable @typescript-eslint/no-unused-vars */

import Button from "../FormElements/Button";
import Modal from "./Modal";

type ErrorModalProps = {
  onClear: () => void;
  error: string;
};

const ErrorModal = (props) => {
  return (
    <Modal
      onClose={onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>Okay</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
