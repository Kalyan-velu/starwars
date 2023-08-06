const Hero = () => {
  return (
    <div
      className='text-bold font-6xl h-screen bg-fixed w-full flex justify-center items-center'
      style={{
        backgroundImage: "url(/assets/mandalorian.jpg)",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='text-center text-9xl font-extrabold'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-700'>
          STAR WARS
        </span>
      </div>
    </div>
  );
};

export default Hero;
