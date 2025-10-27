"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <h2 className="text-2xl font-semibold text-red-500 mb-3">
        Something went wrong!
      </h2>
      <p className="text-muted-foreground mb-6">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>

      <Button
        onClick={() => reset()}
        variant="default"
        className="px-6 py-2"
      >
        Try Again
      </Button>
    </div>
  );
}
