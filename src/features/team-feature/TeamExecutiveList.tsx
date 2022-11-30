type teamExecutiveProps = {
  image: string;
  name: string;
  jobTitle: string;
  text: string;
  facebook: JSX.Element;
  instagram: JSX.Element;
  twitter: JSX.Element;
};

const TeamExecutiveList = ({
  image,
  name,
  jobTitle,
  text,
  facebook,
  instagram,
  twitter,
}: teamExecutiveProps) => {
  return (
    <div className="w-full md:w-1/2 py-5 md:px-5">
      <div className="px-6 py-10 bg-white shadow-sm rounded hover-up-5  border border-gray-100 hover:border-gray-200 ">
        <div className="flex items-center mb-4">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src={image}
            alt={name}
          />
          <div className="pl-4">
            <strong className="mt-6 mb-2 text-md">{name}</strong>
            <p className="text-gray-500 text-xs mt-3">{jobTitle}</p>
          </div>
        </div>
        <p className="leading-loose text-gray-400 mb-5">{text}</p>
        <div className="flex space-x-2 text-blue-500">
          <a href="#">{facebook}</a>
          <a href="#">{instagram}</a>
          <a href="#">{twitter}</a>
        </div>
      </div>
    </div>
  );
};

export default TeamExecutiveList;
