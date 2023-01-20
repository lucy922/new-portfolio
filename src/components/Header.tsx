import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between p-8">
      <h1 className="text-lg">Lucy Ofem</h1>
      <nav>
        <ul className="flex text-sm">
          <li className="pr-8">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-8">
            <Link to="/">About</Link>
          </li>
          <li className="pr-8">
            <Link to="/">Resume</Link>
          </li>
          <li className="pr-8">
            <Link to="/">Portfolio</Link>
          </li>
          <li className="pr-8">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
        <ul className="flex">
          <li className="pr-3">
            <FontAwesomeIcon className="text-lg" icon={faTwitterSquare} />
          </li>
          <li className="pr-3">
            <FontAwesomeIcon className="text-lg" icon={faLinkedin} />
          </li>
          <li className="pr-3">
            <FontAwesomeIcon className="text-lg" icon={faGithubSquare} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
