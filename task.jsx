import React from "react";
import Dashboard from "../components/dashboard";

const Task = () => {
  return (
    <div className="flex">
      {/* Sidebar with Dashboard */}
      <div>
        <Dashboard />
      </div>

      {/* Main Content Area */}
      <div className="min-h-screen p-7 w-full bg-gray-200 rounded-2xl mt-3 ml-3 mr-3">
        <h1>class</h1>
      </div>
    </div>
  );
};

export default Task;
