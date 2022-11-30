import { Form, SectionHead } from "../../components";
import Lists from "./Lists";

const GetInTouch = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-2xl lg:max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <SectionHead title="Get in touch!" />

            <p>We will be glad to hear from you</p>
          </div>

          <Lists />

          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
