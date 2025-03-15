import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { HomeContext } from "@/Provider/HomeProvider";
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
  superstar: SuperstarsInterface;
}

const Superstar = ({ superstar }: SuperstarProps) => {
  const { handleSelectedRoster } = useContext(HomeContext);
  
  const { name, image, rating, finisher, weight, nickname, price, icon } =
    superstar;
  return (
    <>
      <Card className="w-4/5">
        <CardHeader>
          <div>
            <img
              className="w-[20rem] mx-auto rounded-lg object-cover hover:scale-105 hover:duration-100 hover:ease-in"
              src={image}
              alt=""
            />
          </div>
        </CardHeader>
        <CardDescription className="flex items-center justify-between lg:px-10">
          <div>
            <h3 className="text-lg font-black">{name}</h3>
            <p className="text-sm font-medium italic">{nickname}</p>
          </div>
          <div>
            <img
              className="w-14 aspect-square rounded-full object-cover"
              src={icon}
              alt=""
            />
          </div>
        </CardDescription>
        <CardContent className="*:font-bold">
          <div className="flex gap-2 lg:px-4 w-96 text-gray-6">
            <span className="w-16">Finisher</span>
            <span>:</span>
            <span>{finisher}</span>
          </div>
          <div className="flex gap-2 lg:px-4 w-44">
            <span className="w-16">Weight</span>
            <span>:</span>
            <span>{weight}</span>
          </div>

          <div className="flex gap-2 lg:px-4 w-44">
            <span className="w-16">Price</span>
            <span>:</span>
            <span>{price}</span>
          </div>
          <div className="flex gap-2 lg:px-4 w-44">
            <span className="w-16">Rating</span>
            <span>:</span>
            <span>{rating}</span>
          </div>
        </CardContent>
        <CardFooter className="mx-auto my-2">
          <Button
            onClick={() => handleSelectedRoster(superstar, price)}
            className="p-6 cursor-pointer"
            variant="destructive"
          >
            Select
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Superstar;
