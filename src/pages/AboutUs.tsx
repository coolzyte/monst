import { AboutHero } from "../features/about-feature";
import { ContactForm } from "../features/contact-feature";
import { HowWeWork } from "../features/how-we-work-feature";
import { ReportLists } from "../features/report-feature";
import { Subscribe } from "../features/subscribe-feature";
import { TeamLists } from "../features/team-feature";

const AboutUs = () => {
  return (
    <>
      <AboutHero />

      <section className="pt-6 pb-2">
        <ReportLists />
      </section>
      <section className="py-20 bg-blue-50">
        <HowWeWork />
      </section>
      <section className="py-20">
        <TeamLists />
      </section>

      <ContactForm />

      <section className="py-20 bg-blue-500">
        <Subscribe color="color" />
      </section>
    </>
  );
};

export default AboutUs;
