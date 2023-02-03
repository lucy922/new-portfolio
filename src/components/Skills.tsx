function Skills() {
  return (
    <section className="w-full h-full bg-zinc-800" id="skills">
      <div className="p-5 flex flex-col w-full justify-center items-center">
        <div className="relative mt-14">
          <h1 className="md:text-8xl text-6xl opacity-70 text-zinc-700">
            RESUME
          </h1>
          <h2 className="md:text-4xl text-2xl absolute text-center md:top-8 top-4 right-0 left-0 flex justify-center">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 md:space-x-10 items-center text-center mt-28">
          <div className="bg-zinc-900 p-3 py-10 mb-5 rounded">
            <h1>LANGUAGES</h1>
            <div className="border-b-2 border-b-amber-400 m-auto w-8"></div>
            <p className="mt-3">Javascript, Html, Css.</p>
          </div>
          <div className="bg-zinc-900 p-3 py-10 mb-5 rounded">
            <h1>FRAMEWORKS</h1>
            <div className="border-b-2 border-b-amber-400 m-auto w-8"></div>
            <p className="mt-3">ReactJs, NextJs, Tailwind, Bootstrap.</p>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1tV-GIszXdDH0XvHHj1LWy6nO67x1J0tW/view?usp=sharing"
          className="bg-amber-400 text-center text-lg text-white rounded-full w-60 py-3 px-4 my-12"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Skills;
