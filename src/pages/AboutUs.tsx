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
      <ReportLists />
      <HowWeWork />
      <TeamLists />
      <ContactForm />
      <section className="py-20 bg-blue-500">
        <Subscribe color="color" />
      </section>
    </>
  );
};

export default AboutUs;
