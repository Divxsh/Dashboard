import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Icon from "../Icon/Icon";
import {
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  ResponsiveContainer,
} from "recharts";
// import { Line } from "react-chartjs-2";
// import {
//   CategoryScale,
//   Chart,
//   LineElement,
//   LinearScale,
//   PointElement,
// } from "chart.js";

// Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

// const data = {
//   labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
//   datasets: [
//     {
//       label: "Guest",
//       data: [390, 200, 300, 240],
//       borderColor: "#9BDD7C",
//       borderWidth: 2,
//       tension: 0.15,
//       pointStyle: false,
//     },
//     {
//       label: "User",
//       data: [420, 150, 450, 80],
//       borderColor: "#E9A0A0",
//       borderWidth: 2,
//       tension: 0.15,
//       pointStyle: false,
//     },
//   ],
// };

// const options = {
//   scales: {
//     y: {
//       alignToPixels: true,
//       beginAtZero: false,
//       ticks: {
//         type: "tick",
//         callback: (value, index, ticks) => {
//           console.log("value, index, ticks)", value, index, ticks);
//           // Display specific tick values on the y-axis
//           return value + 10;
//         },
//       },
//       grid: {
//         color: "rgba(0, 0, 0, 0.1)", // Color of the grid lines
//         borderColor: "rgba(0, 0, 0, 0.5)", // Color of the grid border
//         borderWidth: 1, // Width of the grid border
//       },
//       padding: "0",
//     },
//     x: {
//       grid: {
//         display: false, // Hide the x-axis grid lines
//       },
//       ticks: {
//         padding: "20",
//         showLabelBackdrop: true,
//       },
//     },
//   },
// };

const data = [
  {
    name: "Week 1",
    guest: 420,
    user: 390,
    // amt: 2400,
  },
  {
    name: "Week 2",
    guest: 150,
    user: 200,
    // amt: 2210,
  },
  {
    name: "Week 3",
    guest: 450,
    user: 300,
    // amt: 2290,
  },
  {
    name: "Week 4",
    guest: 80,
    user: 240,
    // amt: 2000,
  },
];

const Dashboard = () => {
  return (
    <div className="grid w-screen grid-cols-1 bg-[#F5F5F5] lg:grid-cols-[18rem_auto] lg:p-10">
      <Sidebar />
      <div className=" flex flex-col gap-10 px-5 py-5 lg:ml-10">
        <div className="flex items-center justify-between gap-x-7 ">
          <div className="hidden text-2xl font-bold md:block">Dashboard</div>
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

        <div className="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-1 md:gap-9">
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

        <div className="flex h-96 w-full flex-col justify-center rounded-xl bg-white px-10 py-6">
          <div className="my-5 flex items-center justify-between">
            <div className="flex flex-col">
              <h3 className="text-lg font-bold">Activities</h3>
              <div>
                <span className="mr-2 text-xs text-[#858585]">
                  May - June 2021
                </span>
                <Icon
                  name="arrow-down"
                  size={"xxs"}
                  className={"cursor-pointer"}
                />
              </div>
            </div>
            <div className="flex">
              <div>
                <div className="bg-[#E9A0A0]"></div>
                <div>Guest</div>
              </div>
              <div>
                <div className="bg-[#9BDD7C]"></div>
                <div>User</div>
              </div>
            </div>
          </div>
          <ResponsiveContainer
            width={"100%"}
            height="100%"
            minWidth={"20%"}
            onResize={(e) => console.log(e)}
          >
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />
              <YAxis strokeWidth={0} domain={[0, 500]} tickCount={6} />
              <CartesianGrid vertical={0} additive="replace" />
              <Area
                baseLine={0}
                type="monotone"
                dataKey="guest"
                stroke="#E9A0A0"
                fill="url(#colorUv)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="user"
                stroke="#9BDD7C"
                fill="url(#colorPv)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 grid-rows-2 gap-10 md:grid-cols-2 md:grid-rows-1">
          <div className="w-50% rounded-[10px] bg-white px-10 py-2.5">
            <div className="my-5 flex justify-between">
              <h3 className="text-lg font-bold">Top products</h3>
              <div>
                <span className="mr-2 text-xs text-[#858585]">
                  May - June 2021
                </span>
                <Icon
                  name="arrow-down"
                  size={"xxs"}
                  className={"cursor-pointer"}
                />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div></div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-x-2.5">
                    <div className="inline-block h-2.5 w-2.5 rounded-full bg-orange-400"></div>
                    <h4 className="font-lato text-sm font-bold">Basic Tees</h4>
                  </div>
                  <div className="ml-5 text-xs text-[#858585]">55%</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-x-2.5">
                    <div className="inline-block h-2.5 w-2.5 rounded-full bg-orange-400"></div>
                    <h4 className="font-lato text-sm font-bold">Basic Tees</h4>
                  </div>
                  <div className="ml-5 text-xs text-[#858585]">55%</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-x-2.5">
                    <div className="inline-block h-2.5 w-2.5 rounded-full bg-orange-400"></div>
                    <h4 className="font-lato text-sm font-bold">Basic Tees</h4>
                  </div>
                  <div className="ml-5 text-xs text-[#858585]">55%</div>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          <div className="rounded-[10px] bg-white px-10 py-2.5">
            <div className="my-5 flex justify-between">
              <h3 className="text-lg font-bold">Today’s schedule</h3>
              <div>
                <span className="mr-2 text-xs text-[#858585]">See All</span>
                <Icon
                  name="arrow-right"
                  size={"xxs"}
                  className={"cursor-pointer"}
                />
              </div>
            </div>
          </div>
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
