import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import ButtonComponent from "../../atom/ButtonComponent";
import { Chip, Toolbar, Typography } from "@mui/material";
import "../../../style/button.scss";
import { Input } from "antd";
import { SearchOutlined } from "@mui/icons-material";
import TableComponent from "../../molicules/TableComponent";
import BatchModal from "../../forms/BatchModal";
import CONSTANTS from "../../constents/Index";
import {
  batchGetAll,
  batchDelete,
} from "../../../services/utils/batch/BarchServices";
import { messageService } from "../../../services/rxjsServices";

function Batch() {

  // functional state
  const [showBatch, setshowBatch] = useState(false);
  const [batchVal, setbatchVal] = useState([]);
  const [row, setrow] = useState([]);
  const [selected, setSelected] = useState([]);
  const [deleteData, setDeleteData] = useState("");
  const [previousFormData, setPreviousFormData] = useState([]);
  const [modalValue, setModalValue] = useState("add");
  const [batchId, setBatchId] = useState("");


  // id state won't match ask vijju to change from backend  
  const [preFilledForm, setpreFilledForm] = useState({
    name: "",
    batchId:"",
    mentorName: "",
    technologies: [],
    startDate: "",
    startDateString: "",
    endDate: "",
    endDateString: "",
    status:""
  });

  useEffect(() => {
    loadApiData();
  }, []);

  const editOperation = (id) => {
    let data;
    batchVal &&
      batchVal.map((item, index) => {
        if (index + 1 === id) {
          data = item;
        }
      });
    console.log("first", data);
    setBatchId(data.id);
    setpreFilledForm({
      name: data.batchName,
      mentorName: data.mentorName,
      startDate: data.startDate,
      endDate: data.endDate,
    });
    editOperation();
    setModalValue("edit");
  };

  const loadApiData = async () => {
    const { data, errRes } = await batchGetAll();
    setbatchVal(data.data);
    let arrayOfrow = [];
    data &&
      data.data.map((val, index,array) => {
        arrayOfrow.push({
          col1: index + 1,
          col2: val.batchId,
          col3: val.batchName,
          col4: val.mentorName,
          col5: val.technologies.map((elem) => (
            <Chip
              label={elem.technologyName}
              variant="outlined"
              color="secondary"
              sx={{ backgroundColor: "#086288", color: "#FFFFFF" }}
            />
          )),
          col6: val.startDate,
          col7: val.endDate,
          col8: val.status,
        });
      });
    setrow(arrayOfrow);
  };

  const deleteItem = async (id) => {
    let batchId = "";
    batchVal.map((item, index,array) => {
      if (index + 1 === id) {
        batchId = item.batchId;
      }
    });
    const { data, errRes } = await batchDelete(batchId);
    if (data) {
      loadApiData();
    }
  };

  return (
    <div>
      <Toolbar
        sx={{
          p: 0,
        }}
        className="row"
      >
        <Box className="col-6">
          <Typography color={"#FAA81D"}>Batch list</Typography>
        </Box>
        <Box className="col-4 d-flex">
          <Input
            size="default"
            placeholder="Search"
            prefix={<SearchOutlined />}
            onChange={(e) => {
              messageService.sendMessage(e.target.value);
            }}
          />
        </Box>
        <Box className="col-2">
          <ButtonComponent
            label="New Batch"
            muiProps="orange"
            fullwidth
            size="small"
            onClick={() => {
              setshowBatch(true);
            }}
            showIcon={true}
            iconOrintation="start"
            iconName="add"
          />
        </Box>
      </Toolbar>
      <div classNamw="m-2">
        <TableComponent
          tablerow={row}
          headCells={CONSTANTS.BATCH_HEADER}
          deleteIconClick={(id) => deleteItem(id)}
          editIconClick={(id) => {
            setshowBatch(true);
          }}
        />
      </div>
      {showBatch && (
        <BatchModal
          loadApiData={loadApiData}
          showBatch={showBatch}
          setshowBatch={setshowBatch}
          preFilledForm={preFilledForm}
          setpreFilledForm={setpreFilledForm}
        />
      )}
    </div>
  );
}

export default Batch;
