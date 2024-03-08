import { FaUser } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu";
import Image from "next/image"; // Import the Image component

interface HeaderProps {
  logoSrc: string;
  uiMode: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, uiMode }) => {
  return uiMode === "mobile" ? (
    <header className="p-4 bg-yellow-200">
      <nav>
        <ul className="flex flex-row justify-between items-center">
          <li>
            <a href="#">
              <FaUser />
            </a>
          </li>
          <li>
            <a href="/">
              <Image
                src={logoSrc}
                alt="gaintechxp-dot-com-logo"
                width={32} // Set the desired width
                height={32} // Set the desired height
              />
            </a>
          </li>
          <li>
            <HamburgerMenu />
          </li>
        </ul>
      </nav>
    </header>
  ) : (
    <header className="p-4 bg-yellow-200">
      <nav className="flex flex-row justify-between items-center">
        <a href="/">
          <Image
            src={logoSrc}
            alt="gaintechxp-dot-com-logo"
            width={192} // Set the desired width
            height={48} // Set the desired height
          />
        </a>
        <ul className="flex flex-row justify-between items-center gap-4">
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">
              <FaUser />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;