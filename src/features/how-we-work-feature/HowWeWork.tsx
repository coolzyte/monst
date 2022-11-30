import { SectionHead } from "../../components";
import { howWeWork } from "./data";
import HowWeWorkList from "./HowWeWorkList";

const HowWeWork = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <SectionHead
              title="We are"
              blueTitle="awesome team"
              secondTitle="for your business dream"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="leading-loose" style={{ visibility: "visible" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis. Quisque vitae nulla malesuada,
              auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
              imperdiet.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 -mb-6 text-center">
          {howWeWork.map((item) => {
            return <HowWeWorkList key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
