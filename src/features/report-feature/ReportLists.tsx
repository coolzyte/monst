import { reportList } from "./data";
import ReportList from "./ReportList";

const ReportLists = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap justify-between pt-8 pb-16">
        {reportList.map((report) => {
          return <ReportList key={report.id} {...report} />;
        })}
      </div>
    </div>
  );
};

export default ReportLists;
