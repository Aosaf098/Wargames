import { useContext } from "react";
import mainlogo from "../../../public/assets/mainlogo.png";
import mitb from "../../../public/assets/mitb.png";
import { ModeToggle } from "../ModeToggle";
import { HomeContext } from "@/Provider/HomeProvider";
const Navbar = () => {
  const {freeCredits} = useContext(HomeContext)
  return (
    <>
      <div className="sm:w-3/4 md:w-full mx-auto flex items-center justify-around p-2">
        <div className="hidden lg:block">
          <ModeToggle />
        </div>
        <div>
          <img className="lg:w-40 w-32" src={mainlogo} alt="" />
        </div>
        <div className="border border-solid border-gray-100 rounded-lg p-1 flex items-center gap-3">
          <h6 className="text-lg font-semibold">$ {freeCredits}</h6>
          <img className="w-12 aspect-square" src={mitb} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
