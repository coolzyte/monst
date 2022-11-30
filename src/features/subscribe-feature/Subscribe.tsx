import BlueInput from "./BlueInput";
import WhiteInput from "./WhiteInput";

type subscribeProps = {
  color?: string;
};
const Subscribe = ({ color }: subscribeProps) => {
  return (
    <div className="container">
      <div className="max-w-xl mx-auto text-center">
        <h2
          className={`mb-4 text-3xl lg:text-3xl font-bold font-poppins ${
            color ? "text-white" : "text-gray-800"
          }`}
        >
          <span>Subscribe now to </span>
          <span className={color ? "text-blue-200" : "text-blue-500"}>
            Our Newsletter
          </span>{" "}
          <br />
          <span>and get the Coupon code.</span>
        </h2>

        <p className="mb-8 text-white" style={{ visibility: "visible" }}>
          All your information is completely confidential
        </p>
        {color ? <BlueInput /> : <WhiteInput />}
      </div>
    </div>
  );
};

export default Subscribe;
