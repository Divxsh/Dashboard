import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Icon from "../Icon/Icon";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const data = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Guest",
      data: [390, 200, 300, 240],
      borderColor: "#9BDD7C",
      borderWidth: 2,
      tension: 0.15,
      pointStyle: false,
    },
    {
      label: "User",
      data: [420, 150, 450, 80],
      borderColor: "#E9A0A0",
      borderWidth: 2,
      tension: 0.15,
      pointStyle: false,
    },
  ],
};

const options = {
  scales: {
    y: {
      alignToPixels: true,
      beginAtZero: false,
      ticks: {
        type: "tick",
        callback: (value, index, ticks) => {
          console.log("value, index, ticks)", value, index, ticks);
          // Display specific tick values on the y-axis
          return value + 10;
        },
      },
      grid: {
        color: "rgba(0, 0, 0, 0.1)", // Color of the grid lines
        borderColor: "rgba(0, 0, 0, 0.5)", // Color of the grid border
        borderWidth: 1, // Width of the grid border
      },
      padding: "0",
    },
    x: {
      grid: {
        display: false, // Hide the x-axis grid lines
      },
      ticks: {
        padding: "20",
        showLabelBackdrop: true,
      },
    },
  },
};

const Dashboard = () => {
  return (
    <div className="grid h-screen w-screen grid-cols-[18rem_auto] bg-[#F5F5F5] p-10">
      <Sidebar />
      <div className=" ml-10 flex flex-col gap-10 px-5 py-5">
        <div className="flex items-center justify-between gap-x-7 ">
          <div className="text-2xl font-bold">Dashboard</div>
          <div className="flex items-center gap-x-7">
            <div className="relative flex w-fit">
              <Icon
                name="search"
                size={"14px"}
                className={"absolute right-3 top-1/2 -translate-y-1/2"}
              />
              <input
                type="text"
                placeholder="Search..."
                className="rounded-[10px] px-4 py-1.5 font-lato"
              />
            </div>
            <Icon name="bell" size={"20px"} />
            <img
              src={"profile.png"}
              alt="avataar"
              className="h-7 w-7 rounded-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-9">
          <div className="flex h-[120px] flex-col rounded-[10px] bg-[#DDEFE0] px-6 py-5">
            <Icon name={"revenue"} className={"ml-auto"} />
            <span className="font-lato text-sm">Total Revenues</span>
            <span className="font-sans text-2xl font-bold">$2,129,430</span>
          </div>

          <div className="flex h-[120px] flex-col rounded-[10px] bg-[#F4ECDD] px-6 py-5">
            <Icon name={"transaction"} className={"ml-auto text-black"} />
            <span className="font-lato text-sm">Total Transactions</span>
            <span className=" font-sans text-2xl font-bold">1520</span>
          </div>

          <div className="flex h-[120px] flex-col rounded-[10px] bg-[#EFDADA] px-6 py-5">
            <Icon name={"like"} className={"ml-auto"} />
            <span className="font-lato text-sm">Total Likes</span>
            <span className=" font-sans text-2xl font-bold">9721</span>
          </div>

          <div className="flex h-[120px] flex-col rounded-[10px] bg-[#DEE0EF] px-6 py-5">
            <Icon name={"users"} className={"ml-auto"} />
            <span className="font-lato text-sm">Total Users</span>
            <span className=" font-sans text-2xl font-bold">892</span>
          </div>
        </div>

        <div className="h-96 rounded-xl bg-white px-10 py-6">
          <Line data={data} options={options} />
        </div>

        <div className="grid grid-cols-2 gap-x-10">
          <div className="rounded-[10px] bg-white px-10 py-7"> hello</div>
          <div className="rounded-[10px] bg-white px-10 py-7"> lelo</div>
        </div>
      </div>
    </div>
  );
};
// grid-rows-[20% 30% 40% 20%]
// grid-cols-[18rem_auto] grid-rows-[80px_auto]

export default Dashboard;

// grid-template-columns: 18rem auto !important;
//     grid-template-rows: 80px auto;
