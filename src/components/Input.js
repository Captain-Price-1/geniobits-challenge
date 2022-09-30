import React from "react";
import "antd/dist/antd.css";

import {
  InfoCircleOutlined,
  UserOutlined,
  SearchOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Input, Tooltip } from "antd";

const App = () => (
  <>
    <Input
      style={{ borderRadius: "1rem" }}
      prefix={<SearchOutlined className="site-form-item-icon" />}
      placeholder="Enter Location"
      suffix={
        <Tooltip>
          <DownOutlined
            style={{
              color: "rgba(0,0,0,.45)",
            }}
          />
        </Tooltip>
      }
    />
  </>
);

export default App;
