import { createContext, ReactNode, useEffect, useState } from "react";

interface HomeContextValue {
  superstars: SuperstarsInterface[];
  freeCredits: number;
  handleFreeCreditClaimButton: () => void
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
  topSix: boolean
}

export const HomeContext = createContext<HomeContextValue>({
  superstars: [],
  freeCredits: 0,
  handleFreeCreditClaimButton: () => {}
});
const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [superstars, setSuperstars] = useState<SuperstarsInterface[]>([]);
  const [freeCredits, setFreeCredits] = useState<number>(1000)

  const handleFreeCreditClaimButton = () => {
    freeCredits < 2000 ? setFreeCredits(freeCredits + 100) : alert(`You can't add more than that`)
  }

  useEffect(() => {
    const getSuperstars = async () => {
      const response = await fetch("/superstars.json");
      const result = await response.json();
      setSuperstars(result);
    };
    getSuperstars();
  }, []);
  const homeInfo = { superstars, freeCredits, handleFreeCreditClaimButton };
  return (
    <>
      <HomeContext.Provider value={homeInfo}>{children}</HomeContext.Provider>
    </>
  );
};

export default HomeProvider;
