import { Spinner } from "@/components/ui/spinner";

const loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Spinner className="size-6" />
    </div>
  );
};
export default loading;
