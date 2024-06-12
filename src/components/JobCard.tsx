import { Job } from "../pages/home/FeaturedJobs";
import SecondaryButton from "./buttons/SecondaryButton";

interface JobCard {
  index: number;
  jobItem: Job;
}

const JobCard: React.FC<JobCard> = ({ jobItem, index }) => {
  return (
    <div key={index} className="flex-column justify-space-between job-card">
      <div className="flex-column justify-space-between job-body">
        <div className="flex-row">
          <img
            src={jobItem.iconUrl}
            alt={`${jobItem.company} logo`}
            className="job-icon"
          />
          <div className="flex-column justify-center">
            <h4 className="job-title">{jobItem.title}</h4>
            <p className="job-company">{jobItem.company}</p>
          </div>
        </div>
        <div className="flex-row" style={{ flexWrap: "wrap" }}>
          <span className="job-detail">{jobItem.location}</span>
          <span className="job-detail">{jobItem.workType}</span>
          <span className="job-detail">{`Experience: ${jobItem.minExperience}-${jobItem.maxExperience} years`}</span>
          <span className="job-detail">{` ${jobItem.minSalary} - ${jobItem.maxSalary} L`}</span>
        </div>
        <div className="job-tags">
          {jobItem.tags.map((tag, i) => (
            <span key={i} className="job-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-row justify-space-between">
        <div>
          <span>Posted: </span>
          <span>{jobItem.posted}</span>
        </div>
        <div>
          <SecondaryButton
            buttonName="Apply Now"
            width="7.5rem"
            href={"/job/" + jobItem.id}
          />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
