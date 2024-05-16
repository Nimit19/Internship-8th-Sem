"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="error">
      <h1>An Error Occurred!</h1>
      <p>Failed to Fetch meal data. Please try again later.</p>
      <p>Error Message: {error.message}</p>
      {/* <p>Error digest: {error.digest}</p>
      <p>Error name: {error.name}</p>
      <p>Error stack: {error.stack}</p> */}

      <button
        style={{ padding: "15px 25px", fontSize: "20px", borderRadius: "15px" }}
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
