"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link"; 
import { usePathname } from "next/navigation";
import clsx from 'clsx';


const Sidebar = () => {
 
  const pathname = usePathname();

  const pages = ["Home", "About", "Contact", "Services"];
  
  // For independent dropdowns (can stay open with others)
  const [dashboardOpen, setDashboardOpen] = useState(true);
  const [frontPagesOpen, setFrontPagesOpen] = useState(false);
  
  // For exclusive dropdowns (only one open at a time)
  const [authPagesOpen, setAuthPagesOpen] = useState(false);
  const [miscOpen, setMiscOpen] = useState(false);
  
  // This function ensures only one exclusive dropdown is open
  const handleExclusiveDropdown = (dropdown) => {
    if (dropdown === 'auth') {
      setAuthPagesOpen(!authPagesOpen);
      setMiscOpen(false);  
    } else if (dropdown === 'misc') {
      setMiscOpen(!miscOpen);
      setAuthPagesOpen(false);  
    }
  };


 

  return (
    <>
      {/* <div
        className="d-flex flex-column py-3 position-fixed"
        style={{
          width: "200px",
          top: "58px",
          bottom: 0,
          left: 0,
          backgroundColor: "#b8a6a6ff",
          boxShadow: "4px 0px 9px 1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h4 className="text-center mb-4"></h4>
        <ul className="nav nav-pills flex-column flex-sm-row mb-auto">
          {pages.map((page) => (
            <li className="nav-item" key={page.toLowerCase()}>
              <a
                className={({ isActive }) =>
                  `nav-link px-4 ${isActive ? "active" : "text-light"}`
                }
                aria-current="page"
                style={{ marginBottom: "2px", width: "200px" }}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div> */}

      <div className="flex flex-col py-3 fixed top-0 bottom-0 left-0 w-[245px] h-screen gap-4 bg-[#F4F5FA] z-10">
        <div className="pl-4 pt-3">
          <a href="#">
            <div className="flex items-center min-h-[24px] gap-1.5">
              <img src="./materioIcon.png" style={{ height: "30px" }} />
              <span className="uppercase text-xl font-semibold text-gray-700">
                Materio
              </span>
            </div>
          </a>
        </div>

        <div className="overflow-auto custom-scroll">
          <nav>
            <ul className="flex flex-col space-y-2 ">
              {/* {pages.map((page) => (
                <li key={page.toLowerCase()}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-50 rounded-md"
                    aria-current="page"
                  >
                    {page}
                  </a>
                </li>
              ))} */}
              {/* Dashboards section */}
              <li>
               <div className={`hover:bg-gray-200 ${dashboardOpen && 'bg-gray-200'} rounded-r-3xl h-9`}>
                  <a className="flex items-center mb-2  ml-3 pt-0.5 cursor-pointer" onClick={() => setDashboardOpen(!dashboardOpen)}   >
                    <span><i className="ri-home-smile-line text-2xl"></i></span>
                    <span className="ml-2">Dashboards</span>
                    <span><div className="rounded-full bg-red-400 w-9 h-5 text-white ml-4 mr-2 flex items-center justify-center">5</div></span>
                    <span className={`transform transition-transform duration-300 ${dashboardOpen ? " rotate-90":" rotate-0"} ml-2.5`}><i className={`ri-arrow-right-s-line font-extralight text-2xl transition-transform duration-300 transform ${dashboardOpen?'rotate-90':'rotate-0'}`}></i></span>
                  </a>
               </div>
                {dashboardOpen && <div id="dashboard-items">
                  <ul>
                    
                    <li className="hover:bg-gray-200 active:bg-gradient-to-r from-purple-200 via-purple-200 to-purple-500 rounded-r-3xl h-9  flex items-center mb-1 mt-1">
                      <a className="flex items-center ml-3">
                        <span><i className="ri-circle-line text-[11px] pl-1.5"></i></span>
                        <span className="ml-5">CRM</span>
                        <span className="ml-23 rounded-full w-11 bg-purple-100 flex justify-center">Pro</span>
                      </a>
                    </li>
                    <li className={clsx( "hover:bg-gray-200", pathname === '/' && "bg-gradient-to-r from-purple-200 via-purple-200 to-purple-500", "rounded-r-3xl h-9 flex items-center mb-1")}>
                      <Link href='/' className="flex items-center ml-3 w-full h-full rounded-r-3xl">
                        <span><i className="ri-circle-line text-[11px] ml-1.5"></i></span>
                        <span className="ml-5">Analytics</span>
                      </Link>
                    </li>
                    <li className={clsx("hover:bg-gray-200", pathname === '/pages/user' && "bg-gradient-to-r from-purple-200 via-purple-200 to-purple-500", "rounded-r-3xl h-9  flex items-center mb-1")}>
                      <Link href='/pages/user' className="flex items-center ml-3 w-full h-full rounded-r-3xl">
                        <span><i className="ri-circle-line text-[11px] ml-1.5"></i></span>
                        <span className="ml-5">User</span>
                      </Link>
                    </li>
                    <li className="hover:bg-gray-200 active:bg-gradient-to-r from-purple-200 via-purple-200 to-purple-500 rounded-r-3xl h-9  flex items-center mb-1">
                      <a className="flex items-center ml-3">
                        <span><i className="ri-circle-line text-[11px] ml-1.5"></i></span>
                        <span className="ml-5">eCommerce</span>
                        <span className="ml-10 rounded-full w-12 bg-purple-100 flex justify-center">Pro</span>
                      </a>
                    </li>
                    <li className="hover:bg-gray-200 active:bg-gradient-to-r from-purple-200 via-purple-200 to-purple-500 rounded-r-3xl h-9  flex items-center mb-1">
                      <a className="flex items-center ml-3">
                        <span><i className="ri-circle-line text-[11px] ml-1.5"></i></span>
                        <span className="ml-5">Academy</span>
                        <span className="ml-15 rounded-full w-12 bg-purple-100 flex justify-center">Pro</span>
                      </a>
                    </li>
                    <li className="hover:bg-gray-200 active:bg-gradient-to-r from-purple-200 via-purple-200 to-purple-500 rounded-r-3xl h-9  flex items-center ">
                      <a className="flex items-center ml-3">
                        <span><i className="ri-circle-line text-[11px] ml-1.5"></i></span>
                        <span className="ml-5">Logistics</span>
                        <span className="ml-16 rounded-full w-12 bg-purple-100 flex justify-center">Pro</span>
                      </a>
                    </li>
                  </ul>
                </div>}
              </li>


              <li className="mb-2">
                <a className={`flex items-center hover:bg-gray-200 ${frontPagesOpen && 'bg-gray-200'}  rounded-r-3xl h-9 mb-2 cursor-pointer`} onClick={() => setFrontPagesOpen(!frontPagesOpen)}>
                  <span><i className="ri-file-copy-line text-2xl ml-3"></i></span>
                  <span className="ml-3">Front Pages</span>
                  <span className="rounded-full bg-purple-100 w-12 flex justify-center ml-2.5">Pro</span>
                  <span className={`transform transition-transform duration-300 ${frontPagesOpen ? " rotate-90":" rotate-0"} ml-2`}><i className={`ri-arrow-right-s-line font-extralight text-2xl `}></i></span>
                </a>
                {frontPagesOpen && <div className="mb-4 ">
                  <ul>
                    {["Landing", "Pricing", "Payment", "Checkout", "Help Center"].map((item)=>(
                      <li key={item} className="hover:bg-gray-200 rounded-r-3xl h-9 mb-1 flex items-center">
                        <a className="flex items-center ml-4.5">
                          <span><i className="ri-circle-line text-[11px]"></i></span>
                          <span className="ml-4">{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>}
              </li>


              <li className="mb-1">
                <ul className="mb-8 overflow-hidden">
                    <li className="flex items-center justify-center mb-1">
                      <div className="flex-1 w-1/6 border-1 border-gray-300"></div>
                      <span className="mx-2 text-gray-500 font-medium whitespace-nowrap">Apps & Pages</span>
                      <div className="flex-5 w-2/3 border-1 border-gray-300 mr-1"></div>
                    </li>
                    <li className="hover:bg-gray-200 mb-1 rounded-r-3xl h-9 flex items-center">
                      <a className="flex items-center">
                        <span className="ml-3"><i className="ri-mail-open-line text-2xl"></i></span>
                        <span className="ml-3">Email</span>  
                        <span className="ml-21.5 rounded-full w-12 bg-purple-100 flex justify-center items-center"> Pro</span>
                      </a>
                    </li>
                    <li className="hover:bg-gray-200 mb-1 rounded-r-3xl h-9 flex items-center">
                      <a className="flex items-center">
                        <span className="ml-3"><i className="ri-wechat-line text-2xl"></i></span>
                        <span className="ml-3">Chat</span>
                        <span className="ml-23 rounded-full w-12 bg-purple-100 flex justify-center">Pro</span>
                      </a>
                    </li>
                    <li className="hover:bg-gray-200 mb-1 rounded-r-3xl h-9 flex items-center">
                      <a className="flex items-center">
                        <span className="ml-3"><i className="ri-calendar-line text-2xl"></i></span>
                        <span className="ml-3">Calendar</span>
                        <span className="ml-15 rounded-full w-12 bg-purple-100 flex justify-center">Pro</span>
                      </a>
                    </li>
                    <li className={clsx("hover:bg-gray-200", pathname === '/pages/kanban-board' && "bg-gradient-to-r from-purple-200 via-purple-200 to-purple-500" , "mb-1 rounded-r-3xl h-9 flex items-center")}>
                      <Link href="/pages/kanban-board" className="flex items-center w-full h-full rounded-r-3xl">
                        <span className="ml-3"><i className="ri-drag-drop-line text-2xl"></i></span>
                        <span className="ml-3">Kanban</span>
                        <span className="ml-17.5 rounded-full w-12 bg-purple-100 flex justify-center">Pro</span>
                      </Link>
                    </li>
                    <li className="hover:bg-gray-200 mb-1 rounded-r-3xl h-9 flex items-center">
                      <a className="flex items-center">
                        <span className="ml-3"><i className="ri-user-settings-line text-2xl"></i></span>
                        <span className="ml-3">Account Settings</span>
                      </a>
                    </li>
                    <li className="mb-1.5 ">
                      <a className={`hover:bg-gray-200 ${authPagesOpen && 'bg-gray-200'}  mb-1 flex items-center rounded-r-3xl cursor-pointer`} onClick={() => handleExclusiveDropdown('auth')} >
                        <span className="ml-3"><i className="ri-shield-keyhole-line text-2xl"></i></span>
                        <span className="ml-3">Auth Pages</span>
                        <span className={`transform transition-transform duration-300 ${authPagesOpen ? " rotate-90":" rotate-0"} ml-17`}><i className="ri-arrow-right-s-line font-extralight text-2xl "></i></span>
                      </a>
                      {authPagesOpen && <div>
                        <ul >
                          {["Login" ,"Register", "Forgot Password"].map((label) => (
                            <li key={label} className="hover:bg-gray-200 rounded-r-3xl h-9 mb-1 flex items-center">
                              <a>
                                <span className="ml-4.5"><i className="ri-circle-line text-[11px]"></i></span>
                                <span className="ml-4">{label}</span>
                              </a>  
                            </li>
                          ))}
                        </ul>
                      </div>}
                    </li>
                    <li className="mb-1">
                      <a className={`hover:bg-gray-200 ${miscOpen && 'bg-gray-200'}  rounded-r-3xl h-9 mb-1 flex items-center cursor-pointer`} onClick={() => handleExclusiveDropdown('misc')} >
                        <span className="ml-3"><i className="ri-question-line text-2xl"></i></span>
                        <span className="ml-3">Miscellaneous</span>
                        <span  className={`transform transition-transform duration-300 ${miscOpen ? " rotate-90":" rotate-0"} ml-12`}><i className="ri-arrow-right-s-line font-extralight text-2xl"></i></span>
                      </a>
                      {miscOpen && <div>
                        <ul>
                          {["Error", "Under Maintenance"].map((label) => (
                            <li key={label} className="hover:bg-gray-200 rounded-r-3xl h-9 mb-1 flex items-center">
                              <a>
                                <span className="ml-4.5"><i className="ri-circle-line text-[11px]"></i></span>
                                <span className="ml-4">{label}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>   }                   
                    </li>
                    <li className="hover:bg-gray-200 rounded-r-3xl h-9 ">
                      <a className="flex items-center">
                        <span className="ml-3"><i className="ri-bar-chart-box-line text-2xl"></i></span>
                        <span className="ml-3"> Cards</span>
                      </a>
                    </li>
                </ul>
              </li>


              <li className="mb-4">
                <ul>
                  <li className="flex items-center justify-center mb-1">
                    <div className="border-1 border-gray-300 flex-1 w-1/6"></div>
                    <span className="mx-2 text-gray-500 font-medium whitespace-nowrap">Forms & Tables</span>
                    <div className="border-1 border-gray-300 flex-5 w-2/3 mr-1"></div>  
                  </li>
                  {[{label:"Form Layouts", icon:"ri-layout-4-line"}, { label:"Form Validation", icon:"ri-checkbox-multiple-line"}, { label:"Form Wizard", icon:"ri-git-commit-line"}, { label:"React Table", icon:"ri-table-alt-line"}, {label:"Form Elements", icon:"ri-radio-button-line"}, { label:"MUI Tables", icon:"ri-table-2"}].map(({label, icon})=>{
                    console.log(icon)
                    return (
                    <li key={label} className="hover:bg-gray-200 rounded-r-3xl h-9 mb-1 flex items-center">
                      <a className="flex items-center cursor-pointer">
                        <span className="ml-3"><i className={`${icon} text-2xl`}></i></span>
                        <span className="ml-3 text-ellipsis text-nowrap">{label}</span>
                        {label === "Form Validation" && ( <span className="ml-6 rounded-full w-12 bg-purple-100 flex justify-center">Pro</span> )}
                        {label === "Form Wizard" && ( <span className="ml-10 rounded-full w-12 bg-purple-100 flex justify-center">Pro</span> )}
                        {label === "React Table" && ( <span className="ml-12 rounded-full w-12 bg-purple-100 flex justify-center">Pro</span> )}
                        {label === "Form Elements" && ( <span className="ml-7 rounded-full w-12  flex justify-center"><i className="ri-external-link-line text-xl"></i></span> )}
                        {label === "MUI Tables" && ( <span className="ml-14 rounded-full w-12  flex justify-center "><i className="ri-external-link-line text-xl "></i></span> )}
                      </a>
                  </li>
                  )})}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
