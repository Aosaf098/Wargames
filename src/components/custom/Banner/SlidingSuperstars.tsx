import Marquee from "react-fast-marquee";
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
}

interface SlidingSuperstarsProps {
  fiveSuperstars: SuperstarsInterface[];
  direction: any
}
const SlidingSuperstars = ({ fiveSuperstars, direction }: SlidingSuperstarsProps) => {
  return (
    <>
      <div className="w-full h-1/2">
        <Marquee pauseOnHover={true} direction={direction}>
          {fiveSuperstars.map((superstar, idx) => (
            <div className="w-72 aspect-square rounded-xl mx-8">
              <img
                className="w-full h-full object-cover rounded-2xl"
                key={idx}
                src={superstar.image}
                alt="Top Five Superstars Marquee"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default SlidingSuperstars;
