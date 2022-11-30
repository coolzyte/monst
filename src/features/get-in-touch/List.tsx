type listProps = {
  icon: JSX.Element;
  title: string;
  text: string;
  secondText: string;
};

const List = ({ icon, title, text, secondText }: listProps) => {
  return (
    <div
      className="w-1/2 lg:w-1/3 px-3 mb-12 flex flex-col items-center"
      style={{ visibility: "visible" }}
    >
      <span className="mb-6 h-8 w-8 text-blue-600 text-2xl">{icon}</span>
      <div className="leading-relaxed">
        <span className="text-sm text-blueGray-400">{title}</span>
        <p>{text}</p>
        <p>{secondText}</p>
      </div>
    </div>
  );
};

export default List;
