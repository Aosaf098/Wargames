import Hero from "@/components/custom/Banner/Hero";
import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import Newsletter from "@/components/custom/Newsletter/Newsletter";
import Quote from "@/components/custom/Quote";
import Superstars from "@/components/custom/superstars/Superstars";

const Main = () => {
  return (
    <>
      <div className="h-dvh font-display overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Navbar />
        <Hero />
        <Superstars />
        <Quote />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Main;
