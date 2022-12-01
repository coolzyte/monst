import { SectionHead } from "../../components";
import { teamData } from "./data";
import TeamList from "./TeamList";

const TeamLists = () => {
  return (
    <section className="py-20">
      <div className="container text-center">
        <div className="max-w-lg mx-auto mb-16">
          <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mb-2">
            About Our Expert
          </span>
          <SectionHead
            title="Entrust Your Project To Our"
            blueTitle="Specialists"
          />

          <p className="leading-loose">
            Our IT services converge business and technology experts to help to
            manage business categories
          </p>
        </div>
        <div className="flex flex-wrap -mx-5">
          {teamData.map((data) => {
            return <TeamList key={data.id} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamLists;
