import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";

function InputComponent({
  className = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  size = "default",
  style = {},
  status = "",
  readOnly = false,
  type = "",
}) {
  return (
    <div>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        size={size}
        style={style}
        status={status}
        readOnly={readOnly}
        type={type}
      />
    </div>
  );
}

export default InputComponent;
