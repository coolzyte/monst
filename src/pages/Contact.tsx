import { ContactForm, ContactHero } from "../features/contact-feature";
import { Subscribe } from "../features/subscribe-feature";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <section className="py-20 bg-blue-500">
        <Subscribe color="color" />
      </section>
    </>
  );
};

export default Contact;
