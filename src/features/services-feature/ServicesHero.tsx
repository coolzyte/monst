import React from "react";
import { serviceImg } from "../../assets/images";
import { SectionHead } from "../../components";
import { servicesData } from "./data";
import ServicesList from "./ServicesList";

const ServicesHero = () => {
  return (
    <div className="container py-12 mx-auto">
      <div className="flex flex-wrap">
        <div
          className="w-full md:w-1/2 pr-12 px-3 order-0 md:order-0 mb-12 md:mb-0 wow animate__ animate__fadeIn  animated"
          style={{ visibility: "visible" }}
        >
          <img
            className="sm:max-w-sm lg:max-w-full mx-auto"
            src={serviceImg}
            alt="Monst"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 order-1 md:order-1">
          <div className="max-w-md-2">
            <div className="mb-4">
              <span
                className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl"
                style={{ visibility: "visible" }}
              >
                Why choose us
              </span>

              <SectionHead
                title="We Provide Best"
                blueTitle="Web design"
                secondTitle="services"
              />
            </div>
            <p className="mb-6 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>

            <div className="flex flex-wrap">
              {servicesData.map((service) => {
                return <ServicesList key={service.id} {...service} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
