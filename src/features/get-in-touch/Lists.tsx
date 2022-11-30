import List from "./List";
import { items } from "./data";

const Lists = () => {
  return (
    <div className="flex flex-wrap -mx-3 text-center">
      {items.map((item) => {
        return <List key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Lists;
