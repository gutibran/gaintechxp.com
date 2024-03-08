import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGit } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


interface FooterProps { }

interface Visibility {
  products: boolean;
  services: boolean;
  [key: string]: boolean; // Add index signature
}

const Footer: React.FC<FooterProps> = () => {
  const [listVisibility, setListVisibility] = useState({
    products: false,
    services: false,
    // Add more lists as needed
  });

  const toggleListVisibility = (listKey: string) => {
    setListVisibility((prevVisibility) => ({
      ...prevVisibility,
      [listKey]: !prevVisibility[listKey as keyof typeof prevVisibility],
    }));
  };

  return (
    <footer className="bg-pink-200">
      {/* Products list */}
      <div>
        <h3
          onClick={() => toggleListVisibility("products")}
          className="cursor-pointer inline-block p-2 border-b border-gray-700"
        >
          Products{" "}
          <span className="transform inline-block transition-transform duration-300">
            {listVisibility.products ? "⌄" : "⋀"}
          </span>
        </h3>
        <ul
          className={`list-none ${listVisibility.products ? "block" : "hidden"
            } transition-all duration-300 flex flex-col`}
        >
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-300">
              Link 1
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-300">
              Link 2
            </a>
          </li>
          {/* Add content to other list items as needed */}
        </ul>
      </div>

      {/* Services list */}
      <div>
        <h3
          onClick={() => toggleListVisibility("services")}
          className="cursor-pointer inline-block p-2 border-b border-gray-700"
        >
          Services{" "}
          <span className="transform inline-block transition-transform duration-300">
            {listVisibility.services ? "⌄" : "⋀"}
          </span>
        </h3>
        <ul
          className={`list-none ${listVisibility.services ? "block" : "hidden"
            } transition-all duration-300 flex flex-col`}
        >
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-300">
              Service 1
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-300">
              Service 2
            </a>
          </li>
          {/* Add content to other service list items as needed */}
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
        </ul>
      </div>
      <p>Over 1,000,000 noobs trained worldwide</p>
      <ul>
        <li>
          <a className="" href="#"><BsTwitterX /></a>
        </li>
        <li>
          <a href="#"><FaFacebook /></a>
        </li>
        <li>
          <a href="#"><FaYoutube /></a>
        </li>
        <li>
          <a href="#"><FaLinkedin /></a>
        </li>
        <li>
          <a href="#"><FaGithub /></a>
        </li>
        <li>
          <a href="#"></a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
