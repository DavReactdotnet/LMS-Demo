import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../style/sidebar.scss";
import AddMentor from "../../assets/icons/mentor.svg";
import AddBatch from "../../assets/icons/batch.svg";
import AddUserBatch from "../../assets/icons/batch2.png";
import AddUserMentor from "../../assets/icons/mentor.png";
import AddUserReq from "../../assets/icons/req.png";
import AddRequest from "../../assets/icons/request.svg";

const SideMenuComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    console.log("first");
    const activeItem = sidebarMenuItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  const sidebarMenuItems = [
    {
      display: "Batch",
      page: "Batch",
      inActiveIcon: (
        <img
          src={AddBatch}
          style={{ color: "#fff", width: "23px", height: "23px" }}
          alt="batch"
        />
      ),
      activeIcon: (
        <img
          src={AddUserBatch}
          style={{ color: "#fff", width: "23px" }}
          alt="batch"
        />
      ),
      to: "/batch",
      section: "batch",
      child: [],
    },
    {
      display: "Mentor",
      page: "Mentor",
      inActiveIcon: (
        <img
          src={AddMentor}
          style={{ color: "#fff", width: "23px" }}
          alt="mentor"
        />
      ),
      activeIcon: (
        <img
          src={AddUserMentor}
          style={{ color: "#fff", width: "23px" }}
          alt="mentor"
        />
      ),
      to: "/mentor",
      section: "mentor",
      child: [],
    },
    {
      display: "Request",
      page: "Request",
      inActiveIcon: (
        <img
          src={AddRequest}
          style={{ color: "#fff", width: "23px" }}
          alt="request"
        />
      ),
      activeIcon: (
        <img
          src={AddUserReq}
          style={{ color: "#fff", width: "23px" }}
          alt="request"
        />
      ),
      to: "/request",
      section: "request",
      child: [],
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        {sidebarMenuItems.map((item, index) => (
          <div
            className={`sidebar__menu__item ${
              activeIndex === index ? "activebg" : ""
            }`}
            key={index}
          >
            <Link className="text-decoration-none" to={item.to}>
              <div
                className={`sidebar__menu__item ${
                  activeIndex === index ? "activeborder" : ""
                }`}
              >
                <div>
                  {activeIndex === index ? item.activeIcon : item.inActiveIcon}
                </div>
                <div>{item.display}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenuComponent;
