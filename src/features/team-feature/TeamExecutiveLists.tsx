import { teamData } from "./data";
import TeamExecutiveList from "./TeamExecutiveList";

const TeamExecutiveLists = () => {
  const dataForDisplay = teamData.slice(0, 4);
  return (
    <div className="flex flex-wrap">
      {dataForDisplay.map((item) => {
        return <TeamExecutiveList key={item.id} {...item} />;
      })}
    </div>
  );
};

export default TeamExecutiveLists;
