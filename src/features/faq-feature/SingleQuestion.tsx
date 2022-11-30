import { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";

const SingleQuestion = ({ title, answer }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggle = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="leading-loose text-lg mt-6 ">
      <button
        className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4"
        type="button"
        onClick={() => toggle()}
      >
        <span>{title}</span>
        {showInfo ? <CgCloseO /> : <BiPlusCircle />}
      </button>
      {showInfo && <div className="text-gray-700 text-sm mt-2">{answer}</div>}
    </div>
  );
};

export default SingleQuestion;
