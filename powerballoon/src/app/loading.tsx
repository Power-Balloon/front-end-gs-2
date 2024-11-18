import Spinner from "@/components/Spinner/Spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-dark-blue">
      <Spinner/>
    </div>
  );
}