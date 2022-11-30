import { blobMap, intersect } from "../assets/images";
import {
  DashboardImage,
  Hero,
  SimpleSolution,
  WhyChooseUs,
} from "../features/home-feature";
import { PriceLists } from "../features/price-plan-feature";
import { HowWeWork } from "../features/how-we-work-feature";
import { ReportLists } from "../features/report-feature";
import { Subscribe } from "../features/subscribe-feature";

const Home = () => {
  return (
    <>
      <section
        className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-24"
        style={{ backgroundImage: `url(${intersect})` }}
      >
        <Hero />
        <DashboardImage />
        <ReportLists />
      </section>
      <WhyChooseUs />
      <HowWeWork />
      <SimpleSolution />
      <PriceLists background />
      <section
        className="py-20 bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${blobMap})` }}
      >
        <Subscribe />
      </section>
    </>
  );
};

export default Home;
