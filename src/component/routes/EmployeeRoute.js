

import { useRoutes } from "react-router-dom";
import MainEmployee from "../pages/employee/EmployeeLayout";
import AddressDetails from "../pages/employee/addressDetails/AddressDetails";
import BankDetails from "../pages/employee/bankDetails/BankDetails";
import Contact from "../pages/employee/contact/Contact";
import EducationDetails from "../pages/employee/educationDetails/EducationDetails";
import Experience from "../pages/employee/experience/Experience";
import SecondaryInfo from "../pages/employee/secondaryInfo/SecondaryInfo";
import TechnicalSkills from "../pages/employee/techSkills/TechSkills";

const EmployeeRoute = ({
  empPayload,
  setEmpPayload,
  handleNextClick,
  handlePreviousClick,
  completedSteps,
  totalSteps,
  submitPage,
  setSubmitPage,
  allStepsCompleted,
}) => {
  const routesObj = [
    {
      element: (
        <MainEmployee
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
        />
      ),
      path: "/primaryInfo",
    },
    {
      element: (
        <SecondaryInfo
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
        />
      ),
      path: "/secondaryInfo",
    },
    {
      element: (
        <EducationDetails
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
        />
      ),
      path: "/educationDetails",
    },
    {
      element: (
        <AddressDetails
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
        />
      ),
      path: "/addressDetails",
    },
    {
      element: (
        <BankDetails
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
        />
      ),
      path: "/bankDetails",
    },
    {
      element: (
        <TechnicalSkills
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
        />
      ),
      path: "/technicalSkills",
    },
    {
      element: (
        <Experience
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
        />
      ),
      path: "/experience",
    },
    {
      element: (
        <Contact
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
          completedSteps={completedSteps}
          totalSteps={totalSteps}
          submitPage={submitPage}
          setSubmitPage={setSubmitPage}
          allStepsCompleted={allStepsCompleted}
        />
      ),
      path: "/contact",
    },
  ];
  const routes = useRoutes([...routesObj]);
  return routes;
};

export default EmployeeRoute;
