/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from "../FormElements/Button";
import Modal from "./Modal";

type ErrorModalProps = {
  onClear: () => void;
  error: string;
};

const ErrorModal = ({ onClear, error }: ErrorModalProps) => {
  return (
    <Modal onClose={onClear} show={!!error}>
      <h1>An Error Ocurred!</h1>
      <p>{error}</p>
      <Button onClick={onClear}>Okay</Button>
    </Modal>
  );
};

export default ErrorModal;
