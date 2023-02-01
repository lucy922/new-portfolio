function Skills() {
  return (
    <section className="w-full h-full bg-zinc-800" id="2">
      <div className="p-5 flex flex-col w-full justify-center items-center">
        <div className="relative mt-14">
          <h1 className="md:text-8xl text-6xl opacity-70 text-zinc-700">
            RESUME
          </h1>
          <h2 className="md:text-4xl text-2xl absolute text-center md:top-8 top-4 right-0 left-0 flex justify-center">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 grid-rows-2 md:space-x-10 items-center text-center mt-28">
          <div className="bg-zinc-900 p-3 py-10 mb-5 rounded">
            <h1 className="mb-3">Languages</h1>
            <p>Javascript, Html, Css.</p>
          </div>
          <div className="bg-zinc-900 p-3 py-10 mb-5 rounded">
            <h1 className="mb-3">Frameworks</h1>
            <p className="px-2">ReactJs, NextJs, Tailwind, Bootstrap.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
