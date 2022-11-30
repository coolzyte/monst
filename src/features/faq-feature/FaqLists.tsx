import { faqListData } from "./data";
import FaqList from "./FaqList";

const FaqLists = () => {
  return (
    <div className="flex flex-wrap justify-between -mx-3 mb-12">
      {faqListData.map((item) => {
        return <FaqList key={item.id} {...item} />;
      })}
    </div>
  );
};

export default FaqLists;
