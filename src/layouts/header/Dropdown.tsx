import { Link } from "react-router-dom";

const Dropdown = ({ submenus }) => {
  return (
    <ul className="drop-down-menu min-w-[200px] py-4">
      {submenus.map((submenu, index) => (
        <li key={index}>
          <Link
            className="block text-sm text-gray-600 hover:text-gray-400 py-2 px-7"
            to={submenu.url}
          >
            {submenu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
