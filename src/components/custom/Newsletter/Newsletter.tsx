import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import slide1 from "../../../../public/assets/slide1.jpg";
import slide2 from "../../../../public/assets/slide2.jpg";
import slide3 from "../../../../public/assets/slide3.jpg";
import slide4 from "../../../../public/assets/slide4.jpg";
import slide5 from "../../../../public/assets/slide5.jpg";
import { useEffect, useState } from "react";

const Newsletter = () => {
  const slideImages = [slide1, slide2, slide3, slide4, slide5];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [slideImages.length]);
  return (
    <>
      <div className="lg:w-3/4 sm:mt-20 mt-48 mx-auto flex flex-col sm:flex-row items-center justify-evenly sm:gap-6 gap-32 p-10">
        <div className="sm:w-1/2 w-11/12 flex items-center justify-center relative">
          {slideImages.map((image, idx) => (
            <img
              className={`w-96 absolute aspect-square object-cover rounded-xl transition-opacity duration-500 ease-in ${currentImageIndex === idx ? "opacity-100" : "opacity-0"}`}
              key={idx}
              src={image}
            />
          ))}
        </div>
        <div className="sm:w-1/2 flex flex-col gap-12 px-4 py-20">
          <h1 className="text-4xl font-black">Subscribe to Our Newsletter</h1>
          <p className="text-sm text-muted-foreground">
            Get all the exciting news and stories from our weekly newsletters
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center sm:gap-2 gap-6">
          <Input className="lg:w-1/2 p-6" type="email" placeholder="Email" />
          <Button className="lg:w-1/4 p-6" variant="destructive">
            Subscribe
          </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
