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
        <nav>
          <ul className="hidden space-x-10 md:inline-flex text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Resume</Link>
            </li>
            <li>
              <a href="mailto:ofemlucy@gmail.com">Contact</a>
            </li>
          </ul>
        </nav>

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

        <div className="block text-center md:hidden">
          <button onClick={handleClick}>
            {openMenu ? (
              <FontAwesomeIcon
                className="text-2xl absolute right-5 top-2 p-3"
                icon={faTimes}
              />
            ) : (
              <FontAwesomeIcon
                className="text-xl absolute right-5 top-2 p-3"
                icon={faBars}
              />
            )}

            <span className="sr-only">Open Menu</span>
          </button>
          {openMenu === true ? (
            <ul className="mt-7 p-5 w-60 bg-black absolute right-0 space-y-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Resume</Link>
              </li>
              <li>
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
