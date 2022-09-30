import React, { useState } from "react";
import { Modal, Input, Select, Button } from "antd";

const LoginModal = ({ isModalOpen, setIsModalOpen }) => {
  const [active, setActive] = useState(false);

  //   const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleClick = () => {
    setActive(true);
  };

  const handleOk = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload(false);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Modal
      bodyStyle={{ height: 80 }}
      open={isModalOpen}
      onOk={handleOk}
      footer={[
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            style={{ border: "none", boxShadow: "none", fontWeight: "500" }}
            key="back"
            onClick={handleCancel}
          >
            Cancel
          </Button>

          <Button
            style={{
              // width: "8rem",
              background: "rgb(255, 115, 0)",
              color: "white",
              borderRadius: "0.3rem",
            }}
            key="link"
            onClick={handleOk}
          >
            Yes
          </Button>
        </div>,
      ]}
      onCancel={handleCancel}
      width={200}
      height={400}
    >
      <p style={{}}>
        Do you really wish <br />
        to logout?
      </p>
    </Modal>
  );
};

export default LoginModal;
