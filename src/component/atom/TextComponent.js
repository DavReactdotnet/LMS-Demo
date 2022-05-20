import React from "react";

function TextComponent({
  onChange = () => {},
  className = "",
  placeholder = " Enter msg ",
  error = false,
  onBlur = () => {},
  value = "",
  style = {},
}) {
  return (
    <div>
      <textarea
        style={style}
        onChange={onChange}
        className={`${
          error ? "error" : "style"
        } ${className}`}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
      ></textarea>
    </div>
  );
}

export default TextComponent;
