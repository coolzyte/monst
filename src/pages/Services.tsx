import { Breadcrumb } from "../components";
import { ContactForm } from "../features/contact-feature";
import { HowWeWork } from "../features/how-we-work-feature";
import { PriceLists } from "../features/price-plan-feature";
import { ReportLists } from "../features/report-feature";
import { ServicesHero } from "../features/services-feature";
import { Subscribe } from "../features/subscribe-feature";

const Services = () => {
  return (
    <>
      <Breadcrumb title="Our Services" page="Web Development" />
      <section className="pt-12">
        <ServicesHero />
      </section>
      <ReportLists />
      <section className="py-20 bg-blue-50">
        <HowWeWork />
      </section>
      <section className="pt-20 pb-16 xl:bg-contain bg-top bg-no-repeat">
        <PriceLists />
      </section>
      <section className="pb-20">
        <ContactForm />
      </section>
      <section className="py-20 bg-blue-500">
        <Subscribe color="color" />
      </section>
    </>
  );
};

export default Services;
