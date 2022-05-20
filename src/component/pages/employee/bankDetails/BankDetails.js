

import React from "react";
import ButtonComponent from "../../../atom/ButtonComponent";
import InputComponent from "../../../atom/InputComponent";
import SimpleDropdown from "../../../atom/SimpleDropdown";

function BankDetails({
  empPayload,
  setEmpPayload,
  handleNextClick,
  handlePreviousClick,
}) {
  return (
    <div className="m-5">
      <div className="row justify-content-center ">
        <div className="col-5">
          <div className="d-flex justify-content-between">
            <div className="m-2">
              <p className="mb-0">Account No.</p>
              <InputComponent />
            </div>
            <div className="m-2">
              <p className="mb-0">Bank Name</p>
              <InputComponent />
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="col-5 m-2">
              <p className="mb-0">Account Type</p>
              <SimpleDropdown />
            </div>
            <div className="col-5 m-2">
              <p className="mb-0">IFSC Code</p>
              <InputComponent />
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="m-2 col-5">
              <p className="mb-0">Branch</p>
              <SimpleDropdown />
            </div>
            <div className="m-2 col-5">
              <p className="mb-0">State</p>
              <SimpleDropdown />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center pb-5 mb-5">
        <div
          style={{ width: "700px" }}
          className="d-flex justify-content-between "
        >
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

export default BankDetails;
