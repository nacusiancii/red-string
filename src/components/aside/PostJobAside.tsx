import SecondaryButton from "../buttons/SecondaryButton";
import "./PostJobAsideStyles.css";

interface PostJobAsideProps {}

const PostJobAside: React.FC<PostJobAsideProps> = () => {
  return (
    <aside className="aside-container">
      <div>
        <div
          className="flex-column justify-space-between align-center post-job-card"
          style={{ padding: "1.5rem" }}
        >
          <div
            className="flex-column justify-space-between align-center"
            style={{ height: "11.5rem" }}
          >
            <div
              className="flex-column justify-space-between"
              style={{ height: "7.5rem" }}
            >
              <h3 className="card-title text-center">Post a Job Today</h3>
              <p className="text-center card-description">
                Everyday, many potential clients visit our website. Hire
                exclusive talent by posting your job today.
              </p>
            </div>
            <SecondaryButton buttonName={"Post a Job"} width="7.2rem" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default PostJobAside;
