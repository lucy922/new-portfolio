function Intro() {
  return (
    <section className="h-[850px] bg-[url('/public/assets/images/bg.jpg')] bg-cover bg-no-repeat">
      <div className="w-full h-full backdrop-brightness-50"></div>
      <div className="z-10 absolute inset-0">
        <div className="md:mt-44 mt-96 flex flex-col justify-center items-center m-auto">
          <div className="text-center leading-10">
            <h1 className="md:text-3xl text-2xl mb-4 font-medium">Hello,</h1>
            <h2 className="md:text-6xl text-5xl my-6 font-bold">
              I'm Lucy Ofem.
            </h2>
            <p className="text-gray-400">Based in Calabar, Nigeria.</p>
          </div>
          <button
            type="button"
            className="border-2 border-amber-400 text-lg text-amber-400 rounded-full w-60 py-2 px-4 my-12"
          >
            About me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
