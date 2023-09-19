import { useNavigate } from "react-router-dom";
import { AiFillApple } from "react-icons/ai";
export const Header = ({ heading }) => {
  const navigate = useNavigate();
  return (
    <div className="relative my-14">
      <h1 className="text-6xl font-light text-center text-primary">
        {heading}
      </h1>
      <div className="absolute top-0 left-12">
        <img
          onClick={() => navigate(-1)}
          className="cursor-pointer"
          src="/asessts/back-button.svg"
          alt="back-button"
        />
      </div>
    </div>
  );
};
