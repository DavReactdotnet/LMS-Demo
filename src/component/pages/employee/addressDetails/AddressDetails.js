
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SimpleDropdown from "../../../atom/SimpleDropdown";
import InputComponent from "../../../atom/InputComponent";
import { IconButton, Paper } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonComponent from "../../../atom/ButtonComponent";

function AddressDetails({
  empPayload,
  setEmpPayload,
  handleNextClick,
  handlePreviousClick,
}) {
  const [rawData, setrawData] = React.useState([
    {
      addressType: "",
      doorNo: "",
      street: "",
      locality: "",
      city: "",
      state: "",
      pin: "",
      landMark: "",
    },
  ]);
  const handleAddClick = () => {
    setrawData([
      ...rawData,
      {
        addressType: "",
        doorNo: "",
        street: "",
        locality: "",
        city: "",
        state: "",
        pin: "",
        landMark: "",
      },
    ]);
  };
  const handleChange = (name, i, e) => {
    let tempFromData = [...rawData];
    tempFromData[i].name = e.target.value;
    setrawData(tempFromData);
  };
  const handleDeleteClick = (i) => {
    const tempFormData = [...rawData];
    tempFormData.splice(i, 1);
    setrawData(tempFormData);
  };
  return (
    <div>
      <div className="m-5">
        {rawData.map((item, i, row) => (
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              onClick={() => {}}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  color: "#086288",
                  fontWeight: "600",
                  fontFamily: "Open Sans, Semibold",
                  fontSize: "32px",
                }}
              >
                Address type
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <div className="p-1 m-2 ">
                <div className="m-3 row d-felx justify-contect-center">
                  <div className="col-5">
                    <p className="mb-0">Address Type</p>
                    <InputComponent
                      value={rawData.educationType}
                      onChange={(e) => {
                        handleChange("educationType", i, e);
                      }}
                    />
                  </div>
                  <div className="col-5">
                    <p className="mb-0">Door No.</p>
                    <InputComponent
                      value={rawData.yop}
                      onChange={(e) => {
                        handleChange("educationType", i, e);
                      }}
                    />
                  </div>
                </div>
                <div className="m-3 row d-felx justify-contect-center">
                  <div className="col-5">
                    <p className="mb-0">Street</p>
                    <InputComponent
                      value={rawData.percentage}
                      onChange={(e) => {
                        handleChange("yop", i, e);
                      }}
                    />
                  </div>
                  <div className="col-5">
                    <p className="mb-0">Locality</p>
                    <SimpleDropdown
                      value={rawData.univName}
                      onChange={(e) => {
                        handleChange("percentage", i, e);
                      }}
                    />
                  </div>
                </div>
                <div className="m-3 row d-felx justify-contect-center">
                  <div className="col-5">
                    <p className="mb-0">City</p>
                    <InputComponent
                      value={rawData.InstituteName}
                      onChange={(e) => {
                        handleChange("univName", i, e);
                      }}
                    />
                  </div>
                  <div className="col-5">
                    <p className="mb-0">State</p>
                    <SimpleDropdown />
                  </div>
                </div>
                <div className="m-3 row d-felx justify-contect-center">
                  <div className="col-5">
                    <p className="mb-0">Pin Code</p>
                    <InputComponent
                      value={rawData.InstituteName}
                      onChange={(e) => {
                        handleChange("univName", i, e);
                      }}
                    />
                  </div>
                  <div className="col-5">
                    <p className="mb-0">Land Mark</p>
                    <SimpleDropdown />
                  </div>
                </div>
                <div className="w-100 d-flex justify-content-end">
                  {row.length === i + 1 ? (
                    <div>
                      <IconButton size="small" onClick={handleAddClick}>
                        <AddCircleOutlineIcon color="primary" />{" "}
                        <spam style={{ color: "blue" }}>Add</spam>
                      </IconButton>
                    </div>
                  ) : (
                    <div>
                      <IconButton
                        size="small"
                        onClick={() => handleDeleteClick(i)}
                      >
                        <DeleteIcon color="primary" />{" "}
                        <spam style={{ color: "blue" }}>Delete</spam>
                      </IconButton>
                    </div>
                  )}
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
        <div className="d-flex justify-content-between ">
          <div>
            <ButtonComponent
              label="Previous"
              style={{
                backgroundColor: "#086288",
                color: "#FFFFFF",
                Fontfamily: "Open Sans, Semibold",
              }}
              size="default"
              onClick={() => handlePreviousClick()}
            />
          </div>
          <div>
            <ButtonComponent
              label="Next"
              style={{
                backgroundColor: "#086288",
                color: "#FFFFFF",
                Fontfamily: "Open Sans, Semibold",
              }}
              size="default"
              onClick={() => handleNextClick()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressDetails;

