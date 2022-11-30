import { Form, SectionHead } from "../../components";

const ContactForm = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="max-w-md mb-8 mx-auto">
            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
              Contact Us
            </span>
            <SectionHead
              title="We will"
              blueTitle="be glad"
              secondTitle="to hear from you!"
            />
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
