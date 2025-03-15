import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import Superstar from "./Superstar";
import { HomeContext } from "@/Provider/HomeProvider";
import SelectedRoster from "../Selected/SelectedRoster";
import wwe from "../../../../public/assets/wwe.webp";

const Superstars = () => {
  const { superstars, selectedRoster } = useContext(HomeContext);

  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [displayCards, setDisplayCards] = useState<number>(6);

  const handleSeeMore = () => {
    displayCards === 6
      ? setDisplayCards(superstars.length)
      : setDisplayCards(6);
  };

  const handleisAvailable = () => {
    setIsAvailable(true);
    setIsSelected(false);
  };

  const handleisSelected = () => {
    setIsSelected(true);
    setIsAvailable(false);
  };

  return (
    <>
      <div className="w-3/4 mx-auto">
        <div className="flex items-center justify-center">
          <span className="text-5xl font-bold bg-red-500 px-8 py-2 rounded-sm">
            Superstars
          </span>
        </div>
        <div className="flex items-center justify-between gap-6 my-8 px-12">
          <div>
            <h1 className="text-4xl font-black italic text-muted-foreground">
              {isAvailable ? "Roster" : "Selected"}
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <Button
              variant={isAvailable ? "destructive" : "default"}
              onClick={handleisAvailable}
              className="p-6"
            >
              Available
            </Button>
            <Button
              variant={isSelected ? "destructive" : "default"}
              onClick={handleisSelected}
              className="p-6"
            >
              Selected
            </Button>
          </div>
        </div>
        {isAvailable && (
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 justify-items-center">
            {superstars?.slice(0, displayCards).map((superstar) => (
              <Superstar key={superstar?.id} superstar={superstar} />
            ))}
          </div>
        )}
        {superstars.length > 6 && (
          <div className="flex items-center justify-center mt-20">
            <Button
              onClick={handleSeeMore}
              className="p-6 w-1/5"
              variant="destructive"
            >
              {displayCards === 6 ? 'Show More' : 'Show Less'}
            </Button>
          </div>
        )}
        {isSelected &&
          (selectedRoster.length > 0 ? (
            <SelectedRoster />
          ) : (
            <div className="w-11/12 mx-auto mt-24 flex items-center flex-col justify-center gap-8 p-32">
              <img className="w-48" src={wwe} alt="" />
              <h1 className="text-7xl text-center font-black text-muted-foreground">
                You Haven't Selected Anyone Yet
              </h1>
            </div>
          ))}
      </div>
    </>
  );
};

export default Superstars;
