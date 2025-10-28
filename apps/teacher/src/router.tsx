import { createBrowserRouter } from "react-router";
import Signin from "@/pages/Signin";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import TaskStatus from "@/pages/TaskStatus";
import TaskGenerate from "@/pages/TaskGenerate";
import ClassManage from "@/pages/ClassManage";
import AccountGenerate from "@/pages/AccountGenerate";
import AnnouncementSend from "@/pages/AnnouncementSend";
import AnnouncementManage from "@/pages/AnnouncementManage";
import ConsultingManage from "@/pages/ConsultingManage";
import ParentConsultingManage from "@/pages/ParentConsultingManage";
import PaymentManage from "@/pages/PaymentManage";
import App from "./App";
import SignUp from "@/pages/Signup.tsx";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/task-status",
        element: <TaskStatus />,
      },
      {
        path: "/task-generate",
        element: <TaskGenerate />,
      },
      {
        path: "/class-manage",
        element: <ClassManage />,
      },
      {
        path: "/account-generate",
        element: <AccountGenerate />,
      },
      {
        path: "/announcement-send",
        element: <AnnouncementSend />,
      },
      {
        path: "/announcement-manage",
        element: <AnnouncementManage />,
      },
      {
        path: "/consulting-manage",
        element: <ConsultingManage />,
      },
      {
        path: "/parent-consulting-manage",
        element: <ParentConsultingManage />,
      },
      {
        path: "/payment-manage",
        element: <PaymentManage />,
      },
    ],
  },
]);

export default router;
