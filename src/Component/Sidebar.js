// import React, { NavLink } from "react";
import { BsSpeedometer } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";
import { BsBuilding } from "react-icons/bs";
import { TbHeartHandshake } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { RiFileList3Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import "./Sidebar.css";

const Sidebar = (props) => {
  const routes = [
    {
      link: "/",
      name: "Dashboard",
      icon: <BsSpeedometer2 />,
    },
    {
      link: "/reports",
      name: "Reports",
      icon: <BsSpeedometer />,
    },
    {
      link: "/drives",
      name: "Drives",
      icon: <BsBuilding />,
    },
    {
      link: "/partners",
      name: "Partners",
      icon: <TbHeartHandshake />,
    },
    {
      link: "/users",
      name: "Users",
      icon: <FiUsers />,
    },
    {
      link: "/billing",
      name: "Billing",
      icon: <RiFileList3Line />,
    },
    {
      link: "/setting",
      name: "Setting",
      icon: <IoSettingsOutline />,
    },
  ];

  console.log(routes, "lllllllllllllllllllll");
  return (
    <div className="container">
      <div className="sidebar">
        <span className="select">
          <h6 style={{fontColor:"black"}}>SELECT REPORT*</h6>
          <select style={{ borderRadius: "2px" }}>
            <option>IIT MADRAS</option>
            <option>NIT MYSORE</option>
            <option>IIT BOMBAY</option>
            <option>IIT KHARAGPUR</option>
          </select>
        </span>
        <div className="filter">
          <span>
          <input placeholder="Search by keyword" />
          <select>
            <option>Filter</option>
          </select>
          </span>
        </div>
        {routes.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div className="bar">
                <span>{val.icon}</span>
                <span>{val.name}</span>
              </div>
            </li>
          );
        })}
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Sidebar;
