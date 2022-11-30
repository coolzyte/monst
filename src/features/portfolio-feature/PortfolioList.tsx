import { img10, img11, img12, img13, img9 } from "../../assets/images";
import { BtnPrimary } from "../../components";

type portfolioListProps = {
  reverseRow: any;
  title: string;
  text: string;
};

const PortfolioList = ({ reverseRow }: portfolioListProps) => {
  return (
    <div
      className={`flex flex-wrap -mx-3 mb-6 lg:mb-0 ${
        reverseRow ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-full lg:w-1/2 flex flex-wrap px-3 mb-6 lg:md-0">
        <div className="hover-up-5 w-1/2 h-64 pr-3 pb-3">
          <img
            className="h-full object-cover rounded"
            src={img10}
            alt="Monst"
          />
        </div>

        <div className="hover-up-5 w-1/2 h-64 pl-3 pb-3">
          <img
            className="h-full object-cover rounded"
            src={img11}
            alt="Monst"
          />
        </div>
        <div className="hover-up-5 w-1/2 h-64 pr-3 pt-3">
          <img
            className="h-full object-cover rounded"
            src={img12}
            alt="Monst"
          />
        </div>
        <div className="hover-up-5 w-1/2 h-64 pl-3 pt-3">
          <img
            className="h-full object-cover rounded"
            src={img13}
            alt="Monst"
          />
        </div>
      </div>

      <div
        className="hover-up-5 w-full lg:w-1/2 px-3 relative"
        style={{ visibility: "visible" }}
      >
        <img
          className="lg:h-[32rem] w-full object-cover rounded"
          src={img9}
          alt="Monst"
        />

        <div className="absolute text-center bg-white rounded top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] px-4 py-12">
          <div className="w-full flex place-content-center">
            <p className="capitalize font-bold text-2xl text-center">
              Web Design
            </p>
          </div>
          <div className="w-full flex place-content-center">
            <p className="font-sans text-center mt-5 mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              eveniet rem fugiat deserunt molestias.
            </p>
          </div>
          <BtnPrimary title="View details" path="/blog-single" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
