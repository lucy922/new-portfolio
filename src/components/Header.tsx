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
    <header className="sticky top-0 z-30 w-full shadow-xl">
      <div className="flex justify-between p-6 bg-transparent">
        <h1 className="text-2xl">Lucy</h1>
        <nav className="flex text-sm">
          <ul className="hidden space-x-10 md:inline-flex">
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
        <div className="flex">
          <ul className="hidden space-x-5 md:inline-flex">
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
          <div className="block space-x-4 md:hidden">
            <button onClick={handleClick}>
              {openMenu ? (
                <FontAwesomeIcon
                  className="text-2xl absolute right-5 top-2 p-3"
                  icon={faTimes}
                />
              ) : (
                <FontAwesomeIcon className="text-xl" icon={faBars} />
              )}

              <span className="sr-only">Open Menu</span>
            </button>
            {openMenu === true ? (
              <ul className="mt-3">
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
      </div>
    </header>
  );
}

export default Header;
