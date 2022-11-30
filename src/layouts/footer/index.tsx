import { facebook, instagram, twitter } from "../../assets/images";
import { Logo } from "../../components";

const Footer = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto" style={{ visibility: "visible" }}>
        <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
          <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0 ">
            <span className="inline-block mx-auto lg:mx-0">
              <Logo />
            </span>
          </div>
          <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
            <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-gray leading-relaxed">
              Helping you <strong>maximize</strong> operations management with
              digitization
            </p>
          </div>
          <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-poppins text-black">
              Office
            </p>
            <p className="lg:text-lg text-gray">359 Hidden Valley Road, NY</p>
          </div>
          <div className="w-full lg:w-1/5 px-3">
            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-poppins text-black">
              Contacts
            </p>
            <p className="lg:text-lg text-gray">(+01) 234 568</p>
            <p className="lg:text-lg text-gray">contact@monst.com</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <p className="text-sm text-gray">
            © 2022. All rights reserved. Designed by{" "}
            <a className="text-blue" href="https://muhats.com" target="_blank">
              Alithemes.com
            </a>
          </p>
          <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
            <a className="inline-block px-2" href="https://facebook.com">
              <img src={facebook} alt="Monst" />
            </a>
            <a className="inline-block px-2" href="https://twitter.com">
              <img src={twitter} alt="Monst" />
            </a>
            <a className="inline-block px-2" href="https://www.instagram.com">
              <img src={instagram} alt="Monst" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
