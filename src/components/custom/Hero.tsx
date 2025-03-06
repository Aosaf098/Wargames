import { Button } from "../ui/button";
import Marquee from "react-fast-marquee";
import cody from "../../../public/assets/cody.png"
import cena from "../../../public/assets/cena.png"
import reigns from "../../../public/assets/reigns.png"
import punk from "../../../public/assets/punk.png"
import randy from "../../../public/assets/randy.png"
import jey from "../../../public/assets/jey.png"
import styles from "../../../public/assets/styles.png"
import seth from "../../../public/assets/seth.png"
import mcintyre from "../../../public/assets/mcintyre.png"
import kevin from "../../../public/assets/kevin.png"

const Hero = () => {
  return (
    <>
      <div className="w-11/12 mx-auto h-[calc(100dvh-110px)] flex items-center justify-center gap-2 p-20">
        <div className="w-1/2 h-full p-4 flex flex-col gap-10 justify-center">
          <h1 className="text-6xl font-bold uppercase">
            WWE Wargames: Select your superstars for war
          </h1>
          <p className="text-justify w-11/12">
            WWE WarGames is the ultimate battleground where superstars collide
            in a chaotic, steel-caged spectacle. For this epic showdown, I’d
            assemble a powerhouse team: Roman Reigns, the tribal chief, leading
            with unrelenting dominance; Seth Rollins, the visionary architect,
            bringing strategy and flair; Becky Lynch, the relentless
            trailblazer, adding fiery intensity; and Bron Breakker, the
            explosive rookie, unleashing raw power. Together, they’d face any
            faction daring to step into the unforgiving double-ring cage,
            proving their supremacy in a war of attrition.
          </p>
          <Button className="w-1/4 p-6">Learn More</Button>
        </div>
        <div className="w-1/2 h-full p-6 flex flex-col gap-6 rounded-2xl">
          <div className="w-full h-1/2">
            <Marquee>
              <div className="w-72 aspect-square rounded-xl mx-8">
                <img className="w-full h-full object-cover rounded-2xl" src={cody} alt="" />
              </div>
              <div className="w-72 aspect-square rounded-xl mx-8">
                <img className="w-full h-full object-cover rounded-2xl" src={cena} alt="" />
              </div>
              <div className="w-72 aspect-square rounded-xl mx-8">
                <img className="w-full h-full object-cover rounded-2xl" src={reigns} alt="" />
              </div>
              <div className="w-72 aspect-square rounded-xl mx-8">
                <img className="w-full h-full object-cover rounded-2xl" src={punk} alt="" />
              </div>
              <div className="w-72 aspect-square rounded-xl mx-8">
                <img className="w-full h-full object-cover rounded-2xl" src={randy} alt="" />
              </div>
            </Marquee>
          </div>
          <div className="w-full h-1/2">
          <Marquee direction="right">
              <div className="w-72 aspect-square rounded-xl mx-8">
                <img className="w-full h-full object-cover rounded-2xl" src={jey} alt="" />
              </div>
              <div className="w-72 aspect-square rounded-xl mx-8">
                <img className="w-full h-full object-cover rounded-2xl" src={styles} alt="" />
              </div>
              <div className="w-72 aspect-square rounded-xl mx-8">
                <img className="w-full h-full object-cover rounded-2xl" src={seth} alt="" />
              </div>
              <div className="w-72 aspect-square rounded-xl mx-8">
                <img className="w-full h-full object-cover rounded-2xl" src={mcintyre} alt="" />
              </div>
              <div className="w-72 aspect-square rounded-xl mx-8">
                <img className="w-full h-full object-cover rounded-2xl" src={kevin} alt="" />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
