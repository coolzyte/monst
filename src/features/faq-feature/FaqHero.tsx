import { FaqLists } from ".";
import { eatingImage, intersect } from "../../assets/images";
import { GoSearch } from "react-icons/go";
import Accordion from "./Accordion";

const FaqHero = () => {
  return (
    <section
      className="pt-12 pb-20 lg:bg-contain bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${intersect})` }}
    >
      <div className="container">
        <img
          className="mx-auto sm:max-w-sm mb-10 "
          data-wow-delay=".1s"
          src={eatingImage}
          alt="Monst"
        />

        <form className="flex justify-center max-w-3xl mx-auto mb-16 ">
          <input
            className="w-2/3 p-5 text-xs placeholder-blueGray-800 font-bold font-poppins bg-white focus:border-gray-500 focus:outline-none rounded-l"
            placeholder="Search, find any question you want to ask..."
          />
          <button className="pr-4 rounded-r bg-white text-blue-600">
            <GoSearch />
          </button>
        </form>

        <FaqLists />

        <Accordion />
      </div>
    </section>
  );
};

export default FaqHero;
