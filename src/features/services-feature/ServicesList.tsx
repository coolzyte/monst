type servicesListProps = {
  id: number;
  title: string;
  text: string;
};
const ServicesList = ({ id, title, text }: servicesListProps) => {
  return (
    <div
      className="w-full md:w-1/2 items-start pt-4 pb-8"
      style={{ visibility: "visible" }}
    >
      <div className="w-8 mb-5 text-blue-500">
        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
          {id}
        </span>
      </div>
      <div>
        <h3 className="mb-2 text-xl font-semibold font-poppins">{title}</h3>
        <p className=" leading-loose text-sm">{text}</p>
      </div>
    </div>
  );
};

export default ServicesList;
