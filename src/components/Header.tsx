import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="sticky top-0 z-30 md:m-0 w-full h-20 shadow-xl bg-black">
      <div className="flex justify-between items-center p-6 ">
        <h1 className="text-2xl">Lucy</h1>

        <ul className=" hidden space-x-10 md:inline-flex text-sm">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Resume</a>
          </li>
          <li>
            <a href="mailto:ofemlucy@gmail.com">Contact</a>
          </li>
        </ul>

        <ul className="hidden md:inline-flex space-x-5">
          <li>
            <a href="https://twitter.com/_dada_dev">
              <FontAwesomeIcon className="text-xl" icon={faTwitterSquare} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lucy-ofem-740a9a196/">
              <FontAwesomeIcon className="text-xl" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/lucy922">
              <FontAwesomeIcon className="text-xl" icon={faGithubSquare} />
            </a>
          </li>
        </ul>

        <ul className="md:hidden space-x-5 justify-center inline-flex">
          <li>
            <a href="https://twitter.com/_dada_dev">
              <FontAwesomeIcon className="text-xl" icon={faTwitterSquare} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lucy-ofem-740a9a196/">
              <FontAwesomeIcon className="text-xl" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/lucy922">
              <FontAwesomeIcon className="text-xl" icon={faGithubSquare} />
            </a>
          </li>
        </ul>

        <div className="md:hidden flex top-0 right-0 relative text-white cursor-pointer">
          <button onClick={handleClick}>
            <div className=" w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <span
                className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                  openMenu ? "rotate-45 delay-200" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                  openMenu ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                  openMenu ? "-rotate-45 delay-200" : "translate-y-1.5"
                }`}
              ></span>
            </div>
            <span className="sr-only">Open Menu</span>
          </button>
          {openMenu === true ? (
            <ul className="mt-7 text-sm py-4 w-60 text-center pt-10 bg-black absolute right-0 space-y-3">
              <li
                className="hover:text-amber-400"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <a href="#intro">Home</a>
                <div className="border-b-2 border-b-zinc-900 mt-2"></div>
              </li>
              <li
                className="hover:text-amber-400"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <a href="#about">About</a>
              </li>
              <div className="border-b-2 border-b-zinc-900 mt-5"></div>
              <li
                className="hover:text-amber-400"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <a href="#skills">Resume</a>
              </li>
              <div className="border-b-2 border-b-zinc-900 mt-2"></div>
              <li
                className="hover:text-amber-400"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <a href="mailto:ofemlucy@gmail.com">Contact</a>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
