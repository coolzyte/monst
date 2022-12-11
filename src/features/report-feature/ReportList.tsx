type reportProps = {
  icon: JSX.Element;
  title: string;
  number: JSX.Element;
};

const ReportList = ({ icon, title, number }: reportProps) => {
  return (
    <div
      className="hover-up-5 flex w-1/2 lg:w-auto py-4"
      style={{ visibility: "visible" }}
    >
      <div className="flex justify-center items-center bg-gray-50 text-4xl text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
        {icon}
      </div>
      <div className="sm:py-2 ml-2 sm:ml-6">
        <span className="sm:text-2xl font-bold font-poppins">+ </span>
        <span className="sm:text-2xl font-bold font-poppins count">
          <span>{number}</span>
        </span>
        <p className="text-xs sm:text-base text-gray-400">{title}</p>
      </div>
    </div>
  );
};

export default ReportList;
