import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/Navbar";
import Superstars from "@/components/custom/superstars/superstars";

const Main = () => {
  return (
    <>
      <div className="h-dvh font-display overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Navbar />
        <Hero />
        <Superstars />
      </div>
    </>
  );
};

export default Main;
