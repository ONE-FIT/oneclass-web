import { Outlet } from "react-router";
import Sidebar from "./Sidebar/Sidebar";

function Layout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
