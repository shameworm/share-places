import { useState, useEffect } from "react";

interface ErrorStatus {
  code: number;
  message: string;
}

export function useErrorPage(statusCode: number) {
  const [errorStatus, setErrorStatus] = useState<ErrorStatus>({
    code: statusCode,
    message: "",
  });

  useEffect(() => {
    let message = "";
    switch (statusCode) {
      case 400:
        message = "Invalid request. Please check your input and try again.";
        break;
      case 401:
        message = "You're unauthorized. Please log in to access this content.";
        break;
      case 403:
        message = "You lack the necessary permissions to access this resource.";
        break;
      case 404:
        message = "Oops! The requested resource could not be found.";
        break;
      case 500:
        message = "Something went wrong on our end. Please try again later.";
        break;
      default:
        message =
          "An unexpected error has occurred. Please contact support if the issue persists.";
    }
    setErrorStatus({ code: statusCode, message });
  }, [statusCode]);

  return errorStatus;
}
