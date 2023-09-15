"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  /**
   * Hooks.
   */

  return (
    <div className="">
      <button onClick={reset}>Tray Again</button>
    </div>
  );
}
