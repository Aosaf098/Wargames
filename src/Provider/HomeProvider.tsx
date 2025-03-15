import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

interface HomeContextValue {
  superstars: SuperstarsInterface[];
  freeCredits: number;
  handleFreeCreditClaimButton: () => void;
  selectedRoster: SuperstarsInterface[];
  setSelectedRoster: Dispatch<SetStateAction<SuperstarsInterface[]>>;
  handleSelectedRoster: (param: SuperstarsInterface, param2: number) => void;
}

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

export const HomeContext = createContext<HomeContextValue>({
  superstars: [],
  freeCredits: 0,
  handleFreeCreditClaimButton: () => {},
  selectedRoster: [],
  setSelectedRoster: () => {},
  handleSelectedRoster: () => {},
});
const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [superstars, setSuperstars] = useState<SuperstarsInterface[]>([]);
  const [freeCredits, setFreeCredits] = useState<number>(1000);
  const [selectedRoster, setSelectedRoster] = useState<SuperstarsInterface[]>(
    []
  );

  const handleFreeCreditClaimButton = () => {
    freeCredits < 2000
      ? setFreeCredits(freeCredits + 100)
      : alert(`You can't add more than that`);
  };

  const handleSelectedRoster = (
    superstar: SuperstarsInterface,
    price: number
  ) => {
    if (selectedRoster.length < 5) {
      if (freeCredits > price) {
        if (!(selectedRoster.some((single) => single.name === superstar.name))) {
          setSelectedRoster((prevRoster) => [...prevRoster, superstar]);
          setFreeCredits(freeCredits - price);
          alert("Successfully Added");
        } else {
          alert("Already Selected");
        }
      } else {
        alert("Claim Some Free Credits");
      }
    } else {
      alert("Roster Full");
    }
  };
  console.log("Selected Roster List:", selectedRoster);
  useEffect(() => {
    const getSuperstars = async () => {
      const response = await fetch("/superstars.json");
      const result = await response.json();
      setSuperstars(result);
    };
    getSuperstars();
  }, []);
  const homeInfo = {
    superstars,
    freeCredits,
    handleFreeCreditClaimButton,
    selectedRoster,
    setSelectedRoster,
    handleSelectedRoster,
  };
  return (
    <>
      <HomeContext.Provider value={homeInfo}>{children}</HomeContext.Provider>
    </>
  );
};

export default HomeProvider;
