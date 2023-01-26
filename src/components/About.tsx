import image from "../assets/images/img.jpg";

function About() {
  return (
    <section className="w-full" id="1">
      <div className="p-5 flex flex-col w-full justify-center items-center bg-zinc-900">
        <div className="relative mt-14">
          <h1 className="md:text-8xl text-6xl text-zinc-800">About me</h1>
          <h2 className="md:text-4xl text-2xl absolute text-center md:top-8 top-4 right-0 left-0 flex justify-center">
            Know Me More
          </h2>
        </div>
        <div className="grid grid-cols-2 items-center mt-28">
          <img
            src={image}
            alt="image"
            className="md:w-44 md:h-44 w-32 h-32 rounded-full"
          />
          <ul>
            <li className="mb-3 text-sm md:text-base">
              <span className="font-bold mr-2">Name:</span> Lucy Ofem
              <div className="border-b-2 border-b-amber-400 mt-2"></div>
            </li>
            <li className="mb-3 text-sm md:text-base">
              <span className="font-bold mr-2">Email:</span> ofemlucy@gmail.com
              <div className="border-b-2 border-b-amber-400 mt-2"></div>
            </li>
            <li className="mb-3 text-sm md:text-base">
              <span className="font-bold mr-2">From:</span> Calabar, Nigeria.
              <div className="border-b-2 border-b-amber-400 mt-2"></div>
            </li>
          </ul>
        </div>

        <p className="max-w-xl m-auto text-center mt-12">
          I'm a highly focused and motivated web developer who loves building
          accessible and responsive websites. I've gathered knowlegde as a
          developer for over 3 years and also worked on a few personal projects
          which can be found on my github account.
        </p>

        <a
          href="https://drive.google.com/file/d/1tV-GIszXdDH0XvHHj1LWy6nO67x1J0tW/view?usp=sharing"
          className=" bg-amber-400 text-base text-center text-white font-bold rounded-full w-52 p-4 mt-12"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default About;
