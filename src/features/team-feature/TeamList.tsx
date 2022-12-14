type teamListProps = {
  image: string;
  name: string;
  jobTitle: string;
  lists: {
    url: string;
    icon: string;
  }[];
};

const TeamList = ({ image, name, jobTitle, lists }: teamListProps) => {
  return (
    <div className="w-1/2 lg:w-1/4 px-5 mb-12">
      <div
        className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow-sm  border border-gray-100 hover:border-gray-200"
        style={{ visibility: "visible" }}
      >
        <img
          className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
          src={image}
          alt="Monst"
        />
        <strong className="mt-6 mb-2 text-md">{name}</strong>
        <p className="text-gray-500 text-xs my-3">{jobTitle}</p>
        {lists.map((list, index) => (
          <a key={index} className="inline-block px-2" href={list.url}>
            <img src={list.icon} alt="Monst" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
