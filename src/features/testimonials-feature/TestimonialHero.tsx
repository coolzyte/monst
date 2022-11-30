import { lady, quote } from "../../assets/images";
import { Brands, SectionHead } from "../../components";

function TestimonialHero() {
  return (
    <section className="py-20 pb-8 overflow-x-hidden">
      <div className="container">
        <div className="flex flex-wrap mb-24">
          <div className="relative w-full lg:w-1/2 h-[36rem] mb-20 lg:mb-0 wow animate__ animate__fadeIn  animated">
            <div className="absolute top-0 right-0 h-full w-full mt-6 -mr-6 bg-blue-100/10 rounded-xl"></div>
            <img
              className="absolute top-0 right-0 h-full w-full rounded-xl object-cover object-top"
              src={lady}
              alt="Monst"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-24 my-auto">
            <img
              src={quote}
              alt="Monst"
              className="wow animate__ animate__fadeIn  animated"
            />
            <SectionHead
              title="Maecenas nibh purus, pharetra ac felis sed, elementum molestie
              urna. Nunc at arcu non ipsum auctor lacinia quis quis mi."
            />

            <p className="mb-1 text-lg">
              <strong className="text-blue-500 wow animate__ animate__fadeIn  animated">
                Alice Bradley
              </strong>
            </p>
            <p className="text-gray-500 text-xs wow animate__ animate__fadeIn  animated">
              CEO, Co Founders
            </p>
          </div>
        </div>
        <Brands />
      </div>
    </section>
  );
}

export default TestimonialHero;
