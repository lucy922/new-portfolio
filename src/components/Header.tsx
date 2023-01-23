import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between p-6">
      <h1 className="text-2xl">Lucy</h1>
      <nav>
        <ul className="flex text-sm">
          <li className="mr-10">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-10">
            <Link to="/">About</Link>
          </li>
          <li className="mr-10">
            <Link to="/">Resume</Link>
          </li>
          <li className="mr-10">
            <a href="mailto:ofemlucy@gmail.com">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        <ul className="flex">
          <li className="pr-3">
            <FontAwesomeIcon className="text-xl" icon={faTwitterSquare} />
          </li>
          <li className="pr-3">
            <FontAwesomeIcon className="text-xl" icon={faLinkedin} />
          </li>
          <li className="pr-3">
            <FontAwesomeIcon className="text-xl" icon={faGithubSquare} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
