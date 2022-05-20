import InputComponent from "../../atom/InputComponent";
import ButtonComponent from "../../atom/ButtonComponent";
import {  IconButton,  Input,  Checkbox,  FormControl,  FormControlLabel, InputAdornment, ButtonBase,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/utils/login/Login";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Image } from "antd";
import img1 from '../../../assets/logo1.png';
 
function LoginForm() {
  const [defaultFormVal, setdefaultFormVal] = useState({
    empId: "",
    password: "",
    showPassword: "",
    showPassword: false,
  });
  const [error, setError] = useState({
    empId: false,
    validempId: false,
    password: false,
  });

  const [empIdErr, setempIdErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [click, setClick] = useState({
    clickMail: false,
    clickPass: false,
  });
  const history = useNavigate();

  let { clickMail, clickPass } = click;
  const handelChange = (prop) => (event) => {
    setdefaultFormVal({ ...defaultFormVal, [prop]: event.target.value });
  };

  const handelClickShowPassword = () => {
    setdefaultFormVal({
      ...defaultFormVal,
      showPassword: !defaultFormVal.showPassword,
    });
  };
  const handelMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let errorObj = {
    empId: false,
    password: false,
    validempId: false,
  };
  const handelError = () => {
    const { empId, password } = defaultFormVal;
    if (
      empId === "" ||
      !empId ||
      empId.charAt(0) === " " ||
      empId.charAt(empId.length - 1) === " "
    ) {
      errorObj.empId = true;
    }
    if (
      password === "" ||
      !password ||
      password.charAt(0) === " " ||
      password.charAt(password.length - 1) === " "
    ) {
      errorObj.password = true;
      setPasswordErr("Password required");
    }
    return errorObj;
  };

  const handelSave = async () => {
   

    const payload = {
      empId: defaultFormVal.empId,
      password: defaultFormVal.password,
    };

    let { dataRes, errRes } = await login(payload);

    console.log(dataRes.data.data.role);
  
    if (dataRes) {
      let data = dataRes.data.data.token;
      console.log(data);
      localStorage.setItem("token", data);
      localStorage.setItem("role", dataRes.data.data.role);
      history("/batch");
      setdefaultFormVal({ ...defaultFormVal, empId: "" });
      setdefaultFormVal({ ...defaultFormVal, password: "" });
    } else {
      if (errRes) {
        errorObj.password = true;
        errorObj.validempId = true;
        setempIdErr(errRes.message);
        setPasswordErr(errRes.message);
      }
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center h-100 px-md-5 px-sm-5">
      <div>
        <Image src={img1} />
      </div>
      <h3 className="fw-600 mb-4 mt-4 m-5 txt-yellow">Login</h3>
      <div className="mb-2 w-60">
        <p className={`mb-0 ${clickMail ? "txt-white" : "txt-white"}`}>
          <span className="text-danger">*</span>Employee ID
        </p>
        <InputComponent
          placeholder="Employee ID"
          error={error.empId || error.validempId}
          value={defaultFormVal.empId}
          fullWidth={true}
          name="empId"
          onClick={() => {
            setClick({ ...click, clickMail: true });
          }}
          onBlur={() => {
            setClick({ ...click, clickMail: false });
          }}
          onChange={(e) => {
            setdefaultFormVal({ ...defaultFormVal, empId: e.target.value });
          }}
        />
        {error.empId ? (
          <p className="mb-0 fs-12  w-75" style={{ color: "red" }}>
          Employee ID
          </p>
        ) : error.validempId ? (
          <span className="mb-0 fs-12  w-75" style={{ color: "red" }}>
            {empIdErr}
          </span>
        ) : (
          ""
        )}
      </div>
      <div>
        <p className={`mb-0 ${clickPass ? "txt-white" : "txt-white"}`}>
          <span className="text-danger">*</span>Password
        </p>
        <FormControl
          value={defaultFormVal.password}
          variant="standard"
          className="w-60"
          name="password"
          onClick={() => {
            setClick({ ...click, clickPass: true });
          }}
          onBlur={() => {
            setClick({ ...click, clickPass: false });
          }}
        >
          <InputComponent
            placeholder="Password"
            error={error.password}
            id="standard-adornment-password"
            style={{width:215}}
            type={defaultFormVal.showPassword ? "text" : "password"}
            value={defaultFormVal.password}
            onChange={handelChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handelClickShowPassword}
                  onMouseDown={handelMouseDownPassword}
                >
                  {defaultFormVal.showPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {
          error.password && (
            <p className="mb-0 fs-12  w-75 " style={{ color: "red" }}>
              {/* Password is required */}
              {passwordErr}
            </p>
          )
        
        }
      </div>

      <div className="mx-4">
        <ButtonBase>
        <ButtonComponent
          label="Login"
          style={{ backgroundColor: "#ffaa17", color: "#ffffff" }}
          muiProps="w-20 mt-5"
          variant="contained"
          onClick={handelSave}
        />
        <ButtonComponent
          label="Cancel"
          style={{ backgroundColor: "#000000A2", color: "#ffffff" }}
          muiProps="w-20 mt-5"
          variant="contained"
          onClick={handelSave}
        />
        
        </ButtonBase>
      </div>
    </div>
  );
}

export default LoginForm;

