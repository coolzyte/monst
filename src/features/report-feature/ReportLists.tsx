import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { reportList } from "./data";
import ReportList from "./ReportList";

const ReportLists = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section className="pt-6 pb-2">
        <div className="container px-4 mx-auto">
          {counterOn && (
            <div
              className="flex flex-wrap justify-between pt-8 pb-16"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              {reportList.map((report) => {
                return <ReportList key={report.id} {...report} />;
              })}
            </div>
          )}
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default ReportLists;
