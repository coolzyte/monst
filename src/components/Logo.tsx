import { Link } from "react-router-dom";
import { logo } from "../assets/brand";

const Logo = () => {
  return (
    <Link className="text-3xl font-semibold leading-none" to="/">
      <img className="h-10" src={logo} alt="Monst" />
    </Link>
  );
};

export default Logo;
