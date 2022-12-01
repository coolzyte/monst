import { HiOutlineLightBulb } from "react-icons/hi";
import { BsPatchCheck } from "react-icons/bs";
import { MdOutlineGroups } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import CountUp from "react-countup";

export const reportList = [
  {
    id: 1,
    icon: <MdOutlineGroups />,
    number: <CountUp end={950} enableScrollSpy />,
    title: "Annual Partner",
  },
  {
    id: 2,
    icon: <AiOutlineFundProjectionScreen />,
    number: <CountUp end={58} enableScrollSpy />,
    title: "Completed Projects",
  },
  {
    id: 3,
    icon: <BsPatchCheck />,
    number: <CountUp end={500} enableScrollSpy />,
    title: "Happy Customers",
  },
  {
    id: 4,
    icon: <HiOutlineLightBulb />,
    number: <CountUp end={300} enableScrollSpy />,
    title: "Research Work",
  },
];
