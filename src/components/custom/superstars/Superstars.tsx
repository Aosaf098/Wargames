import { Button } from "@/components/ui/button";
import { useContext } from "react";
import Superstar from "./Superstar";
import { HomeContext } from "@/Provider/HomeProvider";

const Superstars = () => {
  const { superstars } = useContext(HomeContext);

  console.log("Superstars:", superstars);
  return (
    <>
      <div className="w-3/4 mx-auto">
        <div className="flex items-center justify-center">
          <span className="text-4xl font-bold bg-red-500 px-8 py-2 rounded-sm">
            Superstars
          </span>
        </div>
        <div className="flex items-center justify-end gap-6 my-8">
          <Button className="p-6">Available</Button>
          <Button className="p-6">Selected</Button>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 justify-items-center">
          {superstars.map((superstar) => (
            <Superstar key={superstar?.id} superstar={superstar} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Superstars;
