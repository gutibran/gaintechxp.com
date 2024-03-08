import React, { useState } from "react";

interface HamburgerMenuProps {
  userIconSrc: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ userIconSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-gray-800"
        onClick={toggleMenu}
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute z-10 bg-white w-full left-0 mt-4 py-2 shadow-lg`}
      >
        <ul className="flex flex-col justify-between items-start gap-4 px-4">
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
              <img className="h-8 w-8" src={userIconSrc} alt="user-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

interface HeaderProps {
  logoSrc: string;
  userIconSrc: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, userIconSrc }) => {
  return (
    <header className="bg-yellow-200">
      <nav className="p-4 flex items-center justify-between">
        <a href="/" className="flex-shrink-0">
          <img className="h-full w-1/2" src={logoSrc} alt="gaintechxp-dot-com-logo" />
        </a>
        <ul className="hidden md:flex flex-row justify-between items-center gap-12">
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
              <img className="h-8 w-8" src={userIconSrc} alt="user-icon" />
            </a>
          </li>
        </ul>
        <HamburgerMenu userIconSrc={userIconSrc}/>
      </nav>
    </header>
  );
};

export default Header;