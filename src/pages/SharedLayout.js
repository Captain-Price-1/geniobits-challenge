import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const SharedLayout = ({ activeUrl, setActiveUrl }) => {
  return (
    <div className="main-content">
      <Sidebar activeUrl={activeUrl} setActiveUrl={setActiveUrl} />
      <div
        className="right-head"
        style={{
          // width: "100%",
          minHeight: "100vh",
          // background: "rgb(193, 231, 241)",
        }}
      >
        <Navbar activeUrl={activeUrl} setActiveUrl={setActiveUrl} />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
