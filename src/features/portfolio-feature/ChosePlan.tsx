import { FiEye } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { intersect, onlineShopping } from "../../assets/images";
import { FormRow, SectionHead } from "../../components";
import { BtnSubmit } from "../../components/Button";

const ChosePlan = () => {
  return (
    <section
      className="py-20 xl:bg-contain bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${intersect})` }}
    >
      <div className="container">
        <div className="text-center mb-8">
          <SectionHead
            title="Choose Your"
            blueTitle="Best"
            secondTitle="Pricing Plan"
          />

          <p
            className="max-w-sm mx-auto text-lg"
            style={{ visibility: "visible" }}
          >
            Great Things In Business Are Never Done By One Person
          </p>
        </div>
        <div className="flex flex-wrap sm:justify-center mb-10">
          <label
            className="flex items-center mr-8 mb-2"
            style={{ visibility: "visible" }}
          >
            <input type="radio" name="billing" value="1" />
            <span className="mx-2 font-semibold">Monthly Billing</span>
            <span className="inline-flex items-center justify-center w-12 h-10 bg-blue-500 text-white font-semibold rounded">
              $59
            </span>
          </label>
          <label
            className="flex items-center mb-2 "
            style={{ visibility: "visible" }}
          >
            <input type="radio" name="billing" value="2" />
            <span className="mx-2 font-semibold">Annual Billing</span>
            <span className="inline-flex items-center justify-center w-12 h-10 bg-blue-500 text-white font-semibold rounded">
              $99
            </span>
          </label>
        </div>
        <div
          className="flex flex-wrap bg-white rounded shadow-lg "
          style={{ visibility: "visible" }}
        >
          <div className="w-full md:w-1/2 lg:w-2/5 px-3">
            <div className="p-8 text-center">
              <span className="text-gray-400">Sign In</span>
              <h4 className="mb-6 text-2xl">Setup your payment</h4>
              <div className="flex mb-4 px-4 bg-gray-50 rounded">
                <FormRow type="email" placeholder="Email" name="email" />
                <MdAlternateEmail className="h-6 w-6 ml-4 my-auto text-gray-300" />
              </div>
              <div className="flex mb-6 px-4 bg-blueGray-100 rounded">
                <FormRow
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                />
                <button className="ml-4">
                  <FiEye className="h-6 w-6 my-auto text-gray-300" />
                </button>
              </div>
              <div className="text-left mb-5 text-sm text-gray-400">
                <label>
                  <input type="checkbox" name="terms" value="1" />
                  <span className="ml-1">I agree to terms and conditions.</span>
                </label>
              </div>
              <BtnSubmit title="Purchase now" />
            </div>
          </div>
          <div className="relative w-full md:w-1/2 lg:w-3/5 px-3 bg-blue-500 rounded-r overflow-hidden">
            <div className="max-w-sm px-12 pt-12">
              <span className="text-xs text-blue-200">
                Various Analysis Options
              </span>
              <h3 className="mb-4 text-4xl font-bold font-poppins text-white">
                Techno Provides Realtime Best Data Solutions.
              </h3>
            </div>
            <div className="absolute right-0 bottom-0">
              <div className="flex items-center h-full">
                <img className="h-80" src={onlineShopping} alt="Monst" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChosePlan;
