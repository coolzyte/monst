import { blob, lady } from "../../assets/images";
import { whyUsList } from "./utils/data";

const WhyChooseUs = () => {
  return (
    <section
      id="key-features"
      className="pt-8 pb-12 md:py-16 lg:py-16 overflow-x-hidden"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2">
            <div
              className="lg:py-6 lg:pr-77 "
              style={{ visibility: "visible" }}
            >
              <div className="mb-4">
                <span
                  className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl Down"
                  style={{ visibility: "visible" }}
                >
                  Why choose us
                </span>
                <h2
                  className="text-4xl mt-5 font-bold font-poppins "
                  style={{ visibility: "visible" }}
                >
                  Key Features
                </h2>
              </div>

              {whyUsList.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex items-start py-4 "
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                  >
                    <div className="w-8 mr-5 text-blue-500 text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-poppins">
                        {item.title}
                      </h3>
                      <p className="leading-loose">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
            <div className="">
              <img
                className="jump relative mx-auto rounded-xl w-full z-10"
                src={lady}
                alt="Monst"
              />
              <img
                className="absolute top-0 left-0 w-40 -ml-12 -mt-12"
                src={blob}
                alt="Monst"
              />
              <img
                className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12"
                src={blob}
                alt="Monst"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
