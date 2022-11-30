import { error2 } from "../assets/images";
import { BtnAccent, BtnPrimary } from "../components";

const Error = () => {
  return (
    <>
      <section className="pt-20 pb-32">
        <div className="container text-center">
          <img
            className="mb-4 mx-auto md:max-w-md md:mb-12"
            src={error2}
            alt="Monst"
            style={{ visibility: "visible" }}
          />
          <span
            className="text-4xl text-blue-500 font-bold font-poppins"
            data-wow-delay=".2s"
            style={{ visibility: "visible" }}
          >
            Error 404
          </span>
          <h2
            className="mb-2 text-4xl font-bold font-poppins"
            style={{ visibility: "visible" }}
          >
            Something went wrong!
          </h2>
          <p className="mb-6" style={{ visibility: "visible" }}>
            Sorry, but we are unable to open this page.
          </p>
          <div className="space-x-2">
            <BtnPrimary title="Go back to Homepage" path="/" type="button" />
            <BtnAccent title="Contact Us" path="/contact" type="button" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
