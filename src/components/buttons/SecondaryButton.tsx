import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "./ButtonStyles.css";

interface SecondaryButtonProps {
  buttonName: string;
  width?: string;
  href?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  buttonName,
  width = "auto",
  href = "/",
}) => {
  return (
    <Link to={href} className="no-decoration">
      <div
        className="cta-button secondary-button"
        style={{
          width: width,
        }}
      >
        <h3 className="cta-button-name text-color">{buttonName}</h3>
        <span className="cta-button-dot"></span>
        <HiArrowUpRight className="cta-button-arrow" />
      </div>
    </Link>
  );
};

export default SecondaryButton;
