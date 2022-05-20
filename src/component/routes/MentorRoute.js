import { useRoutes } from "react-router-dom";
import MentorBatch from "../pages/mentorModule/MentorBatch";
import MentorDashboard from "../pages/mentorModule/MentorDashboard";

const MentorRoute = () => {
  const routesObj = [
    {
      element: <MentorBatch />,
      path: "/mentorBatch", 
    },
    {
      element: <MentorDashboard />,
      path: "/mentorDashboard",
    },
  ];
  const routes = useRoutes([...routesObj]);
  return routes;
};

export default MentorRoute;
