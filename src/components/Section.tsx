function Section() {
  return (
    <section className="z-10 absolute">
      <div className="mt-44 flex flex-col justify-center items-center m-auto">
        <div className="text-center leading-10">
          <h1 className="text-3xl mb-4 font-medium">Hello,</h1>
          <h2 className="text-6xl my-6 font-bold">I'm Lucy Ofem.</h2>
          <p className="text-gray-400">Based in Calabar, Nigeria.</p>
        </div>
        <button
          type="button"
          className="border-2 border-amber-400 text-lg text-amber-400 rounded-full w-96 py-2 px-4 my-12"
        >
          About me
        </button>
      </div>
    </section>
  );
}

export default Section;
