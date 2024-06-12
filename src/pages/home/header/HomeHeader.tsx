import PrimaryButton from "../../../components/buttons/AllJobsButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import "./headerStyles.css";

interface HomeHeaderProps {}

const HomeHeader: React.FC<HomeHeaderProps> = () => {
  return (
    <header className="text-center header">
      <div className="flex-column align-center header-content">
        <h1 className="header-title">
          The <span className="highlight">Untearable Thread</span> Connecting{" "}
          <br />
          <span className="highlight">Startups</span> with{" "}
          <span className="highlight">Talent</span>
        </h1>
        <p className="header-description">
          Where dreams meet opportunity, stitching together startup stories with
          every connection made.
        </p>
        <div className="flex-row justify-center header-buttons">
          <SecondaryButton buttonName={"Post a Job"} width="7.2rem" />
          <PrimaryButton buttonName={"All Jobs"} />
        </div>
      </div>
    </header>
  );
};
export default HomeHeader;
