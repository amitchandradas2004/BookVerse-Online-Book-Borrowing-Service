import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center gap-2">
      <Spinner size="xl" />
    </div>
  );
};

export default loading;
