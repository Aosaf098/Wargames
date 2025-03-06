import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/Navbar";

const Main = () => {
  return (
    <>
      <div className="h-dvh font-display overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Main;
