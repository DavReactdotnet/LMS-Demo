import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { adminMentorGetAll } from "../../services/utils/admin-mentor/AdminMentorServices";
import {
  batchGetAll,
  batchSubmit,
} from "../../services/utils/batch/BarchServices";
import { categoryGet, technologirsGet } from "../../services/utils/commonApi";
import DatePickerComponent from "../atom/DatePickerComponent";
import InputComponent from "../atom/InputComponent";
import MultipleSelectCheckmarks from "../atom/MultiSelectDropdown";
import SimpleDropdown from "../atom/DropDown";
import ModalComponent from "../molicules/ModalComponent";
// import TechnicalSkills from "../pages/employee/technicalSkills/TechnicalSkills";

function BatchModal({
  setOpenBatch,
  getTableData,
  setDefaultFormData,
  defaultFormData,
}) {
  const [error, setError] = useState({
    name: false,
    mentorName: false,
    technologies: false,
    startDate: false,
    startDateString: false,
    endDate: false,
    endDateString: false,
  });
  const [mentor, setMentor] = useState({});
  const [status, setStatus] = useState({});

  useEffect(() => {
    getOptions();
    console.log("first", options);
  }, []);

  const [options, setOptions] = useState([]);
  const [mentorName, setMentorName] = useState([]);
  // const [skillOpt, setSkillOpt] = useState([
  //   "To be started",
  //   "in progress",
  //   "completed",
  // ]);

  useEffect(() => {
    getOptions();
    getMentorName();
  }, []);

  const statusOpt = [
    {
      value: "To be started",
    },
    {
      value: "in progress",
    },
    {
      value: "completed",
    },
  ];

  const getOptions = async () => {
    const { data, errRes } = await categoryGet();
    console.log(data.data, "data");
    if (data.data) {
      const tempOption = [];
      data.data.map((item, index) => {
        tempOption.push({
          value: item.sName,
          id: item.index,
        });
      });
      setOptions(tempOption);
    }
  };

  const getMentorName = async () => {
    const { data } = await adminMentorGetAll();

    if (data.data) {
      const tempOption = [];
      data.data.map((item, index) => {
        tempOption.push({
          value: item.mentorName,
          id: item.empId,
        });
      });
      console.log(tempOption, "op");
      setMentorName(tempOption);
    }
  };

  const modalValue = "add";

  const handleSubmit = async () => {
    const payload = {
      batchName: defaultFormData.name,
      batchId: defaultFormData.batchId,
      empId: mentor.id,
      technologies: defaultFormData.technologies,
      startDate: defaultFormData.startDateString,
      endDate: defaultFormData.endDateString,
      status: status.value,
    };
    const { data, errRes } =
      modalValue === "add"
        ? await batchSubmit(payload)
        : await batchSubmit(payload);
    if (data) {
      await getTableData();
    } else if (errRes) {
      console.log(errRes.message);
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <div>
      <ModalComponent
        onSubmitBtnClick={handleSubmit}
        modalWidth={"450px"}
        submitBtnText="Create"
        modalTitle={"Add new batch"}
        showPreviousBtn={false}
        onCloseIconClick={() => setOpenBatch(false)}
      >
        <Box className="p-5 overflowY-scroll h-550">
          <p className="mb-0 ">Batch Name</p>
          <div className="mb-4">
            <InputComponent
              value={defaultFormData.name}
              onChange={(e) => {
                setDefaultFormData({
                  ...defaultFormData,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <p className="mb-0 ">Batch Id</p>
          <div className="mb-4">
            <InputComponent
              value={defaultFormData.batchId}
              onChange={(e) => {
                setDefaultFormData({
                  ...defaultFormData,
                  batchId: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-4">
            <p className="mb-0">Mentor Name</p>
            <SimpleDropdown
              value={mentor}
              onChange={(e, val) => {
                setMentor(val);
              }}
              options={mentorName}
              modalWidth="100%"
            />
            {/* <InputComponent
              value={defaultFormData.mentorName}
              onChange={(e) => {
                setDefaultFormData({
                  ...defaultFormData,
                  mentorName: e.target.value,
                });
              }}
            /> */}
          </div>

          <div className="mb-4">
            <p className="mb-0">Technologies</p>
            <MultipleSelectCheckmarks
              value={defaultFormData.technologies}
              onChange={(e, val) => {
                const tempId = [];
                const tempSkill = [];
                val.map((item) => {
                  // tempId.push(item.sName.toString());
                  tempSkill.push(item.value);
                });
                console.log(tempSkill);
                setDefaultFormData({
                  ...defaultFormData,
                  technologies: tempSkill,
                  skillsId: tempId,
                });
              }}
              options={options}
              modalWidth="100%"
            />
            {/* <InputComponent
              value={defaultFormData.technologies}
              onChange={(e) => {
                let array = [];
                array.push(e.target.value);
                setDefaultFormData({
                  ...defaultFormData,
                  technologies: array,
                });
              }}
            /> */}
          </div>
          <div className="mb-4">
            <p className="mb-0">Start Date</p>
            <DatePickerComponent
              style={{ width: "100%" }}
              value={defaultFormData.startDate}
              onChange={(date, dateString) => {
                console.log(date);
                setDefaultFormData({
                  ...defaultFormData,
                  startDate: date,
                  startDateString: dateString,
                });
              }}
            />
          </div>
          <div className="mb-4">
            <p className="mb-0">End Date</p>

            <DatePickerComponent
              value={defaultFormData.endDate}
              onChange={(date, dateString) => {
                console.log(dateString);
                setDefaultFormData({
                  ...defaultFormData,
                  endDate: date,
                  endDateString: dateString,
                });
              }}
              style={{ width: "100%" }}
            />
          </div>

          <div>
            <p className="mb-0">Status</p>

            <SimpleDropdown
              value={status}
              onChange={(e, val) => {
                setStatus(val);
              }}
              options={statusOpt}
              modalWidth="100%"
            />
          </div>
        </Box>
      </ModalComponent>
    </div>
  );
}

export default BatchModal;
