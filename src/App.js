import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Reports from "./Component/Pages/Reports";
import Drives from "./Component/Pages/Drives";
import Partners from "./Component/Pages/Partners";
import Users from "./Component/Pages/Users";
import Billing from "./Component/Pages/Billing";
import Setting from "./Component/Pages/Setting";
import Dashboard from "./Component/Pages/Dashboard";
import Sidebar from "./Component/Sidebar";
import { IoMdCalendar } from "react-icons/io";
import Calendar from "react-calendar";
import calendar from "./calendar.png";

function App() {
  return (
    <div className="App">
      <h3 className="Heading">List Of College</h3>
      <div className="heading2">
        <span>PluginLive</span>
        <a href={<Calendar />}>
          <img src={calendar} />
        </a>
      </div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/drives" element={<Drives />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/users" element={<Users />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
