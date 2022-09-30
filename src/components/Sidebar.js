import React, { useState } from "react";
import { Link } from "react-router-dom";
import cait from "../assets/cait-logo.png";
import { Modal, Input, Select, Button } from "antd";
import LoginModal from "./LoginModal";
import {
  AppstoreOutlined,
  TeamOutlined,
  HomeOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
const Sidebar = ({ activeUrl, setActiveUrl }) => {
  const [sidebarClass, setSidebarClass] = useState("sidebar open");
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleSidebar = () => {
    if (sidebarClass === "sidebar open") {
      setSidebarClass("sidebar");
    } else {
      setSidebarClass("sidebar open");
    }
  };

  const toggleClick = () => {
    setActive(true);
  };
  const handleClick = (e) => {
    const nodelist = e.currentTarget.childNodes;

    console.log(e.target.parentElement.parentElement.className);
    for (let i = 0; i < nodelist.length; i++) {
      if (nodelist[i].className === e.target.parentElement.className) {
        let url = nodelist[i].className.substr(
          0,
          nodelist[i].className.indexOf("-")
        );
        setActiveUrl(url);
        let oldclas = nodelist[i].className;
        nodelist[i].className = oldclas + " " + "active";
        nodelist[i].childNodes[0].className = "activated";
      } else {
        let newclas = nodelist[i].className.replace("active", "").trim();
        nodelist[i].childNodes[0].className = "";
        nodelist[i].className = newclas;
      }
    }
  };

  return (
    <article>
      <div className={sidebarClass}>
        <div className="orange-logo">
          <img src={cait} alt="" />
        </div>
        <div onClick={(e) => handleClick(e)}>
          <Link to="/" className="myapps-link active">
            <div className="activated"></div>

            <AppstoreOutlined />

            <p>My Apps</p>
          </Link>
          <Link to="/resources" className="resources-link">
            <div className=""></div>

            <TeamOutlined />
            <p>Resources</p>
          </Link>
          <Link to="/organization" className="organization-link">
            <div className=""></div>

            <HomeOutlined />
            <p>My Organization</p>
          </Link>
          <Link to="/settings" className="settings-link">
            <div className=""></div>

            <SettingOutlined />
            <p>Settings</p>
          </Link>
          <Link
            to="/logout"
            className="logout-link"
            onClick={() => setIsOpen(true)}
          >
            <div className=""></div>
            <LogoutOutlined />
            <p>Logout</p>
          </Link>
        </div>
        <LoginModal isModalOpen={isOpen} setIsModalOpen={setIsOpen} />
      </div>
    </article>
  );
};

export default Sidebar;
