import { ContactForm } from "../features/contact-feature";
import { GetInTouch } from "../features/get-in-touch";
import { PriceLists, PricingHero } from "../features/price-plan-feature";
import { ReportLists } from "../features/report-feature";
import { Subscribe } from "../features/subscribe-feature";

const Pricing = () => {
  return (
    <>
      <PricingHero />
      <ReportLists />
      <PriceLists />
      <ContactForm />
      <section className="py-20 bg-blue-500">
        <Subscribe color="color" />
      </section>
      <GetInTouch />
    </>
  );
};

export default Pricing;
