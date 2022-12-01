import { Badge, Breadcrumb, SectionHead } from "../components";
import { GetInTouch } from "../features/get-in-touch";
import { TeamExecutiveLists, TeamLists } from "../features/team-feature";

const Team = () => {
  return (
    <>
      <Breadcrumb title="Our Team" center="center" />
      <section className="py-20 bg-blue-50">
        <div className="container">
          <div className="max-w-lg mx-auto mb-12 text-center">
            <Badge title="Our Team Leader" />

            <SectionHead
              title="Meet Your"
              blueTitle="Experts"
              secondTitle="Team Member"
            />
            <p>Our Customers are Happy With Our Services.</p>
          </div>
          <TeamExecutiveLists />
        </div>
      </section>
      <TeamLists />
      <GetInTouch />
    </>
  );
};

export default Team;
