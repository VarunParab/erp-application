import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from "@mui/icons-material/Task";
import ChatIcon from "@mui/icons-material/Chat";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import { useState } from "react";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("Dashboard");

  const Menus = [
    { title: "Dashboard", path: "/", icon: <DashboardIcon /> },
    { title: "Tasks", path: "/task", icon: <TaskIcon /> },
    { title: "Projects", path: "/project", icon: <BuildIcon /> },
    { title: "Chats", path: "/chats", icon: <ChatIcon /> },
    { title: "Analytics", path: "#", icon: <EqualizerIcon /> },
    { title: "Reports", path: "#", icon: <FolderCopyIcon /> },
    { title: "Profile", path: "/profile", icon: <PersonIcon /> },
  ];

  return (
    <div className="flex" style={{ maxHeight: "100vh", overflowY: "auto" }}>
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-red-700 h-screen p-5 rounded-2xl pt-8 relative duration-300 mt-3 ml-3 mb-3`}
      >
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-medium text-xl font-extrabold duration-200 ${
              !open && "scale-0"
            }`}
          >
            DigitalVasai ERP
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4 
                ${active === Menu.title ? "bg-light-white" : "hover:bg-light-white"}`}
              onClick={() => setActive(Menu.title)}
            >
              <Link
                to={Menu.path || "#"}
                className="flex items-center gap-x-4 w-full"
              >
                <span className="text-sm">{Menu.icon}</span>
                <h3
                  className={`${!open && "hidden"} origin-left duration-200 text-l`}
                >
                  {Menu.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
