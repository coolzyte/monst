import { dashboard, pattern } from "../../assets/images";

const DashboardImage = () => {
  return (
    <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
      <img src={pattern} alt="Monst" />
      <div
        className="absolute"
        style={{ top: "9%", left: "14%", width: "72%", height: "66%" }}
      >
        <img
          className="jump rounded wow animate__animated animate__fadeIn animated animated"
          src={dashboard}
          alt="Monst"
          style={{ visibility: "visible" }}
        />
      </div>
    </div>
  );
};

export default DashboardImage;
