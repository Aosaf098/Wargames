import mainlogo from "../../../public/assets/mainlogo.png";
import mitb from "../../../public/assets/mitb.png";
import { ModeToggle } from "../ModeToggle";
const Navbar = () => {
  return (
    <>
      <div className="w-3/4 mx-auto flex items-center justify-around p-2">
        <div>
          <ModeToggle />
        </div>
        <div>
          <img className="w-40" src={mainlogo} alt="" />
        </div>
        <div className="border border-solid border-gray-100 rounded-lg p-1 flex items-center gap-3">
          <h6 className="text-lg font-semibold">$ 0</h6>
          <img className="w-12 aspect-square" src={mitb} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
