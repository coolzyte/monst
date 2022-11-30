const FaqList = ({ icon, title, bulletLists }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 " data-wow-delay=".1s">
      <div className="p-6 bg-white rounded shadow">
        <div className="text-blue-500 mb-4">{icon}</div>
        <h4 className="mb-3 font-bold font-heading">{title}</h4>

        {bulletLists.map((list, index) => {
          const { text1, text2, text3, text4 } = list;
          return (
            <ul
              key={index}
              className="list-disc list-inside text-sm text-blueGray-400"
            >
              <li className="mb-2">{text1}</li>
              <li className="mb-2">{text2}</li>
              <li className="mb-2">{text3}</li>
              <li>{text4}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default FaqList;
