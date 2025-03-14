import { HomeContext } from "@/Provider/HomeProvider";
import { useContext } from "react";
import SinglePlayer from "./SinglePlayer";


const SelectedRoster = () => {
  const { selectedRoster } = useContext(HomeContext);
  return (
    <>
      <div className="w-11/12 mx-auto mt-24 space-y-4">
        {
            selectedRoster.map((singlePlayer) => <SinglePlayer key={singlePlayer.id} singlePlayer={singlePlayer} />)
        }
      </div>
    </>
  );
};

export default SelectedRoster;
