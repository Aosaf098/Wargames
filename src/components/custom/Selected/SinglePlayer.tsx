import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

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
  const { name, image, nickname } = singlePlayer;
  return (
    <>
      <div className="h-[200px] flex items-center justify-between gap-4 px-10 bg-accent rounded-xl">
        <div className="flex items-center gap-4">
          <img className="w-32 rounded-lg" src={image} alt="" />
          <div className="space-y-4">
            <h1 className="text-lg font-bold -mt-14">{name}</h1>
            <h1 className="italic">{nickname}</h1>
          </div>
        </div>
        <div>
            <Button variant='destructive'><Trash /></Button>
        </div>
      </div>
    </>
  );
};

export default SinglePlayer;
