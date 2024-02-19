import TryConvert from "../components/TryConvert";
const Hero = () => {
  return (
    <div className="hero w-full min-h-[60vh] bg-base-200">
      <div className="hero-content w-full text-center flex flex-col">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-primary">Hello there</h1>
          <p className="py-6">
            persian-solar-date-to-letters is a Javascript package to convert
            persian soalr date to persian lertters ❤️
          </p>
        </div>
        <TryConvert />
      </div>
    </div>
  );
};

export default Hero;
