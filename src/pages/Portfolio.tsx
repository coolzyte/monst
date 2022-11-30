import { Badge, Breadcrumb, SectionHead } from "../components";
import { GetInTouch } from "../features/get-in-touch";

import { ChosePlan, PortfolioLists } from "../features/portfolio-feature";

const Portfolio = () => {
  return (
    <>
      <Breadcrumb title="Our Portfolio" center="center" />

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-lg mx-auto mb-12 text-center">
            <Badge title="Our Projects" />

            <SectionHead
              title="Check Out Our"
              blueTitle="Latest"
              secondTitle="Project"
            />

            <p className=" leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
          </div>

          <PortfolioLists />
        </div>
      </section>
      <ChosePlan />
      <GetInTouch />
    </>
  );
};

export default Portfolio;
