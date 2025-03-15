import quoteBg from "../../../public/assets/quote.jpg";
const Quote = () => {
  return (
    <>
      <div className="lg:w-3/4 mx-4 lg:mx-auto h-[350px] my-20 relative flex items-center justify-center">
        <img
          className="absolute opacity-30 w-full h-full object-cover rounded-xl"
          src={quoteBg}
          alt=""
        />
        <p className="lg:text-3xl text-xl text-white bg-black/10 font-black text-center drop-shadow-lg leading-snug">
          “Hard work pays off, Dreams come true, Bad times don't last, <br /> Bad Guys
          do...”
        </p>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
    </>
  );
};

export default Quote;
