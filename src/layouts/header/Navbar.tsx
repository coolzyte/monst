import { menuItems } from "./utils/headerLinks";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <ul
      className="hidden
      lg:flex lg:items-center lg:w-auto lg:space-x-12 z-10"
    >
      {menuItems.map((menu, index) => {
        return <MenuItems key={index} items={menu} />;
      })}
    </ul>
  );
};

export default Navbar;
