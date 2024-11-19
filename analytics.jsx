import React from "react";
import Dashboard from "../components/Dashboard";
import PieChart from "../components/piechart";
import BarChartComponent from "../components/barchart";
import LineChart from "../components/linechart";
import PerformanceChart from "../components/performancechart";
function Analytics() {
  return (
    <div className="flex bg-gray-200">
      <div className="w-[242.01px]">
        <Dashboard />
      </div>

      <div className="min-h-screen p-7 w-full bg-white rounded-2xl mt-3 ml-3 mr-3">
        <h1 className="ml-3 mb-3 text-3xl font-bold">📊 Analytics</h1>
        <div className="grid grid-cols-2 gap-6">
          <PieChart />
          <BarChartComponent />
          <PerformanceChart />
          <LineChart />
        </div>
      </div>
    </div>
  );
}
export default Analytics;

