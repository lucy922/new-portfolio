import image from "../assets/images/img.jpeg";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="z-10 absolute w-full">
      <div className="p-5 flex flex-col w-full justify-center items-center bg-zinc-800">
        <div className="grid grid-cols-2 items-center mt-28">
          <img src={image} alt="image" className="w-40 h-40 rounded-full" />
          <ul>
            <li className="mb-3">
              <span className="font-bold mr-2">Name:</span> Lucy Ofem
              <div className="border-b-2 border-b-amber-400 mt-2"></div>
            </li>
            <li className="mb-3">
              <span className="font-bold mr-2">Email:</span> ofemlucy@gmail.com
              <div className="border-b-2 border-b-amber-400 mt-2"></div>
            </li>
            <li className="mb-3">
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

        <Link
          to="/"
          className=" bg-amber-400 text-base text-center text-white font-bold rounded-full w-52 p-4 mt-12"
        >
          Download CV
        </Link>
      </div>
    </main>
  );
}

export default Main;
