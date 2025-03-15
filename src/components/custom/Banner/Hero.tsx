import { Button } from "../../ui/button";
import wwe from "../../../../public/assets/wwe.webp";
import { useContext } from "react";
import { HomeContext } from "@/Provider/HomeProvider";
import SlidingSuperstars from "./SlidingSuperstars";

const Hero = () => {
  const { superstars, handleFreeCreditClaimButton } = useContext(HomeContext);

  const topFiveSuperstars = superstars.filter(
    (topFive) => topFive.topSix === true
  );
  const nextFiveSuperstars = superstars.filter(
    (NextFive) => NextFive.topSix === false
  );

  return (
    <>
      <div className="w-11/12 mx-auto lg:h-[calc(100dvh-110px)] flex flex-col lg:flex-row items-center justify-center gap-20 sm:gap-2 sm:p-20">
        <div className="lg:w-1/2 h-full p-4 flex flex-col gap-10 justify-center">
          <div className="relative">
            <h1 className="lg:text-6xl text-2xl md:text-5xl font-bold uppercase sm:leading-snug leading-relaxed">
              <span className="bg-red-500 px-4 py-2 rounded-sm">Wargames:</span>{" "}
              Select your superstars <br /> for war
            </h1>
            <img
              className="w-28 absolute bottom-[17rem] -left-6 hidden lg:block"
              src={wwe}
              alt=""
            />
          </div>
          <p className="text-justify sm:w-[85%] text-[12px] text-muted-foreground">
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
          <Button
            onClick={handleFreeCreditClaimButton}
            className="lg:w-1/4 md:w-1/2 p-6"
          >
            Claim Free Credits
          </Button>
        </div>
        <div className="lg:w-1/2 w-full h-full p-6 flex flex-col gap-6 rounded-2xl mb-20 sm:mb-0 space-y-10 sm:space-y-2">
          <SlidingSuperstars
            fiveSuperstars={topFiveSuperstars}
            direction="left"
          />
          <SlidingSuperstars
            fiveSuperstars={nextFiveSuperstars}
            direction="right"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
