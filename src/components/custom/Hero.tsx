import { Button } from "../ui/button";
import Marquee from "react-fast-marquee";
import wwe from "../../../public/assets/wwe.webp";
import { useContext } from "react";
import { HomeContext } from "@/Provider/HomeProvider";

const Hero = () => {
    
  const {superstars} = useContext(HomeContext)

  const topFiveSuperstars = superstars.filter((topFive) => topFive.topSix === true)
  const nextFiveSuperstars = superstars.filter((NextFive) => NextFive.topSix === false)

  return (
    <>
      <div className="w-11/12 mx-auto h-[calc(100dvh-110px)] flex items-center justify-center gap-2 p-20">
        <div className="w-1/2 h-full p-4 flex flex-col gap-10 justify-center">
          <div className="relative">
            <h1 className="text-6xl font-bold uppercase leading-snug">
              <span className="bg-red-500 px-4 py-2 rounded-sm">Wargames:</span>{" "}
              Select your superstars <br /> for war
            </h1>
            <img
              className="w-28 absolute bottom-[17rem] -left-6"
              src={wwe}
              alt=""
            />
          </div>
          <p className="text-justify w-[85%] text-sm">
            WWE WarGames is the ultimate battleground where superstars collide
            in a chaotic, steel-caged spectacle. For this epic showdown, you can
            assemble a powerhouse team. Here, two teams clash inside a brutal,
            roofless steel cage spanning two rings, entering at timed intervals
            until all warriors are unleashed—only then can victory be claimed by
            pinfall or submission. This chaotic masterpiece magnifies teamwork
            and carnage, delivering an electrifying spectacle of unrelenting
            action. It’s a glorious testament to resilience, where legends are
            forged in a relentless storm of combat!.
          </p>
          <Button className="w-1/4 p-6">Learn More</Button>
        </div>
        <div className="w-1/2 h-full p-6 flex flex-col gap-6 rounded-2xl">
          <div className="w-full h-1/2">
            <Marquee pauseOnHover={true}>
              {topFiveSuperstars.map((superstar, idx) => (
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
          <div className="w-full h-1/2">
          <Marquee direction="right" pauseOnHover={true}>
              {nextFiveSuperstars.map((superstar, idx) => (
                <div className="w-72 aspect-square rounded-xl mx-8">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    key={idx}
                    src={superstar.image}
                    alt="Next Five Superstars Marquee"
                  />
                </div>
              ))}
            
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
