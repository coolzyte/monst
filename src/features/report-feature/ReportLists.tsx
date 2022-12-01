import { reportList } from "./data";
import ReportList from "./ReportList";

const ReportLists = () => {
  return (
    <section className="pt-6 pb-2">
      <div className="container px-4 mx-auto">
        <div
          className="flex flex-wrap justify-between pt-8 pb-16"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          {reportList.map((report) => {
            return <ReportList key={report.id} {...report} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ReportLists;
