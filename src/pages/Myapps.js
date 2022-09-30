import React, { useState } from "react";
import { CakeData } from "../CakeData";
import Inputs from "../components/Input";
import { Modal, Input, Select, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Myapps = () => {
  const [datas, setDatas] = useState(CakeData);
  const { Option } = Select;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [division, setDivision] = useState("");
  const [incharge, setIncharge] = useState("");
  const [email, setEmail] = useState("");
  const [total, setTotal] = useState(0);

  console.log(email);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    datas.push({
      DivisionName: division,
      Incharge: incharge,
      Email: email,
      TotalEmployees: total,
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    setIncharge(value);
  };

  return (
    <div className="myapps-main">
      <div className="left-side">
        <div className="heading">
          <h1 style={{ display: "flex", alignItems: "center" }}>
            <ArrowLeftOutlined style={{ marginRight: "0.2rem" }} /> Century{" "}
            {">"}
            {"   "}
            <p style={{ color: "rgb(4, 160, 129)" }}>Divisions</p>
          </h1>
        </div>
        <div className="cards">
          {datas.map((data) => {
            const { DivisionName, Incharge, Email, TotalEmployees } = data;
            return (
              <div className="individual-card">
                <div className="card-header">
                  <p>{DivisionName}</p>
                  <p>. . .</p>
                </div>
                <div className="card-info">
                  <p>Incharge:{Incharge}</p>
                  <p>E-mail ID:{Email}</p>
                  <p>Total Employees:{TotalEmployees}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right-master">
        <div className="add-btn">
          <button onClick={showModal}>+ Add New Division</button>
        </div>
        <div className="right-side">
          <div className="filters">
            <h1>Filters</h1>
            <hr />
            <p>By Location</p>
            <Inputs />
          </div>
          <div className="apply-btn">
            <button>Apply</button>
          </div>
        </div>
      </div>
      <Modal
        style={{ borderRadius: "1rem" }}
        title="Add New Division"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            style={{ border: "none", boxShadow: "none", fontWeight: "500" }}
            key="back"
            onClick={handleCancel}
          >
            Cancel
          </Button>,

          <Button
            style={{
              width: "8rem",
              background: "rgb(255, 115, 0)",
              color: "white",
              borderRadius: "0.3rem",
            }}
            key="link"
            onClick={handleOk}
          >
            Add
          </Button>,
        ]}
        centered={true}
        bodyStyle={{
          padding: "0",
          size: "5rem",
        }}
        width="700px"
      >
        <div className="model-content">
          <div className="division-name">
            <p style={{ marginBottom: "0.3rem" }}>Division Name</p>
            <Input
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              style={{ width: "10rem" }}
            />
          </div>
          <div className="other-fields">
            <div className="incharge">
              <p>Incharge</p>
              <Select
                defaultValue="Department Lead"
                style={{
                  width: "10rem",
                  backgroundColor: "rgb(203, 217, 243)!",
                  borderRadius: "1rem",
                }}
                onChange={handleChange}
                value={incharge}
              >
                <Option
                  value="Department Lead"
                  onChange={(e) => setIncharge(e.target.value)}
                >
                  Department Lead
                </Option>
                <Option value="Tech Lead">Tech Lead</Option>

                <Option value="Manager">Manager</Option>
              </Select>
            </div>
            <div className="incharge">
              <p>Incharge E-mail ID</p>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter E-mail ID"
                style={{ width: "10rem" }}
              />
            </div>
            <div className="incharge">
              <p>Total Employees Working</p>
              <Input
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                style={{ width: "10rem" }}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Myapps;
