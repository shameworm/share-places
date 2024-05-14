import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import MainNavigation from "../components/Navigation/MainNavigation";

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
      <MainNavigation />
      <main className="mt-20 flex items-center justify-center">
        <span className=" bg-[#eeeeee] rounded-lg p-2 text-3xl">
          {errorMessage}
        </span>
      </main>
    </>
  );
};

export default ErrorPage;
