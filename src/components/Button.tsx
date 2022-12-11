import { Link } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.a`
  margin-right: 0.5rem;
  display: inline-block;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: rgba(191, 219, 254, 10);
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  line-height: 1;
  letter-spacing: 0.025em;
  color: rgba(59, 130, 246, 10);

  &:hover {
    border-color: rgba(147, 197, 253, 10);
    color: rgba(29, 78, 216, 10);
  }
  &.hover-up:hover {
    transform: translateY(-2px);
    transition: 0.3s;
  }
`;

const WrapperBtnPrimary = styled(Wrapper)`
  margin-right: 0;
  background-color: rgba(96, 165, 250, 10);
  letter-spacing: 0.025em;

  color: rgba(255, 255, 255, 10);

  &:hover {
    border-color: transparent;
    color: rgba(255, 255, 255, 10);
    background-color: rgba(59, 130, 246, 10);
  }
`;

type ButtonProps = {
  title: string | undefined;
  path?: string;
  type?: "button" | "reset" | "submit" | undefined;
  image?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export const BtnAccent = ({ title, path }: ButtonProps) => {
  return (
    <Wrapper className="hover-up" href={path}>
      {title}
    </Wrapper>
  );
};

export const BtnPrimary = ({ type, title, path, onClick }: ButtonProps) => {
  return (
    <WrapperBtnPrimary
      type={type}
      className="hover-up"
      href={path}
      onClick={onClick}
    >
      {title}
    </WrapperBtnPrimary>
  );
};

export const BtnBrowse = () => {
  return (
    <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-gray-500 hover:bg-blue-600 rounded cursor-pointer">
      {" "}
      Browse
    </span>
  );
};

export const BtnSubmit = ({ title }: ButtonProps) => {
  return (
    <button
      className="transition duration-300 ease-in-out transform hover:-translate-y-1 block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
      type="submit"
    >
      {title}
    </button>
  );
};

export const BtnSocial = ({ title, image, type, path }: ButtonProps) => {
  return (
    <Link
      className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center w-full px-4 py-3 mb-2 text-xs text-gray-500 font-semibold leading-none border border-gray-200 hover:bg-gray-50 rounded"
      to={path}
      type={type}
    >
      <img className="h-6 pr-10" src={image} />
      <span>{title}</span>
    </Link>
  );
};
