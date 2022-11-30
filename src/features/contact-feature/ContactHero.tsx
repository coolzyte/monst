import { team } from "../../assets/images";
import { BtnAccent, BtnPrimary, SectionHead } from "../../components";

const ContactHero = () => {
  return (
    <section className="relative -mt-24 pt-24">
      <div
        className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blue-50 z-0"
        style={{ zIndex: -1 }}
      ></div>
      <div className="container">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <div className="py-12">
              <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                <SectionHead
                  title="Committed to"
                  blueTitle="People"
                  secondTitle="and the future"
                />

                <p
                  className=" leading-relaxed "
                  style={{ visibility: "visible" }}
                >
                  We are <strong className="text-blue-500">Monst</strong>, a
                  Creative Design{" "}
                  <span className="typewrite d-inline text-brand">
                    <span>
                      <div style={{ display: "inline-block" }}></div>
                      <span
                        style={{
                          display: "inline-block",
                          transition: "opacity 0.5s ease 0s",
                          opacity: 0,
                        }}
                      >
                        |
                      </span>
                    </span>
                  </span>
                </p>
                <p
                  className="text-blueGray-400 leading-relaxed wow animate__ animate__fadeIn mt-3 text-sm animated animated"
                  style={{ visibility: "visible" }}
                >
                  Helping you maximize operations management with digitization
                </p>
              </div>
              <div className="text-center lg:text-left flex space-x-2">
                <BtnPrimary type="button" title="About Us" path="/about" />
                <BtnAccent
                  type="button"
                  title="Our Services"
                  path="/services"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 lg:bg-blue-50 mb-12 lg:mb-0 pb-10">
            <div className="flex items-center justify-center">
              <img className="lg:max-w-lg" src={team} alt="Monst" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
