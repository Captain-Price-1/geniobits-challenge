import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Myapps from "./pages/Myapps";
import ProtectedRoutes from "./pages/ProtectedRoute";
import Resources from "./pages/Resources";
import SharedLayout from "./pages/SharedLayout";
import Organization from "./pages/Organization";
import Settings from "./pages/Settings";
import Logout from "./components/Logout";

function App() {
  const [activeUrl, setActiveUrl] = useState("myapps");
  console.log(activeUrl);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <SharedLayout activeUrl={activeUrl} setActiveUrl={setActiveUrl} />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Myapps />} />
          <Route index path="resources" element={<Resources />} />
          <Route index path="organization" element={<Organization />} />
          <Route index path="settings" element={<Settings />} />
          <Route index path="logout" element={<Logout />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
