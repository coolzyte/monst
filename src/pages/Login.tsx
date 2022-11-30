import { FiEye } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { facebookSign, googleSign } from "../assets/brand";
import { spaceImage } from "../assets/images";
import { FormRow } from "../components";
import { BtnSocial, BtnSubmit } from "../components/Button";

const Login = () => {
  return (
    <section className="relative pb-20">
      <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto">
        <div
          className="flex items-center h-full"
          style={{ visibility: "visible" }}
        >
          <img className="lg:max-w-lg mx-auto" src={spaceImage} alt="Monst" />
        </div>
      </div>
      <div className="container">
        <div className="relative flex flex-wrap pt-12">
          <div className="lg:flex lg:flex-col w-full lg:w-1/2 py-6 lg:pr-20">
            <div
              className="w-full max-w-lg mx-auto lg:mx-0 my-auto"
              style={{ visibility: "visible" }}
            >
              <span className="text-sm text-gray-400">Sign In</span>
              <h4 className="mb-6 text-3xl">Join our community</h4>

              <div className="flex mb-4 px-4 bg-blueGray-50 rounded border border-gray-200">
                <FormRow type="email" placeholder="Username" name="email" />
                <MdAlternateEmail className="h-6 w-6 ml-4 my-auto text-gray-300" />
              </div>

              <div className="flex mb-6 px-4 bg-blueGray-50 rounded border border-gray-200">
                <FormRow
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                />
                <button className="ml-4">
                  <FiEye className="h-6 w-6 my-auto text-gray-300" />
                </button>
              </div>
              <div
                className="float-left mb-6"
                style={{ visibility: "visible" }}
              >
                <label className="inline-flex text-xs">
                  <input type="checkbox" className="form-checkbox" checked="" />
                  <span className="ml-2">
                    I agree to{" "}
                    <a className="underline hover:text-blue-500" href="/about">
                      Police privacy
                    </a>{" "}
                    and{" "}
                    <a className="underline hover:text-blue-500" href="/about">
                      Terms of Use
                    </a>
                  </span>
                </label>
              </div>

              <BtnSubmit title="Sign In" />

              <p className="my-6 text-xs text-blueGray-400 text-center font-semibold">
                or continue with
              </p>
              <BtnSocial title="Sign In with Facebook" image={facebookSign} />
              <BtnSocial title="Sign In with Google" image={googleSign} />
            </div>

            <div className="w-full mt-12 mx-auto text-center">
              <p className="text-sm">
                Don't Have an Account?
                <a
                  className="inline-block text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none"
                  href="/register"
                  style={{ visibility: "visible" }}
                >
                  Sign Up now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
