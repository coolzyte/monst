import { Link } from "react-router-dom";
import { facebook, instagram, twitter } from "../../assets/images";
import { BtnAccent, BtnPrimary, Logo } from "../../components";
import { menuItems } from "./utils/mobileLinks";

type Props = {
  setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
};
const MobileMenu = ({ setShowLinks }: Props) => {
  return (
    <div className="navbar-menu relative z-50 transition duration-300">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300">
        <div className="flex items-center mb-8">
          <div className="mr-auto">
            <Logo />
          </div>
          <button className="navbar-close" onClick={() => setShowLinks(false)}>
            <svg
              className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blue"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul className="mobile-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="mb-1">
                <a
                  className="block p-4 text-sm text-gray hover:bg-blue-50 hover:text-blue"
                  href={item.url}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-6 border-t border-blueGray-100">
            <BtnAccent title="Log In" path="/sign-in" />
            <BtnPrimary title="Sign Up" path="/register" />
          </div>
        </div>
        <div className="mt-auto">
          <p className="my-4 text-xs text-blueGray-400">
            <span>Get in Touch</span>
            <span className="text-blue-500 hover:text-blue underline">
              contact@monst.com
            </span>
          </p>
          <Link className="inline-block px-1" to="https://facebook.com">
            <img src={facebook} alt="Monst" />
          </Link>
          <Link className="inline-block px-1" to="https://twitter.com">
            <img src={twitter} alt="Monst" />
          </Link>
          <Link className="inline-block px-1" to="https://www.instagram.com">
            <img src={instagram} alt="Monst" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
