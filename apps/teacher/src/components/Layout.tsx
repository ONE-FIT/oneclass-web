import { Outlet } from "react-router";
import Sidebar from "./Sidebar/Sidebar";

function Layout() {
  return (
    <div className="flex h-screen bg-[#C5E1FF]]">
      <Sidebar />
      <div className="flex-1 h-screen p-0 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
