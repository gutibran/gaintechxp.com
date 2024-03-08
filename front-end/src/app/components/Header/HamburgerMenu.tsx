import { useState } from 'react';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center self-end">
      <button
        className="text-gray-500 focus:outline-none focus:border-none"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={toggleMenu}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li className="mb-2">
                <a href="#">Products</a>
              </li>
              <li className="mb-2">
                <a href="#">Features</a>
              </li>
              <li className="mb-2">
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;