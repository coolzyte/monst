import { BtnAccent, BtnPrimary } from "../../components";

const PriceList = ({
  plan,
  price,
  domain,
  email,
  database,
  storage,
  image,
  icon,
}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6 last:w-full last:lg:w-1/3">
      <div
        className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white  rounded shadow-lg"
        style={{ visibility: "visible" }}
      >
        <img className="h-20 mb-6 mx-auto" src={image} alt="Monst" />
        <h3 className="mb-2 text-4xl font-bold font-poppins">{plan}</h3>
        <span className="text-4xl text-blue-500 font-bold font-poppins">
          ${price}
        </span>
        <p className="mt-2 mb-8 text-gray">user per month</p>
        <div className="flex flex-col items-center mb-8">
          <ul className="text-gray-400">
            <li className="flex mb-3">
              {icon}
              <span>{email}</span>
            </li>
            <li className="flex mb-3">
              {icon}
              <span>{database}</span>
            </li>
            <li className="flex mb-3">
              {icon}
              <span>{domain}</span>
            </li>
            <li className="flex">
              {icon}
              <span>{storage}</span>
            </li>
          </ul>
        </div>
        <div className="space-x-3">
          <BtnPrimary title="Start Free Trial" path="/pricing" />
          <BtnAccent title="Purchase" path="/pricing" />
        </div>
      </div>
    </div>
  );
};

export default PriceList;
