import { HiArrowUpRight } from "react-icons/hi2";
import "./ButtonStyles.css";

interface PrimaryButtonProps {
  buttonName: String;
}
const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <a href="/" className="no-decoration">
      <div className="cta-button all-jobs-button">
        <h3 className="cta-button-name">{props.buttonName}</h3>
        <span className="cta-button-dot"></span>
        <HiArrowUpRight className="cta-button-arrow" />
      </div>
    </a>
  );
};

export default PrimaryButton;
