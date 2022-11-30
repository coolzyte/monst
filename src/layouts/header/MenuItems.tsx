import Dropdown from "./Dropdown";

import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
.drop-down-menu {

    visibility: hidden;
    position: absolute;
    left: 0;
    margin-top: 3.5rem; 
    width: max-content;
    border-radius: 0.5rem;
    border-width: 1px;
    border-color: rgba(226,232,240,10); 
    background-color: rgba(255,255,255,10);
    padding-top: 1rem;
    padding-bottom: 1rem;
    opacity: 0;
    transition-property: all;
   cubic-bezier(.4,0,.2,1);
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    transition-duration: .5s;
}

nav li.has-child:after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  width: 4px;
  height: 4px;
  border-radius: 10px;
  background-color: rgba(148,163,184,10);
}

.group:hover .drop-down-menu {
visibility: visible;
margin-top: 1rem;
opacity: 1;
}
   
`;

const MenuItems = ({ items }) => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <Wrapper>
      <li
        className={`${showLinks ? "group" : ""} relative pt-4 pb-4 has-child`}
      >
        {items.submenu ? (
          <>
            <button
              className="text-sm font-semibold text-gray-700 hover:text-gray-500"
              type="button"
              aria-haspopup="menu"
              onClick={() => setShowLinks((prev) => !prev)}
            >
              {items.title}
            </button>
            <Dropdown submenus={items.submenu} />
          </>
        ) : (
          <Link
            className="text-sm font-semibold text-gray-700 hover:text-gray-500 cursor-pointer"
            to={items.url}
          >
            {items.title}
          </Link>
        )}
      </li>
    </Wrapper>
  );
};

export default MenuItems;
