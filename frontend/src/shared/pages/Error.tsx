import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <>
      <p>{errorMessage}</p>
    </>
  );
};

export default ErrorPage;
