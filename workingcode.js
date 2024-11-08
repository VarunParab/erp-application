//progress Bar and percentage
<div className="w-[250px]">
  {/* Progress Bar */}
  <div className="relative bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-1">
    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
  </div>

  {/* Title and Percentage Row */}
  <div className="flex justify-between items-center">
    <span className="text-gray-700 font-semibold truncate">Design architecture of website</span>
    <span className="text-gray-700 font-semibold">45%</span>
  </div>
</div>


//progress Bar and with color
const ProgressBarWithText = ({ progress }) => {
    // Determine the color based on the progress percentage
    let progressBarColor;
    if (progress < 40) {
      progressBarColor = "bg-red-600";
    } else if (progress >= 40 && progress < 70) {
      progressBarColor = "bg-orange-600";
    } else {
      progressBarColor = "bg-green-600";
    }
  
    return (
      <div className="w-[250px]">
        {/* Progress Bar */}
        <div className="relative bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-1">
          <div
            className={`${progressBarColor} h-2.5 rounded-full`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
  
        {/* Title and Percentage */}
        <div className="flex justify-between">
          <span className="text-gray-700 font-semibold">Design architecture</span>
          <span className="text-gray-700 font-semibold">{progress}%</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBarWithText;
  


  import { Icon } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from "@mui/icons-material/Task";
import ChatIcon from "@mui/icons-material/Chat";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
const Homepage = () => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("Dashboard");
  const Menus = [
    { title: "Dashboard", path: "/", icon: <DashboardIcon /> },
    { title: "Tasks", path: "/task", icon: <TaskIcon /> },
    { title: "Projects", path: "/project", icon: <BuildIcon /> },
    { title: "Chats", path: "/chats", icon: <ChatIcon /> },
    { title: "Analytics", icon: <EqualizerIcon /> },
    { title: "Reports", icon: <FolderCopyIcon /> },
    { title: "Profile", icon: <PersonIcon /> },
  ];
  let progressBarColor;
  const progress = 20;
  if (progress < 40) {
    progressBarColor = "bg-red-600";
  } else if (progress >= 40 && progress < 70) {
    progressBarColor = "bg-orange-600";
  } else {
    progressBarColor = "bg-green-600";
  }
  // Initial countdown time in seconds (for example, 10 seconds)
  const initialTime = 0;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    // If timeLeft is 0, stop the timer
    if (timeLeft <= 0) return;

    // Set an interval to decrease timeLeft every second
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the interval when the component is unmounted or timeLeft reaches 0
    return () => clearInterval(timerId);
  }, [timeLeft]);
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  // Effect depends on timeLeft

  return (
    <div className="flex" style={{ maxHeight: "100vh", overflowY: "auto" }}>
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
                className={`flex rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4 ${
                  Menu.gap ? "mt-9" : "mt-2"
                } ${active === Menu.title ? "bg-light-white" : ""}`}
                onClick={() => setActive(Menu.title)}
              >
                <Link
                  to={Menu.path || "#"}
                  className="flex items-center gap-x-4"
                >
                  <span className="text-sm">{Menu.icon}</span>
                  <h3
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 text-l`}
                  >
                    {Menu.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* -----Dashboard name ----------*/}
      <div class="min-h-screen p-7 w-full bg-gray-200 rounded-2xl mt-3 ml-3 mr-3">
        <div className="headingdash flex items-center">
          <DashboardIcon className="text-2xl" style={{ marginRight: "2px" }} />{" "}
          {/* Icon with spacing */}
          <h1 className="text-3xl font-extrabold ml-2">Dashboard</h1>
        </div>
        {/* -----Grids ----------*/}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-6">
          {/* -----Reverse Countdown ----------*/}
          <div class="bg-white text-black p-6 rounded-3xl shadow-md sm:w-full h-[180px] md:w-[340px]">
            <h1 class="text-2xl font-bold mb-4">Reverse Countdown</h1>
            <h4 class="text-5xl font-extrabold text-center mt-8">
              {timeLeft > 0
                ? `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
                    2,
                    "0"
                  )}:${String(seconds).padStart(2, "0")}`
                : "Time's up!"}
            </h4>
          </div>
          {/* -------Current Task ----------*/}
          <div class="bg-yellow-100 text-black p-6 rounded-3xl shadow-md sm:w-full h-[180px] md:w-[340px]">
            <h1 class="text-2xl font-bold mb-4">Ongoing Task</h1>
            <div className="flex items-center">
              {/* Progress bar container */}
              <div className="w-[300px]">
                {/* Progress Bar */}
                <div className="relative bg-gray-200 rounded-full h-3 dark:bg-gray-700 mb-1">
                  <div
                    className={`${progressBarColor} h-2.5 rounded-full`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                {/* Title and Percentage Row */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold truncate">
                    Design architecture
                  </span>
                  <span className="text-gray-700 font-semibold">
                    {progress}%
                  </span>
                </div>
              </div>
            </div>
            <div class="text-sm text-red-800 mt-8">
              Due: 12-09-2024 at 11:00 AM
            </div>
          </div>
          {/* -------upcoming deadline ----------*/}
          <div class="bg-red-200 text-black p-6 rounded-3xl shadow-md sm:w-full h-[180px] md:w-[340px]">
            <h1 class="text-2xl font-bold mb-4">Upcoming Deadline</h1>
            <ul>
              <li class="text-1xl font-semibold">E-commerce Web Application</li>
              <li class="text-sm">Status: Development</li>
              <br />
              <li class="text-xs">Due: 7-11-2024</li>
            </ul>
          </div>
          {/* -------to-do list status ----------*/}
          <div class="bg-white text-black p-6 rounded-3xl shadow-md sm:w-full h-[380px] md:w-[340px] divide-y divide-solid">
            <h1 class="text-2xl font-bold mb-4">Today's To-Do List</h1>
            <ul>
              <li class="text-1xl font-bold">Brand color</li>
              <li class="text-sm mt-1 truncate">Establish Brand color</li>
            </ul>
            <br />
            <ul>
              <li class="text-1xl font-bold">Typography</li>
              <li class="text-sm mt-1 truncate">Define Typography Standards</li>
            </ul>
            <br />
            <ul>
              <li class="text-1xl font-bold">Iconography</li>
              <li class="text-sm mt-1 truncate">Set Iconography Guidelines</li>
            </ul>
            <br />
            <ul>
              <li class="text-1xl font-bold">Patterns</li>
              <li class="text-sm mt-1 truncate">Mapout Interaction Patterns</li>
            </ul>
          </div>
          {/* -------project status ----------*/}
          <div class="bg-white text-black p-6 rounded-3xl shadow-md sm:w-full h-[380px] md:w-[340px] divide-y divide-solid">
            <h1 class="text-2xl font-bold mb-4">Project Status</h1>
            <ul>
              <li class="text-1xl font-bold">Mocha Website Re-design</li>
              <li class="text-sm mt-1">Status: Completed</li>
              <li class="text-xs">Completed: 7-11-2024</li>
            </ul>
            <br />
            <ul>
              <li class="text-1xl font-bold">E-commerce Web Application</li>
              <li class="text-sm mt-1">Status: Development</li>
              <li class="text-xs">Due: 7-11-2024</li>
            </ul>
            <br />
            <ul>
              <li class="text-1xl font-bold">Quest Web</li>
              <li class="text-sm mt-1">Status: Pending</li>
              <li class="text-xs">Due: 13-11-2024</li>
            </ul>
            <br />
            {/*
            <ul>
              <li class="text-1xl font-bold">Giles + Nelson website</li>
              <li>Status: Pending</li>
              <li>Due: 7-11-2024</li>
            </ul> */}
          </div>
          {/* -------Notifications ----------*/}
          <div class="bg-white text-black p-6 rounded-3xl shadow-md sm:w-full h-[380px] md:w-[340px] divide-y divide-solid">
            <h1 class="text-2xl font-bold mb-4">Notifications</h1>
            <ul>
              <li class="text-1xl font-bold">Website</li>
              <li class="text-sm mt-1 truncate">
                project is 2 day behind the Due Date and
              </li>
            </ul>
            <br />
            <ul>
              <li class="text-1xl font-bold">QA</li>
              <li class="text-sm mt-1 truncate">
                we need to step up the pace on the project
              </li>
            </ul>
            <br />
            <ul>
              <li class="text-1xl font-bold">New member</li>
              <li class="text-sm mt-1 truncate">welcome to the new member</li>
            </ul>
            <br />
            <ul>
              <li class="text-1xl font-bold">Weekly Meeting</li>
              <li class="text-sm mt-1 truncate">
                This week's meeting is cancelled
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

