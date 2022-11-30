import { BiMap, BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";

export const items = [
  {
    id: 1,
    icon: <BiPhone />,
    title: "Phone",
    text: "+ 48 654-430-309",
    secondText: "+ 1 6532-430-309",
  },
  {
    id: 2,
    icon: <MdOutlineEmail />,
    title: "E-mail",
    text: "contact@monst.com",
    secondText: "pat@example.com",
  },
  {
    id: 3,
    icon: <BiMap />,
    title: "Address",
    text: "11567 E Broadview Dr",
    secondText: "Colorado(CO), 80117",
  },
];
