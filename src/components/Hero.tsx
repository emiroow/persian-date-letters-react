import TryConvert from "../components/TryConvert";
const Hero = () => {
  return (
    <div className="hero w-full min-h-[60vh] bg-base-200">
      <div className="hero-content w-full text-center flex flex-col">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-primary">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <TryConvert />
      </div>
    </div>
  );
};

export default Hero;
