import { FeaturedJobs } from "./FeaturedJobs";
import NavBar from "../../components/navbar/NavBar";
import PostJobAside from "../../components/aside/PostJobAside";
import DreamAnimation from "../../components/animations/Dream";
import HomeHeader from "./header/HomeHeader";
import "./HomeStyles.css";
import JobRolesCarouselV2 from "./marquee/JobRolesCarouselV2";

const Home: React.FC = () => {
  return (
    <div className="App">
      <DreamAnimation />
      <NavBar />
      <HomeHeader />
      <JobRolesCarouselV2 />
      <div className="flex-row justify-center home-container">
        <FeaturedJobs />
        <PostJobAside />
      </div>
    </div>
  );
};

export default Home;
