import Hero from "@/components/custom/Banner/Hero";
import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import Superstars from "@/components/custom/superstars/Superstars";

const Main = () => {
  return (
    <>
      <div className="h-dvh font-display overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Navbar />
        <Hero />
        <Superstars />
        <Footer />
      </div>
    </>
  );
};

export default Main;
