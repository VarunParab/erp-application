import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import React from "react";
import Homepage from "./pages/homepage";
import Task from "./pages/task";
import Chats from "./pages/chats";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/task" element={<Task />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </Router>
  );
}
export default App;