const FoundNot = () => {
  return (
    <div className='flex flex-col gap-8 justify-center w-full bg'>
      <div className='text-center text-4xl md:text-6xl font-extrabold'>
        <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-700'>
          Occured, A 404 Error has...
        </h1>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-700'>
          Lost a component I have. How embrassing..
        </span>
      </div>
      <div className='relative flex flex-col text-center items-center justify-center text-6xl font-extrabold'>
        <img
          className='w-[300px]'
          src='/assets/disappointed.jpg'
          alt='I am disappointed'
        />
      </div>
    </div>
  );
};

export default FoundNot;
