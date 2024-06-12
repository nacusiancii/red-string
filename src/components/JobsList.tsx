import { Job } from "../pages/home/FeaturedJobs";
import SecondaryButton from "./buttons/SecondaryButton";
import JobCard from "./JobCard";
import "./JobsListStyles.css";
interface JobsListProps {
  jobs: Job[];
}

const JobsList: React.FC<JobsListProps> = ({ jobs }) => {
  return (
    <div className="flex-column justify-space-between job-card-list">
      {jobs.map((jobItem, index) => (
        <JobCard jobItem={jobItem} index={index} />
      ))}
    </div>
  );
};

export default JobsList;
