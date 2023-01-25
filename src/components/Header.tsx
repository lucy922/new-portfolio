import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="sticky top-0 z-30 md:m-0 w-full h-20 shadow-xl">
      <div className="flex justify-between items-center p-6 bg-black">
        <h1 className="text-2xl">Lucy</h1>

        <ul className=" hidden space-x-10 md:inline-flex text-sm">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#1">About</a>
          </li>
          <li>
            <a href="/">Resume</a>
          </li>
          <li>
            <a href="mailto:ofemlucy@gmail.com">Contact</a>
          </li>
        </ul>

        <ul className="hidden md:inline-flex space-x-5">
          <li>
            <FontAwesomeIcon className="text-xl" icon={faTwitterSquare} />
          </li>
          <li>
            <FontAwesomeIcon className="text-xl" icon={faLinkedin} />
          </li>
          <li>
            <FontAwesomeIcon className="text-xl" icon={faGithubSquare} />
          </li>
        </ul>

        <ul className="md:hidden space-x-5 justify-center inline-flex">
          <li>
            <FontAwesomeIcon className="text-xl" icon={faTwitterSquare} />
          </li>
          <li>
            <FontAwesomeIcon className="text-xl" icon={faLinkedin} />
          </li>
          <li>
            <FontAwesomeIcon className="text-xl" icon={faGithubSquare} />
          </li>
        </ul>

        <div className="block md:hidden">
          <button onClick={handleClick}>
            {openMenu ? (
              <FontAwesomeIcon
                className="text-xl absolute right-5 top-7"
                icon={faTimes}
              />
            ) : (
              <FontAwesomeIcon
                className="text-xl  absolute right-5 top-7"
                icon={faBars}
              />
            )}

            <span className="sr-only">Open Menu</span>
          </button>
          {openMenu === true ? (
            <ul className="mt-7 text-sm py-4 w-60 text-center bg-black absolute right-0 space-y-3">
              <li className="hover:text-amber-400">
                <Link to="/">Home</Link>
                <div className="border-b-2 border-b-zinc-900 mt-2"></div>
              </li>
              <li className="hover:text-amber-400">
                <a href="#1">About</a>
              </li>
              <div className="border-b-2 border-b-zinc-900 mt-2"></div>
              <li className="hover:text-amber-400">
                <a href="/">Resume</a>
              </li>
              <div className="border-b-2 border-b-zinc-900 mt-2"></div>
              <li className="hover:text-amber-400">
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
