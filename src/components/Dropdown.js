import React, { useState } from "react";
import orange from "../assets/orange-small.png";
import "antd/dist/antd.css";
import { DownOutlined, UserOutlined, BellOutlined } from "@ant-design/icons";

import { Dropdown, Menu, Space } from "antd";
const menu = (isModOpen, setIsModOpen, type) => (
  <Menu>
    {type !== "user" && <Menu.Item key="1">Notification 1</Menu.Item>}
    {type !== "user" && <Menu.Item key="1">Notification 2</Menu.Item>}
    {type === "user" && (
      <Menu.Item key="3" onClick={() => setIsModOpen(true)}>
        Logout
      </Menu.Item>
    )}
  </Menu>
);

const DropDown = ({ type, isModOpen, setIsModOpen }) => (
  <Dropdown
    overlay={menu(isModOpen, setIsModOpen, type)}
    trigger={["click"]}
    placement="bottomCenter"
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="photo">
            <div className="admin-arrow">
              <p
                style={{
                  marginBottom: "0rem",
                }}
              >
                <div className="navbar-icons">
                  {type == "user" ? (
                    <UserOutlined
                      style={{
                        textAlign: "center",
                        marginRight: "1rem",
                      }}
                    />
                  ) : (
                    <BellOutlined style={{ marginRight: "1rem" }} />
                  )}
                </div>
              </p>
              {/* {type == "user" ? <DownOutlined /> : ""} */}
            </div>
          </div>
        </div>
      </Space>
    </a>
  </Dropdown>
);

export default DropDown;
