import { useQuery } from "react-query";
import JobsList from "../../components/JobsList";
import "./FeaturedJobStyles.css";
import axios from "axios";

interface FeaturedJobsProps {}
export interface Job {
  id: Number;
  title: string;
  company: string;
  minExperience: Number;
  maxExperience: Number;
  location: string;
  workType: string;
  minSalary: Number;
  maxSalary: Number;
  tags: string[];
  iconUrl: any;
  posted: string;
}

export const FeaturedJobs: React.FC<FeaturedJobsProps> = () => {
  const fetchJobs = async () => {
    const { data } = await axios.get("http://3.110.88.78:5000/jobs/featured");
    return data;
  };

  const { data: jobs, error, isLoading, isError } = useQuery("jobs", fetchJobs);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  // Create random data for jobs.
  return (
    <main className="flex-column justify-space-between home-main">
      <h3 className="featured-job-title">Featured Job Posts</h3>
      (isError)? <div>Error</div>:(isLoading)?<div>Loading...</div>:
      <JobsList jobs={jobs} />
      {/* Add cards displaying jobs */}
    </main>
  );
};
