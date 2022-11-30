import { HiMail } from "react-icons/hi";
import { FormRow } from "../../components";

const WhiteInput = () => {
  const handleChange = () => {
    console.log("clicked");
  };
  return (
    <div className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto">
      <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-gray-100 rounded">
        <HiMail className="h-6 w-6 my-auto text-gray-700" />
        <FormRow
          type="text"
          handleChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
      <button
        className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
        type="submit"
      >
        Sign Up
      </button>
    </div>
  );
};

export default WhiteInput;
