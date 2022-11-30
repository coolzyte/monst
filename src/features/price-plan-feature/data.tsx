import { agency, enterprise, startup } from "../../assets/images";
import { HiOutlineCheckCircle } from "react-icons/hi";

export const data = [
  {
    id: 1,
    image: startup,
    plan: "Startup",
    price: "45.99",
    email: "3 Emails",
    database: "1 Database",
    domain: "Unlimited Domains",
    storage: "10 GB Storage",
    icon: <HiOutlineCheckCircle className="text-2xl font-bold mr-2" />,
  },
  {
    id: 2,
    image: agency,
    plan: "Agency",
    price: "65.99",
    email: "6 Emails",
    database: "4 Database",
    domain: "Unlimited Domains",
    storage: "35 GB Storage",
    icon: <HiOutlineCheckCircle className="text-2xl font-bold mr-2" />,
  },
  {
    id: 3,
    image: enterprise,
    plan: "Enterprise",
    price: "85.99",
    email: "12 Emails",
    database: "8 Database",
    domain: "Unlimited Domains",
    storage: "50 GB Storage",
    icon: <HiOutlineCheckCircle className="text-2xl font-bold mr-2" />,
  },
];
