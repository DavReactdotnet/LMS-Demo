import React, { useEffect, useState } from "react";
import { batchGetAll } from "../../../services/utils/batch/BarchServices";
import { categoryGet } from "../../../services/utils/commonApi";
import { requestAprove } from "../../../services/utils/request/requestServices";
import InputComponent from "../../atom/InputComponent";
import SimpleDropdown from "../../atom/DropDown";
import TextComponent from "../../atom/TextComponent";
import ModalComponent from "../../molicules/ModalComponent";

function ChangeStatus({ approve, setApprove, getTableData, defaultFormData }) {
  const [options, setOptions] = useState([]);
  const [batch, setBatch] = useState({});

  useEffect(() => {
    getOptions();
  }, []);

  const getOptions = async () => {
    const { data, errRes } = await batchGetAll();
    if (data.data) {
      const tempOption = [];
      data.data.map((item, index) => {
        tempOption.push({
          value: item.batchName,
          id: item.batchId,
        });
      });

      setOptions(tempOption);
    }
  };

  const handleSubmit = async () => {
    const payload = {
      empId: defaultFormData.empId,
      batchId: batch.id,
    };
    const { data, errRes } = await requestAprove(payload);

    if (data) {
      await getTableData();
    } else if (errRes) {
      console.log(errRes.message);
    } else {
      console.log("Something went wrong");
    }
    setApprove(false);
  };

  return (
    <div>
      <ModalComponent
        onSubmitBtnClick={handleSubmit}
        open={approve}
        modalWidth={400}
        showPreviousBtn={false}
        modalTitle="Change status"
        onCloseIconClick={() => {
          setApprove(false);
        }}
      >
        <div className="px-5 p-2 overflow Y-scroll h-550">
          <div className="mb-2">
            <p className="mb-0">Employee Id</p>
            <InputComponent readOnly={true} value={defaultFormData.empId} />
          </div>
          <div>
            <p className="mb-0">Batch ID</p>
            <SimpleDropdown
              value={batch}
              onChange={(e, val) => {
                setBatch(val);
              }}
              options={options}
              modalWidth="100%"
            />
          </div>
        </div>
      </ModalComponent>
    </div>
  );
}

export default ChangeStatus;
