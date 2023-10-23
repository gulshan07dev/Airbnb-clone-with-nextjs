"use client";

import EmptyState from "@/app/components/EmptyState";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, reset }) => {
  return (
    <EmptyState
      title="Uh Oh"
      subtitle={"Something went wrong"}
      showReset
      resetLable="Try again"
      resetHandler={reset}
    />
  );
};

export default ErrorPage;
