import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import JobDetails from "./pages/job/JobDetails";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const AppRouter: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default AppRouter;
