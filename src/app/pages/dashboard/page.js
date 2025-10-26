"use client";
import React from "react";
import { Clock, Users, Package, DollarSign } from "lucide-react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, LineChart, Line } from "recharts";

const Dashboard = () => {
  const weeklyData = [
    { name: "Mon", value: 35 },
    { name: "Tue", value: 45 },
    { name: "Wed", value: 30 },
    { name: "Thu", value: 70 },
    { name: "Fri", value: 40 },
    { name: "Sat", value: 55 },
    { name: "Sun", value: 45 },
  ];

  const profitData = [
    { month: "Jan", profit: 20 },
    { month: "Feb", profit: 25 },
    { month: "Mar", profit: 22 },
    { month: "Apr", profit: 30 },
    { month: "May", profit: 28 },
    { month: "Jun", profit: 35 },
  ];

  const data = [
  { name: 'Session 1', value: 50 },
  { name: 'Session 2', value: 50 },
  { name: 'Session 3', value: 50 },
  { name: 'Session 4', value: 50 },
  { name: 'Session 5', value: 50 },
];

  return (
    <div className="p-6 lg:ml-[165px] mt-[750px] ">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-6 ">
        {/* congratulations card */}
        <div className="bg-white rounded-sm  shadow-md p-6 relative w-[320px] h-52">
          <div >
            <h3 className="text-xl font-medium text-[#423B50] mb-1 ">
              Congratulations John! 🎉
            </h3>
            <p className="text-gray-500 text-[16px] mb-3">
              Best seller of the month
            </p>
            <div className="text-2xl font-medium text-purple-600 mb-1">
              $42.8k
            </div>
            <p className="text-gray-500 text-sm mb-2">78% of target 🚀</p>
            <button className="bg-[#8C57FF] text-white px-3 py-2 h-8 w-25 rounded-sm shadow-md hover:bg-purple-700 text-sm flex items-center justify-center">
              View Sales  
            </button>
          </div>
          <div className="absolute right-10 bottom-5 w-20"><img src="https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/pages/trophy.png"/></div>
        </div>

        {/* transaction card */}
        <div className="lg:col-span-2 bg-white rounded-sm shadow-md w-[625px] ml-10 p-7">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-medium text-[#423B50]">Transactions</h3>
              <p className="text-gray-500 text-sm">
                Total 48.5% Growth 😎 this month
              </p>
            </div>
            <div className=""><button className="text-gray-600 ml-4 flex items-center justify-center rounded-[50%] hover:bg-gray-100  text-2xl w-8">⋮</button></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Sales</p>
                <p className="text-xl font-medium text-gray-800">245k</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Users</p>
                <p className="text-xl font-medium text-gray-800">12.5k</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Package className="text-orange-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Products</p>
                <p className="text-xl font-medium text-gray-800">1.54k</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                <DollarSign className="text-cyan-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Revenue</p>
                <p className="text-xl font-medium text-gray-800">$88k</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* weekly overview */}
        <div className="bg-white rounded-sm shadow-md w-[320px] max-h-[500px] p-6">
          <div className="flex items-center justify-between mb-4 ">
            <h3 className="text-lg font-medium text-[#423B50]">Weekly Overview</h3>
            <button className="text-gray-600 hover:bg-gray-100 text-2xl w-8 rounded-[50%]">⋮</button>
          </div>
          <div className="flex justify-center  ">
            <ResponsiveContainer width="80%" height={200} className="mx-auto">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="8 8" stroke="#f0f0f0" vertical={false}/>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} width={19} />
                <Tooltip />
                <Bar dataKey="value" fill="#7c3aed" radius={[8, 8, 0, 0]} barSize={8}/>
              </BarChart>
            </ResponsiveContainer>         
          </div>
          <div className="flex justify-between mb-6">
            <span className="font-medium text-2xl text-[#423B50] ml-2">45%</span>
            <span className="ml-5 text-[#2e263db3]">Your sales performance is 45% 😎 better compared to last month</span>
          </div>
          <div className="text-[17px] hover:bg-[#6638c9] bg-[#7C3AED] rounded-md px-24.5 py-2 cursor-pointer"><a className=" text-white font-medium text-[17px]  ">Details</a></div>
        </div>

        {/* toatal earning */}
        <div className="bg-white rounded-sm shadow-md p-6 ml-10 w-[305px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-[#423B50]">Total Earning</h3>
            <button className="text-gray-600 ml-4 w-8 hover:bg-gray-100 rounded-[50%] text-2xl">⋮</button>
          </div>

          <div className="mb-6">
            <span className="text-4xl font-medium text-gray-800 mb-2">$24,895</span>
            <span className="text-green-500 text-sm font-semibold">↑ 10%</span>
            <p className="text-gray-500 text-sm">
              Compared to $84,325 last year
            </p>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">Zipcar</h4>
                <p className="text-[15.5px] text-gray-500">Vuejs, React & HTML</p>
              </div>
            </div>
            <div className="text-xl font-bold text-gray-800">$24,895.65</div>
          </div>
        </div>

        {/* toatal profit */}

        <div className="grid grid-cols-2 gap-7">
          <div className="bg-white rounded-sm shadow-md p-6 ml-15.5 w-[140px] h-52">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <h3 className="text-2xl font-medium text-[#423B50]">$86.4k</h3>
              </div>
            </div>
           
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={profitData}>
                <CartesianGrid 
                  strokeDasharray="9 9"  // dashed line pattern
                  vertical={true}         // enables vertical grid lines
                  horizontal={false}      // disables horizontal lines (optional)
                />
                <YAxis
                  type="number"
                  domain={['dataMin - 2', 'dataMax']}
                  hide={true}  // hide the axis if you don’t want it visible
                />

                <Line
                  type="linear"
                  dataKey="profit"
                  stroke="#7c3aed"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mb-5 text-center font-medium text-gray-800">Total Profit</div>
          </div>
          <div className="bg-white rounded-sm shadow-md p-5 ml-17.5 w-[135px] h-[240px]">
            <div className="grid grid-cols-2 items-center justify-around ">
              <i className="ri-pie-chart-2-line flex items-center justify-center text-white text-[25px] shadow-md bg-gray-400 rounded-[50%] w-[40px] h-[40px] "  />
              <button className="text-gray-600 ml-4 hover:bg-gray-100 rounded-[50%] text-2xl">⋮</button>
            </div>
            <div className="mt-4 ">
              <p className="text-gray-600 text-[15.5px] mb-2">Total Profit</p>
              <div className="text-[25px] font-medium text-gray-800 mb-1">$25.6k</div>
              <div className="text-green-500 font-normal mb-5">+42%</div>
              <p className="font-normal text-gray-700 text-[15.5px] ">Weekly Profit</p>
            </div>
          </div>
          <div className="bg-white rounded-sm shadow-md p-5 ml-15.5 w-[140px] h-[200px]">
            <div className="grid grid-cols-2 items-center justify-around ">
              <i className="ri-file-word-2-line flex items-center justify-center text-white text-[22px] shadow-md bg-[#8C57FF] rounded-[50%] w-[40px] h-[40px]" />
              <button className="text-gray-600 ml-4 hover:bg-gray-100 rounded-[55%] text-2xl">⋮</button>
            </div>
            <div className="mt-4 ">
              <p className="text-gray-500 text-[17px] mb-2">New Project</p>
              <div className="flex items-center justify-around"><span className="text-[25px] font-medium text-gray-800 te">862</span><span className="text-red-500 font-normal">-18%</span></div>
              <div className="text-[15px] text-center mt-1">Yearly Project</div>
            </div>
          </div>
          <div className="bg-white rounded-sm shadow-md p-4 ml-17.5 w-[135px] h-[200px]">
            <div className="text-[25px] font-normal ml-1">2,856 </div>
            <div className="mt-1 ">
              <ResponsiveContainer width="100%" height={100}>
                <BarChart data={data}>
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  {/* <XAxis dataKey="name" /> */}
                  {/* <YAxis /> */}
                  {/* <Tooltip /> */}
                  <Bar dataKey="value" fill="#8884d8" barSize={8} bandSize={10} className="rounded-full" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-[16px] flex items-center justify-center font-normal">Sessions</div>
          </div>
          
        </div>
      </div>
      <div className="flex justify-end  sticky bottom-3">
        <button className="w-[170px] mt-4 text-white text-[17px] font-[510] py-2 rounded-lg hover:shadow-lg transition-all flex items-center justify-center glow-btn">
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
