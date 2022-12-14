import { useEffect, useState } from "react";
import { BtnAccent, BtnPrimary, Logo } from "../../components";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [topBarScroll, setTopBarScroll] = useState(false);

  const animateTopBar = () => {
    if (window.scrollY >= 100) {
      setTopBarScroll(true);
    } else {
      setTopBarScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animateTopBar);
  }, []);

  return (
    <>
      <header
        className={
          topBarScroll
            ? `fixed top-0 w-full bg-white shadow-sm z-50 transition-all duration-300 ease-in-out mt-0`
            : `bg-transparent mt-4 z-50`
        }
      >
        <div className="container mx-auto bg-transparent">
          <nav className="bg-transparent flex justify-between items-center py-3">
            <Logo />
            <Navbar />

            <div className="hidden lg:block lg:z-10">
              <BtnAccent title="Log In" path="/sign-in" />
              <BtnPrimary title="Sign Up" path="/register" />
            </div>
            <div className="lg:hidden z-10">
              <button
                className="navbar-burger flex items-center py-2 px-3 text-blue hover:text-blue rounded border border-blue hover:border-blue"
                onClick={() => setShowLinks(!showLinks)}
              >
                <svg
                  className="fill-current h-4 w-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
      {showLinks && <MobileMenu setShowLinks={setShowLinks} />}
    </>
  );
};

export default Header;
