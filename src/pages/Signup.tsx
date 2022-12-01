import { MdAlternateEmail } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { facebookSign, googleSign } from "../assets/brand";
import { FormRow } from "../components";
import { BtnSocial, BtnSubmit } from "../components/Button";

const Signup = () => {
  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex max-w-md mx-auto flex-col text-center">
            <div className="mt-12 mb-8 p-8 bg-white rounded shadow">
              <h4 className="mb-6 text-3xl">Create an Account</h4>
              <div className="flex mb-4 px-4 bg-gray-50 rounded border border-gray-200">
                <FormRow type="email" placeholder="Username" name="email" />
                <MdAlternateEmail className="h-6 w-6 ml-4 my-auto text-gray-300" />
              </div>
              <div className="flex mb-4 px-4 bg-gray-50 rounded border border-gray-200">
                <FormRow type="email" placeholder="Email" name="email" />
                <MdAlternateEmail className="h-6 w-6 ml-4 my-auto text-gray-300" />
              </div>
              <div className="flex mb-6 px-4 bg-gray-50 rounded border border-gray-200">
                <FormRow
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                />
                <button className="ml-4">
                  <FiEye className="h-6 w-6 my-auto text-gray-300" />
                </button>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="flex mb-6 px-4 bg-gray-50 rounded border border-gray-200">
                  <FormRow
                    type="confirmPassword"
                    placeholder="Confirm password"
                    name="confirmPassword"
                  />
                  <button className="ml-4">
                    <FiEye className="h-6 w-6 my-auto text-gray-300" />
                  </button>
                </div>
              </div>
              <div className="float-left mb-8 ">
                <label className="inline-flex text-xs">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">
                    I agree to{" "}
                    <a className="underline hover:text-gray-500" href="/about">
                      Police privacy
                    </a>{" "}
                    and{" "}
                    <a className="underline hover:text-gray-500" href="/about">
                      Terms of Use
                    </a>
                  </span>
                </label>
              </div>
              <BtnSubmit title="Sign Up Now" />

              <p className="my-6 text-xs text-gray-400 text-center font-semibold">
                or continue with
              </p>
              <BtnSocial title="Sign Up with Facebook" image={facebookSign} />
              <BtnSocial title="Sign Up with Google" image={googleSign} />

              <div className="w-full mt-12 mx-auto text-center">
                <p className="text-sm">
                  Already have an account?{" "}
                  <a
                    className="inline-block text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none"
                    href="/login"
                  >
                    Sign in now
                  </a>
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs  text-center">
                <a className="underline hover:text-blue-500" href="#">
                  Police privacy
                </a>{" "}
                and{" "}
                <a className="underline hover:text-blue-500" href="#">
                  Terms of Use
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
