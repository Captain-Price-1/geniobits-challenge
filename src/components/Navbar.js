import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import LoginModal from "./LoginModal";
const Navbar = ({ activeUrl, setActiveUrl }) => {
  const [isModOpen, setIsModOpen] = useState(false);
  let sites = "Sites";
  if (window.location.href.includes("resources")) {
    console.log("resources found");
  }
  return (
    <div className="nav-master">
      <div className="info-route">
        {activeUrl === "myapps" ? (
          <div className="heading">
            <p>My Apps</p> <p>{">"}</p> <p>Client</p> <p>{">"}</p>{" "}
            <p style={{ color: "purple" }}>Sites</p>
          </div>
        ) : (
          <div className="heading">
            <p>{activeUrl[0].toUpperCase() + activeUrl.substring(1)}</p>
          </div>
        )}
      </div>
      <div className="right-end">
        <div className="notification-dropdown">
          <Dropdown type="notification" />
        </div>
        <div className="user-dropdown">
          <Dropdown
            type="user"
            isModOpen={isModOpen}
            setIsModOpen={setIsModOpen}
          />
        </div>
      </div>
      <LoginModal isModalOpen={isModOpen} setIsModalOpen={setIsModOpen} />
    </div>
  );
};

export default Navbar;
