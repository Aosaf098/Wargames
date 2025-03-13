import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface SuperstarsInterface {
  id: number;
  name: string;
  rating: number;
  finisher: string;
  weight: string;
  nickname: string;
  price: number;
  image: string;
}

interface SuperstarProps {
  superstar: SuperstarsInterface;
}

const Superstar = ({ superstar }: SuperstarProps) => {
  const { name, image, rating, finisher, weight, nickname, price } = superstar;
  return (
    <>
      <Card className="w-3/4">
        <CardHeader>
          <div>
            <img
              className="w-72 mx-auto rounded-lg object-cover"
              src={image}
              alt=""
            />
          </div>
        </CardHeader>
        <CardDescription>
          <h3 className="text-lg lg:px-10 font-semibold">{name}</h3>
          <p className="text-sm lg:px-10 font-medium italic">{nickname}</p>
        </CardDescription>
        <CardContent>
          <div className="flex gap-2 lg:px-4 w-72 text-gray-6">
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
            <Button className="p-6 cursor-pointer" variant='outline'>Select</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Superstar;
