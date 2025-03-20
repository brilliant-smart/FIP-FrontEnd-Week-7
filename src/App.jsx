import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Patients from "./components/Patients";
import Appointments from "./components/Appointments";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="d-flex">
      {/* Sidebar */}
      {isSidebarOpen && <Sidebar />}

      {/* Main Content */}
      <div
        className={`container main-content ${
          isSidebarOpen ? "ml-250" : "ml-0"
        }`}
      >
        <button
          className="btn btn-primary mt-3"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
        </button>
        <h1 className="mt-4">Hospital Management System</h1>

        {/* Sections */}
        <section id="dashboard">
          <Dashboard />
        </section>

        <section id="patients">
          <Patients />
        </section>

        <section id="appointments">
          <Appointments />
        </section>
      </div>
    </div>
  );
}

export default App;
