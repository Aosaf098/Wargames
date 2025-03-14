import { createContext, ReactNode, useEffect, useState } from "react";

interface HomeContextValue {
  superstars: SuperstarsInterface[];
  freeCredits: number;
  handleFreeCreditClaimButton: () => void;
  selectedRoster: SuperstarsInterface[];
  handleSelectedRoster: (param: SuperstarsInterface) => void;
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

  const handleSelectedRoster = (superstar: SuperstarsInterface) => {
    
    selectedRoster.length < 5
      ? setSelectedRoster((prevRoster) => [...prevRoster, superstar])
      : alert("Roster is Full");
    alert('Successfully Added')
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
    handleSelectedRoster,
  };
  return (
    <>
      <HomeContext.Provider value={homeInfo}>{children}</HomeContext.Provider>
    </>
  );
};

export default HomeProvider;
