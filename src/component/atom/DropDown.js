import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {  AutoComplete } from "antd";

function SimpleDropdown({ options = [], onChange = () => {} }) {

  return (
    <div>
      <AutoComplete
        dropdownStyle={{ opacity: 5, zIndex: 1000000 }}
        suffixIcon={<KeyboardArrowDownIcon />}
        style={{
          width: "100%",
          // zIndex: "10000",
        }}
        options={options}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        onChange={onChange}
      />
    </div>
  );
}

export default SimpleDropdown;
