import { useNavigate } from "react-router-dom";
export const Header = ({ heading, styles }) => {
  const navigate = useNavigate();
  return (
    <div className="relative my-14">
      <h1
        className={`text-6xl ${
          styles ? styles : "font-light"
        }  text-center text-primary`}
      >
        {heading}
      </h1>
      <div className="absolute -top-4  left-12">
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
