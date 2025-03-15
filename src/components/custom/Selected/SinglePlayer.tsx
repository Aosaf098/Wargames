import { Button } from "@/components/ui/button";
import { HomeContext } from "@/Provider/HomeProvider";
import { Trash } from "lucide-react";
import { useContext } from "react";

interface SuperstarsInterface {
  id: number;
  name: string;
  rating: number;
  finisher: string;
  weight: string;
  nickname: string;
  price: number;
  image: string;
  topSix: boolean;
  icon: string;
}
interface SuperstarProps {
  singlePlayer: SuperstarsInterface;
}
const SinglePlayer = ({ singlePlayer }: SuperstarProps) => {
  const { id, name, image, nickname } = singlePlayer;

  const {selectedRoster, setSelectedRoster} = useContext(HomeContext)

  const handleDelete = (id: number) => {
    const remainingRoster = selectedRoster.filter((deleteItem) => deleteItem.id !== id)
    setSelectedRoster(remainingRoster)
  }
  return (
    <>
      <div className="h-[200px] flex items-center justify-between gap-4 px-10 bg-accent rounded-xl">
        <div className="flex items-center gap-4">
          <img className="lg:w-32 w-28 rounded-lg" src={image} alt="" />
          <div className="space-y-4">
            <h1 className="text-lg font-bold lg:-mt-14">{name}</h1>
            <h1 className="italic">{nickname}</h1>
          </div>
        </div>
        <div>
            <Button onClick={() => handleDelete(id)} variant='destructive'><Trash /></Button>
        </div>
      </div>
    </>
  );
};

export default SinglePlayer;
