import { useState } from "react";
import { intersect, quote } from "../../assets/images";
import { BtnPrimary, SectionHead } from "../../components";
import { testimonialData } from "./data";
import TestimonialList from "./TestimonialList";

const TestimonialLists = () => {
  const [expanded, setExpanded] = useState(false);
  const dataForDisplay = expanded
    ? testimonialData
    : testimonialData.slice(0, 4);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setExpanded(!expanded);
  };
  return (
    <section
      className="pt-20 pb-12 xl:bg-contain bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${intersect})` }}
    >
      <div className="container">
        <div className="max-w-lg mx-auto mb-12 text-center">
          <img className="mx-auto" src={quote} alt="Monst" />
          <SectionHead title="Our Customers Very Happy With Our Services" />

          <p className=" leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo et iaculis.
          </p>
        </div>

        <div className="flex flex-wrap">
          {dataForDisplay.map((item) => {
            return <TestimonialList key={item.id} {...item} />;
          })}
        </div>

        <div className="text-center pt-12">
          <BtnPrimary
            type="button"
            title="Show more Testimonials"
            onClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialLists;
