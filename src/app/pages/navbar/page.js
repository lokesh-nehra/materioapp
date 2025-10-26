'use client';
import React, { useState } from "react";
import Link from "next/link"; 
import { X, Search, Moon, Bell} from "lucide-react";

const Navbar = () => {
  const [profile, setProfile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <nav className="bg-[#F4F5FA]  px-4 py-3 fixed top-0 left-[240px] right-0 z-35">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-4 flex-1">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="relative flex-1 max-w-40">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search ⌘K"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>
          </div>
          
          <Link href={"/"}>
              {/* <img
                src="https://app.collectivwork.com/images/collectivWorkLogo.svg"
                alt="Logo"
                className="h-9"
                /> */}
          </Link>

          
          {/* <div className="flex items-center space-x-4">
            <Link href="/profile" className="text-white bg-blue-500 rounded-lg py-2 px-4 hover:bg-blue-600 transition duration-300">
                Profile
            </Link>
            <Link href="/settings" className="text-white bg-blue-500 rounded-lg py-2 px-4 hover:bg-blue-600 transition duration-300">
                Settings
            </Link>

        
            <button
              className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              onClick={() => setProfile(!profile)}
              >
              <img src="https://demos.themeselection.com/materio-mui-nextjs-admin-template-free/demo/images/avatars/1.png" className="rounded-3xl"/>
            </button>
          </div> */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg">
                <a href="https://github.com/themeselection/materio-mui-nextjs-admin-template-free"><img src="https://img.shields.io/github/stars/themeselection/materio-mui-nextjs-admin-template-free" className="h-6" /></a>
              </div>
              
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                 <Moon size={20} />
              </button>
              
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              {/* <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center cursor-pointer relative">
                <span className="text-white font-semibold">JD</span>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </div> */}

               <button
              className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition duration-300 cursor-pointer"
              onClick={() => setProfile(!profile)}
              >
              <img src="https://demos.themeselection.com/materio-mui-nextjs-admin-template-free/demo/images/avatars/1.png" className="rounded-3xl"/>
            </button>
            </div>
          </div>
        </div>

        {profile && (
            <div
              
              className="profile1"
              style={{
                position: "absolute",
                top: "60px", 
                right: "10px",
                background: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "10px",
                borderRadius: "10px",
                width: "250px",
                height: "275px"
              }}
            >
              <div style={{ display: "flex", alignItems:"center", gap:"1px", marginBottom: "10px", marginLeft:"5px", marginRight:"5px", borderBottom: "1.5px solid #f1f1f1ff", }}>
                <div>
                  <img src="https://demos.themeselection.com/materio-mui-nextjs-admin-template-free/demo/images/avatars/1.png" className="rounded-3xl w-12 shadow-md"/>
                </div>
                <div style={{  padding: "10px", }} className="ml-2 ">
                  <p style={{ color: "black", margin: "0", fontSize:"15px"}} className="font-semibold">John Doe</p>
                  <p style={{ margin: "0", fontSize:"15px" }} className="text-gray-400">
                    admin@materio.com
                  </p>
                </div>
              </div>
              <div className="flex flex-col px-3 mb-2">
                <Link href='/pages/user-profile' className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  <i className="ri-user-3-line text-[22px] text-gray-700"/>
                  <p style={{margin: "5px 0"}} className="text-md text-gray-700 ">My Profile</p> 
                </Link>
                <Link href="/components/user-profile" className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  <i className="ri-settings-4-line text-[22px] text-gray-700"/>
                  <p style={{margin: "5px 0"}} className="text-md text-gray-700">Settings</p>
                </Link>
                <Link href="/components/user-profile" className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  <i className="ri-money-dollar-circle-line text-[22px] text-gray-700"/>
                  <p style={{ margin: "5px 0"}} className="text-md text-gray-700">Pricing</p>
                </Link>
                <Link href="/components/user-profile" className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  <i className="ri-question-line text-[22px] text-gray-700"/>
                  <p style={{margin: "5px 0"}} className="text-md text-gray-700">FAQ</p>
                </Link>
              </div>
             
              <button className="text-white flex items-center justify-center rounded-[4px] w-50 h-8 ml-3.5 bg-[#E64449] cursor-pointer shadow-md">Logout<i className="ri-logout-box-r-line text-white text-sm ml-1"/></button>
              
            </div>
          )}
      </nav>

      
    </>
  );
};

export default Navbar;
