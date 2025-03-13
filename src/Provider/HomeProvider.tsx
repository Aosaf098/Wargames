import { createContext, ReactNode, useEffect, useState } from "react";

interface HomeContextValue {
  superstars: SuperstarsInterface[];
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
});
const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [superstars, setSuperstars] = useState<SuperstarsInterface[]>([]);

  useEffect(() => {
    const getSuperstars = async () => {
      const response = await fetch("/superstars.json");
      const result = await response.json();
      setSuperstars(result);
    };
    getSuperstars();
  }, []);
  const homeInfo = { superstars };
  return (
    <>
      <HomeContext.Provider value={homeInfo}>{children}</HomeContext.Provider>
    </>
  );
};

export default HomeProvider;
