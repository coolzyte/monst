import { HiMail } from "react-icons/hi";
import { FormRow } from "../../components";

const BlueInput = () => {
  const handleChange = () => {
    console.log("clicked");
  };
  return (
    <div className="flex flex-wrap max-w-lg mx-auto">
      <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blue-500 border border-blue-300 rounded">
        <HiMail className="h-6 w-6 my-auto text-blue-200" />
        <FormRow
          type="text"
          handleChange={handleChange}
          placeholder="Enter your email"
          blue
        />
      </div>
      <button
        className="w-full md:w-auto py-4 px-8 text-xs text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded transition duration-300 ease-in-out"
        type="submit"
      >
        Sign Up
      </button>
    </div>
  );
};

export default BlueInput;
