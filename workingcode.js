//Dashboard and beside grid
<div className="flex">
      {/* Sidebar with Dashboard */}
      <div className="w-[242.01px]">
        <Dashboard />
      </div>

      {/* Main Content Area */}
      <div className="min-h-screen p-7 w-full bg-white rounded-2xl mt-3 ml-3 mr-3">
        <h1>class</h1>
      </div>
</div>


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
  


//grid Row
import React from "react";
import Dashboard from "../components/dashboard";

// Reusable TaskCard Component
const TaskCard = ({ content }) => (
  <div className="bg-white text-black p-4 rounded-2xl shadow-md w-[265px] flex items-center justify-center">
    {content}
  </div>
);

const Task = () => {
  // Define task data for each category
  const tasks = {
    New: ["Task1", "Task 2", "Task 3", "Task 4"],
    InProgress: ["Task 1", "Task 2", "Task 3"],
    Overdue: ["Task 1", "Task 2"],
    Completed: ["Task 1"],
  };
  // Find the maximum number of tasks in any category to set the row count
  const maxTasks = Math.max(...Object.values(tasks).map(category => category.length));

  return (
    <div className="flex">
      {/* Sidebar with Dashboard */}
      <div className="w-[242.01px]">
        <Dashboard />
      </div>

      {/* Main Content Area */}
      <div className="min-h-screen p-7 w-full bg-gray-200 rounded-2xl mt-3 ml-3 mr-3">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <h1 className="text-3xl font-extrabold ml-2">Tasks</h1>
          <button className="bg-green-600 hover:bg-green-700 text-white text-sm mt-1 font-medium py-2 px-4 rounded-full">
            + Add new
          </button>
        </div>

        <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-400" />

        {/* Categories Header */}
        <div className="grid grid-cols-4 gap-2 text-center">
          {["New Task", "In progress", "Overdue", "Completed"].map((category, index) => (
            <div key={index} className="col-span-1 font-semibold">{category}</div>
          ))}
        </div>

        <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-400" />

        {/* Task Grid */}
        <div className="grid grid-cols-4 gap-4">
          {Object.keys(tasks).map((category, index) => (
            <div key={index} className="grid gap-4">
              {tasks[category].map((task, i) => (
                <TaskCard content={task} key={i} />
              ))}
              {/* Only render empty placeholders if there are fewer tasks than maxTasks */}
              {tasks[category].length < maxTasks && 
                Array.from({ length: maxTasks - tasks[category].length }).map((_, i) => (
                  <div key={`empty-placeholder-${i}`} className="w-[265px] h-[100px]"></div>
                ))
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;



//////////
import React, { useState } from "react";
import Dashboard from "../components/dashboard";
import FolderIcon from "@mui/icons-material/Folder";

const Projects = () => {
  const [categories, setCategories] = useState(["All Projects"]); // Initial category
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // 'category' or 'project'
  const [newCategory, setNewCategory] = useState("");
  const [newProject, setNewProject] = useState({
    name: "",
    details: "",
    status: "",
    progress: "",
    dueDate: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'status' && value === '✉️ New Project') {
      setNewProject({
        ...newProject,
        [name]: value,
        progress: 0, // Reset progress to 0% when 'New Project' is selected
      });
    } else {
      setNewProject((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
      setModalOpen(false);
    } else {
      alert("Please enter a category name.");
    }
  };

  const handleAddProject = () => {
    if (
      newProject.name &&
      newProject.details &&
      newProject.status &&
      newProject.progress &&
      newProject.dueDate
    ) {
      setProjects([...projects, { ...newProject, category: selectedCategory }]);
      setModalOpen(false);
      setNewProject({
        name: "",
        details: "",
        status: "",
        progress: "",
        dueDate: "",
        category: "",
      });
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar with Dashboard */}
      <div className="w-[242.01px]">
        <Dashboard />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-white rounded-2xl mt-3 ml-3 mr-3 overflow-hidden">
        <div className="flex items-center justify-between p-7">
          <h1 className="text-3xl font-extrabold ml-2">Projects</h1>
        </div>

        <hr className="h-px bg-gray-300 border-0 mb-4" />

        {/* Project Content */}
        <div className="flex flex-grow overflow-y-auto">
          {/* Category Names Column */}
          <div className="w-[200px] bg-white p-4 border-r border-gray-300 overflow-y-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`mb-1 font-semibold flex items-center cursor-pointer p-2 rounded-2xl ${
                  selectedCategory === category
                    ? "bg-gray-100 text-blue-600"
                    : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category !== "All Projects" && (
                  <span className="mr-2 text-blue-500">
                    <FolderIcon />
                  </span>
                )}
                <div className="truncate">{category}</div>
              </div>
            ))}

            <div>
              <span
                className="mb-1 ml-2 text-xs font-base text-gray-700 flex items-center cursor-pointer p-3 rounded-2xl"
                onClick={() => {
                  setModalOpen(true);
                  setModalType("category");
                }}
              >
                + add project category
              </span>
            </div>
          </div>

          {/* Project Details Column */}
          <div className="flex-1 bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-2xl font-bold mb-4">
                {selectedCategory === "All Projects"
                  ? "All Projects"
                  : selectedCategory}
              </h2>
              <button
                className="bg-green-600 hover:bg-green-700 text-white text-sm mb-4 font-medium py-2 px-4 rounded-full"
                onClick={() => {
                  setModalOpen(true);
                  setModalType("project");
                }}
              >
                + Add new
              </button>
            </div>

            {/* Project Table */}
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Project Name</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Progress</th>
                  <th className="p-2 text-left">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {projects
                  .filter(
                    (project) =>
                      selectedCategory === "All Projects" ||
                      project.category === selectedCategory
                  )
                  .map((project, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-2 border-r">{project.name}</td>
                      <td className="p-2 border-r">
                        <span>{project.status}</span>
                      </td>
                      <td className="p-2 border-r">{project.progress}%</td>
                      <td className="p-2">{project.dueDate}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for Adding Category or Project */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            {modalType === "category" ? (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Add Project Category
                </h2>
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full border p-2 rounded mb-4"
                  placeholder="Category Name"
                />
                <div className="flex justify-end">
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
                    onClick={handleAddCategory}
                  >
                    Add Category
                  </button>
                  <button
                    className="bg-gray-400 text-white px-4 py-2 rounded"
                    onClick={() => setModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
                <form>
                  <div className="mb-4">
                    <label className="block mb-1">Project Name</label>
                    <input
                      type="text"
                      name="name"
                      value={newProject.name}
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Details</label>
                    <textarea
                      name="details"
                      value={newProject.details}
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Status</label>
                    <select
                      name="status"
                      value={newProject.status}
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded"
                    >
                      <option value="">Select Status</option>
                      <option value="🚀 In Progress">🚀 In Progress</option>
                      <option value="⏳ On Hold">⏳ On Hold</option>
                      <option value="✉️ New Project">✉️ New Project</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block mb-1">Progress</label>
                    <input
                      type="text"
                      name="progress"
                      value={newProject.progress}
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded" // Disable progress input if New Project is selected
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Due Date</label>
                    <input
                      type="date"
                      name="dueDate"
                      value={newProject.dueDate}
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
                      onClick={handleAddProject}
                    >
                      Add Project
                    </button>
                    <button
                      type="button"
                      className="bg-gray-400 text-white px-4 py-2 rounded"
                      onClick={() => setModalOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
