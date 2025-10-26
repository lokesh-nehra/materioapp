'use client';
import { User, CheckCircle, Star, Flag, Languages, Phone, MessageCircle, Mail, BarChart3 } from 'lucide-react';
import { useState } from "react";


const UserProfile = () => {
  const [profile, setProfile] = useState(true);
  const [teams, setTeams] = useState(false);
  const [projects, setProjects] = useState(false);
  const [connections, setConnections] = useState(false);

  return (
    <div className="bg-white w-[960px] h-[350px] ml-69 mt-[90px] rounded-md shadow-md relative">
      <div className="bg-stripes h-[240px] rounded-t-md"/>
      <div className=" border-6 border-white absolute bottom-[25px] left-5 w-33 rounded-md bg-white">
        <img
          src="https://demos.themeselection.com/materio-mui-nextjs-admin-template-free/demo/images/avatars/1.png"
          className="rounded-md"
        />
      </div>

      <div className=" h-[109.7px] max-w-[780px]">
        <div className="flex items-center w-[750px] h-[109px] ml-[165px]">
          <div className="w-[500px] h-[79px] ml-2">
            <div className="text-[28px] font-medium text-gray-700">John Doe</div>
            <div className="flex items-center">
              <span className="text-gray-600 text-[16px] font-[450] flex items-center"><i className="ri-palette-line mr-2 text-2xl"/>UX Designer</span>
              <span className="text-gray-600 text-[16px] font-[450] flex items-center ml-5"><i className="ri-map-pin-2-line mr-2 text-2xl" />Vatican City</span>
              <span className="text-gray-600 text-[16px] font-[450] flex items-center ml-5"><i className="ri-calendar-line mr-2 text-2xl"/>April 2021</span>
            </div>
          </div>
          <button className="bg-[#8c5bf6] rounded-md p-2 w-[150px] text-white ml-30 cursor-pointer shadow-md hover:bg-[#7a41f5]"><i className="ri-user-follow-line text-white mr-1"/>Connected</button>
        </div>
      </div>

      <div className="mt-10 h-13 flex items-center ">
        <button onClick={()=> {setProfile(!profile); setTeams(false); setProjects(false); setConnections(false)}} className={`flex items-center justify-center gap-1.5 font-[500] rounded-md h-10 w-[130px] ${profile ? "bg-[#8c5bf6] text-white" : "hover:bg-[#e9e1f9] hover:text-[#8c5bf6]"} cursor-pointer`}><i className='ri-user-3-line text-lg'/>Profile</button>
        <button onClick={()=> {setTeams(!teams); setProjects(false); setConnections(false); setProfile(false)}} className={`flex items-center justify-center gap-1.5 font-[500] rounded-md h-10 ml-1 w-[130px] ${teams ? "bg-[#8c5bf6] text-white" : "hover:bg-[#e9e1f9] hover:text-[#8c5bf6]"} cursor-pointer`}><i className='ri-team-line text-lg'/>Teams</button>
        <button onClick={()=> {setProjects(!projects); setConnections(false); setProfile(false); setTeams(false)}} className={`flex items-center justify-center gap-1.5 font-[500] rounded-md h-10 ml-1 w-[130px] ${projects ? "bg-[#8c5bf6] text-white" : "hover:bg-[#e9e1f9] hover:text-[#8c5bf6]"} cursor-pointer `}><i className='ri-computer-line text-lg' />Projects</button>
        <button onClick={()=> {setConnections(!connections); setProfile(false); setTeams(false); setProjects(false)}} className={`flex items-center justify-center gap-1.5 font-[500] rounded-md h-10 ml-1 w-[130px] ${connections ? "bg-[#8c5bf6] text-white" : "hover:bg-[#e9e1f9] hover:text-[#8c5bf6]"} cursor-pointer `}><i className='ri-link-m text-lg' />Connections</button>
      </div>

      
      {profile && 
        <div className="mt-5 grid grid-cols-2 w-[775px] space-y-7 ">
          <div className="w-[360px] bg-white rounded-lg shadow-md p-6 ">
            {/* About Section */}
            <h3 className="text-gray-400 text-xs font-semibold mb-4 tracking-wide">ABOUT</h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-600">
                <User size={20} className="text-gray-400" />
                <span className="text-[16px] font-[450]">Full Name:</span>
                <span className="text-gray-600">John Doe</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <CheckCircle size={20} className="text-gray-400" />
                <span className="text-[16px] font-[450]">Status:</span>
                <span className="text-gray-600">Active</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Star size={20} className="text-gray-400" />
                <span className="text-[16px] font-[450]">Role:</span>
                <span className="text-gray-600">Developer</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Flag size={20} className="text-gray-400" />
                <span className="text-[16px] font-[450]">Country:</span>
                <span className="text-gray-600">USA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Languages size={20} className="text-gray-400" />
                <span className="text-[16px] font-[450]">Language:</span>
                <span className="text-gray-600">English</span>
              </div>
            </div>

            {/* Contacts Section */}
            <h3 className="text-gray-400 text-xs font-semibold mb-4 tracking-wide">CONTACTS</h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone size={20} className="text-gray-400" />
                <span className="text-[16px] font-[450]">Contact:</span>
                <span className="text-gray-600">(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MessageCircle size={20} className="text-gray-400" />
                <span className="text-[16px] font-[450]">Skype:</span>
                <span className="text-gray-600">John.doe</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail size={20} className="text-gray-400" />
                <span className="text-[16px] font-[450]">Email:</span>
                <span className="text-gray-600">John.doe@example.com</span>
              </div>
            </div>

            {/* Teams Section */}
            <h3 className="text-gray-400 text-xs font-semibold mb-4 tracking-wide">TEAMS</h3>
            <div className="space-y-2">
              <div className="text-gray-700 text-[16px] font-[450]">
                Backend Developer <span className="text-gray-500">(126 Members)</span>
              </div>
              <div className="text-gray-700 text-[16px] font-[450]">
                React Developer <span className="text-gray-500">(98 Members)</span>
              </div>
            </div>
          </div>

          
          
          <div className="w-[570px] bg-white rounded-lg shadow-md h-[530px] p-6 ">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <i className="ri-bar-chart-2-line text-[22px] text-gray-700"/>
                <h2 className="text-lg font-semibold text-gray-900">Activity Timeline</h2>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-3.5">
              {/* Invoice Activity */}
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <div className="w-0.5 flex-1 bg-gray-200 mt-2"></div>
                </div>
                <div className="flex-1 pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-[17px] font-medium text-gray-700">12 Invoices have been paid</div>
                    <span className="text-sm text-gray-400">12 min ago</span>
                  </div>
                  <p className="text-gray-600 mb-2">Invoices have been paid to the company.</p>
                  <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md w-fit">
                    <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/icons/pdf-document.png' className="px-2 py-1 rounded pdfImg" />
                    <span className="text-gray-700 text-sm">invoice.pdf</span>
                  </div>
                </div>
              </div>

              {/* Client Meeting */}
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="w-0.5 flex-1 bg-gray-200 mt-2"></div>
                </div>
                <div className="flex-1 pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[17px] font-medium text-gray-700">Client Meeting</h3>
                    <span className="text-sm text-gray-400">45 min ago</span>
                  </div>
                  <p className="text-gray-600 mb-2">Project meeting with john @10:15am</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                      <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' className='rounded-full'/>
                    </div>
                    <div>
                      <div className="font-normal text-[15px] text-gray-750">Lester McCarthy (Client)</div>
                      <div className="text-[13px] text-gray-500">CEO of ThemeSelection</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Create New Project */}
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <div className="w-0.5 flex-1 bg-gray-200 mt-2"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[17px] font-medium text-gray-700">Create a new project for client</h3>
                    <span className="text-sm text-gray-400">2 Days Ago</span>
                  </div>
                  <p className="text-gray-600 mb-2 text-[15px]">6 team members in a project</p>
                  <div className="flex items-center gap-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                      <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' className='rounded-full'/>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                      <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/8.png' className='rounded-full'/>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                      <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/6.png' className='rounded-full' />
                    </div>
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-sm font-medium border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer">
                      +3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[360px] bg-white rounded-md shadow-md p-6 h-[200px] ">
            {/* Overview Section */}
            <h3 className="text-gray-400 text-xs font-semibold mb-4 tracking-wide">OVERVIEW</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <i className=" ri-check-line text-gray-400 text-[22px]" />
                <span className="text-[16px] font-[450]">Task Compiled:</span>
                <span className="text-gray-600">13.5k</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 ">
                <i className="ri-user-3-line text-gray-400 text-[22px]" />
                <span className="text-[16px] font-[450]">Connections</span>
                <span className="text-gray-600">897</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <i className="ri-function-line text-gray-400 text-[22px]" />
                <span className="text-[16px] font-[450]">Projects Compiled:</span>
                <span className="text-gray-600">146</span>
              </div>
            </div>
          </div>

          {/* It contains connections and teams card*/}
          <div className='flex gap-7 w-[570px] '> 
            <div className="min-w-[271px]  min-h-[370px] h-[470px] bg-white rounded-lg shadow-md p-5 ">
              {/* Connection Section */}
              <h3 className="text-gray-700 text-lg font-medium mb-4 tracking-wide">Connections</h3>
              <div className="space-y-6 mb-6">
                <div className="flex items-center justify-center gap-4 text-gray-600">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' className='w-10 h-10 rounded-full'/>
                  <div className='mr-2'><div className="text-[16px] font-[450]">Cecilia Payne</div>
                  <div className="text-gray-600 text-[13px]">45 Connections</div></div>
                  <div className='ml-2 border-1 border-[#8c5bf6] hover:bg-[#efeafa] w-9 h-9 flex items-center justify-center rounded-md'><i className='ri-user-add-line text-[#8c5bf6] text-xl'/></div>
                </div>
                <div className="flex items-center justify-center gap-4 text-gray-600">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' className='w-10 h-10 rounded-full'/>
                  <div className='mr-2'><div className="text-[16px] font-[450]">Curtis Fletcher</div>
                  <div className="text-gray-600 text-[13px]">1.32k Connections</div></div>
                  <div className='border-1 border-[#8c5bf6] bg-[#8c5bf6] w-9 h-9 flex items-center justify-center rounded-md'><i className='ri-user-3-line text-white text-xl'/></div>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/4.png' className='w-10 h-10 rounded-full'/>
                  <div className='ml-2'><div className="text-[16px] font-[450]">Alice Stone</div>
                  <div className="text-gray-600 text-[13px]">125 Connections</div></div>
                  <div><i className='ri-user-3-line text-white'/></div>
                  <div className='border-1 border-[#8c5bf6] bg-[#8c5bf6] w-9 h-9 flex items-center justify-center rounded-md'><i className='ri-user-3-line  text-white text-xl'/></div>
                </div>
                <div className="flex items-center justify-center gap-4 text-gray-600">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/5.png' className='w-10 h-10 rounded-full'/>
                  <div className='mr-3'><div className="text-[16px] font-[450]">Darell Barnes</div>
                  <div className="text-gray-600 text-[13px]">456 Connections</div></div>
                  <div className='border-1 border-[#8c5bf6] hover:bg-[#efeafa] w-9 h-9 ml-1 flex items-center justify-center rounded-md'><i className='ri-user-add-line text-[#8c5bf6] text-xl'/></div>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-600">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/8.png' className='w-10 h-10 rounded-full'/>
                  <div className='mr-2 ml-1'><div className="text-[16px] font-[450]">Eugenia Moore</div>
                  <div className="text-gray-600 text-[13px]">1.2k Connections</div></div>
                  <div className='border-1 border-[#8c5bf6] hover:bg-[#efeafa] w-9 h-9 ml-1 flex items-center justify-center rounded-md'><i className='ri-user-add-line text-[#8c5bf6] text-xl'/></div>
                </div>
              </div>
              <div className='flex justify-center mb-0'><button className='text-[#8c5bf6] hover:text-[#5612ea] mt-7 cursor-pointer'>View all connections</button></div>
            </div>

            <div className="min-w-[271px] max-h-[470px]  bg-white rounded-lg shadow-md p-5 ">
              {/* Teams Section */}
              <h3 className="text-gray-700 text-lg font-medium mb-4 tracking-wide">Teams</h3>
              <div className="space-y-3.5 mb-5">
                <div className="flex items-center gap-3 text-gray-600">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/logos/react-bg.png' className='w-10 h-10 rounded-full'/>
                  <div  className="mr-0.5">
                    <div className="text-[16px] font-[450]">React Developers</div>
                    <div className="text-gray-600 text-[13px]">72 Members</div>
                  </div>
                  <div className='text-red-600 text-[13px] bg-red-200 p-1 px-2 rounded-full '>Developer</div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/icons/support-bg.png' className='w-10 h-10 rounded-full'/>
                  <div className="mr-0.5">
                    <div className="text-[16px] text-gray-800 font-[450]">Support Team</div>
                    <div className="text-gray-600 text-[13px]">122 Members</div>
                  </div>
                  <div className='text-purple-600 text-[13px] bg-purple-200 p-1 px-2 rounded-full '>Support</div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/logos/figma-bg.png' className='w-10 h-10 rounded-full'/>
                  <div className="mr-0.5">
                    <div className="text-[16px] text-gray-800 font-[450]">UI Designer</div>
                    <div className="text-gray-600 text-[13px]">7 Members</div>
                  </div>
                  <div className='text-blue-600 text-[13px] bg-blue-200 p-1 px-2 rounded-full ml-2.5 '>Designer</div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <img src="https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/logos/vue-bg.png" className='w-10 h-10 rounded-full'/>
                  <div className="mr-0.5">
                    <div className="text-[16px] text-gray-800 font-[450]">Vue.js Developers</div>
                    <div className="text-gray-600 text-[13px]">289 Members</div>
                  </div>
                  <div className='text-red-600 text-[13px] bg-red-200 p-1 px-2 rounded-full '>Developer</div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/logos/twitter-bg.png' className='w-10 h-10 rounded-full'/>
                  <div className="mr-0.5">
                    <div className="text-[16px] text-gray-800 font-[450]">Digital Marketing</div>
                    <div className="text-gray-600 text-[13px]">24 Members</div>
                  </div>
                  <div className='text-gray-600 text-[13px] bg-gray-300 p-1 px-2 rounded-full '>Marketing</div>
                </div>
              </div>
              <div className='flex justify-center mb-0'><button className='text-[#8c5bf6] hover:text-[#5612ea]  cursor-pointer'>View all Teams</button></div>
            </div>    
          </div>

          {/* <div className='bg-amber-400 w-[570px] min-h-[370px]'>
            <div className='bg-blue-900 h-12'>
              <h3 className="text-gray-700 text-lg font-medium mb-4 tracking-wide text-white">Projects</h3>
            </div>
            <div>
              
            </div>
          </div> */}

        </div>
      }

      {teams && 
        // <div className='grid grid-cols-3 gap-6 p-6'>
        //   <div className="">
        //     Hello
        //   </div>
        // </div>
        <div className="grid grid-cols-3  rounded-2xl pr-2 mt-4 gap-6 transition">
          <div className='bg-white min-w-[310px] max-h-[245px] flex-col space-y-3 p-6 rounded-md shadow-xl'>
            <div className='flex items-center gap-2 '>
              <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/logos/react-bg.png' className='w-10 h-10 rounded-full'/>
              <h4 className='font-[549] text-[19px] text-gray-800 mr-3.5'>React Developers</h4>
              <div className='hover:bg-gray-200 w-9.5 h-8 rounded-full flex items-center justify-center'><i className='ri-star-line text-gray-400 text-xl'/></div>
              <div className='hover:bg-gray-200 w-9.5 h-8 rounded-full flex items-center justify-center'><i className='ri-more-2-line text-gray-400 text-xl ' /></div>
            </div>
            <div className='text-gray-500 mt-4'>
              We don’t make assumptions about the rest of your technology stack, so you can develop features in React.
            </div>
            <div className='flex items-center justify-between mt-5'>
              <div className="flex items-center gap-0">
                <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' className='rounded-full' />
                </div>
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-sm font-medium border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  +9
                </div>
              </div>
              <div className='flex items-center gap-2'>
                  <div className='cursor-pointer rounded-full px-4 py-0.5 flex items-center justify-center bg-purple-200 text-purple-700 '><span className='text-[13px] font-[500]'>React</span></div>
                  <div className='cursor-pointer rounded-full px-4 py-0.5 flex items-center justify-center  bg-blue-200 text-blue-700' ><span className='text-[13px] font-[500] '>MUI</span></div>
              </div>
            </div>
          </div>

          <div className='bg-white min-w-[310px] flex-col space-y-3 p-6 rounded-md shadow-xl'>
            <div className='flex items-center gap-2 '>
              <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/logos/vue-bg.png' className='w-10 h-10 rounded-full'/>
              <h4 className='font-[549] text-[19px] text-gray-800 mr-1'>Vue.js Dev Team</h4>
              <div className='hover:bg-gray-200 w-9 h-8 rounded-full flex items-center justify-center'><i className='ri-star-line text-gray-400 text-xl'/></div>
              <div className='hover:bg-gray-200 w-9 h-8 rounded-full flex items-center justify-center'><i className='ri-more-2-line text-gray-400 text-xl' /></div>
            </div>
            <div className='text-gray-500 '>
              The development of Vue and its ecosystem is guided by an international team, some of whom have chosen.
            </div>
            <div className='space-y-1'>
              <div className="flex items-center gap-0">
                <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10" aria-label="Kaith D' souza">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/5.png' className='rounded-full' alt="Kaith D' souza"/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' className='rounded-full' />
                </div>
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-sm font-medium border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  +4
                </div>
              </div>
              <div className='flex items-center gap-2'>
                  <div className='cursor-pointer rounded-full px-4 py-0.5 flex items-center justify-center bg-green-100 text-green-700 '><span className='text-[13px] font-[500]'>Vuejs</span></div>
                  <div className='cursor-pointer rounded-full px-4 py-0.5 flex items-center justify-center  bg-red-100 text-red-700' ><span className='text-[13px] font-[500] '>Developer</span></div>
              </div>
            </div>
          </div>

          <div className='bg-white min-w-[310px] max-h-[245px] flex-col space-y-3 p-6 rounded-md shadow-xl'>
            <div className='flex items-center gap-2 '>
              <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/logos/xd-bg.png' className='w-10 h-10 rounded-full'/>
              <h4 className='font-[549] text-[19px] text-gray-800'>Creative Designers</h4>
              <div className='hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center'><i className='ri-star-line text-gray-400 text-xl'/></div>
              <div className='hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center'><i className='ri-more-2-line text-gray-400 text-xl ' /></div>
            </div>
            <div className='text-gray-500 '>
              We don’t make assumptions about the rest of your technology stack, so you can develop features in React.
            </div>
            <div className='flex items-center justify-between '>
              <div className="flex items-center gap-0">
                <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' className='rounded-full' />
                </div>
              </div>
              <div className='flex items-center gap-2'>
                  <div className='cursor-pointer rounded-full px-4 py-0.5 flex items-center justify-center bg-yellow-100 text-orange-700 '><span className='text-[13px] font-[500]'>Sketch</span></div>
                  <div className='cursor-pointer rounded-full px-4 py-0.5 flex items-center justify-center  bg-red-100 text-red-700' ><span className='text-[13px] font-[500] '>XD</span></div>
              </div>
            </div>
          </div>

          <div className='bg-white min-w-[310px] flex-col max-h-[222px] space-y-3 p-6 rounded-md shadow-xl'>
            <div className='flex items-center gap-2 '>
              <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/logos/support-bg.png' className='w-10 h-10 rounded-full'/>
              <h4 className='font-[549] text-[19px] text-gray-800 mr-4'>Support Team</h4>
              <div className='hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center'><i className='ri-star-line text-gray-400 text-xl'/></div>
              <div className='hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center'><i className='ri-more-2-line text-gray-400 text-xl ' /></div>
            </div>
            <div className='text-gray-500 mb-4 mt-2'>
              Support your team. Your customer support team is fielding the good, the bad, & the ugly day in & day out.
            </div>
            <div className='flex items-center justify-between '>
              <div className="flex items-center gap-0">
                <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' className='rounded-full' />
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='cursor-pointer rounded-full px-4 py-0.5 flex items-center justify-center  bg-blue-100 text-blue-700' ><span className='text-[13px] font-[500] '>Zendesk</span></div>
              </div>
            </div>
          </div>

          <div className='bg-white min-w-[310px] flex-col space-y-3 p-6 rounded-md shadow-xl'>
            <div className='flex items-center gap-2 '>
              <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/icons/social-bg.png' className='w-10 h-10 rounded-full'/>
              <h4 className='font-[549] text-[19px] text-gray-800 mr-0.5'>Digital Marketing</h4>
              <div className='hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center'><i className='ri-star-line text-gray-400 text-xl'/></div>
              <div className='hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center'><i className='ri-more-2-line text-gray-400 text-xl ' /></div>
            </div>
            <div className='text-gray-500 my-3'>
              Digital marketing refers to advertising delivered through digital channels such as search engines, websites…
            </div>
            <div className='flex items-center justify-between '>
              <div className="flex items-center gap-0">
                <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' className='rounded-full' />
                </div>
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-sm font-medium border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  +7
                </div>
              </div>
              <div className='flex items-center gap-2'>
                  <div className='cursor-pointer rounded-full px-4 py-0.5 flex items-center justify-center bg-purple-200 text-purple-700 '><span className='text-[13px] font-[500]'>Twitter</span></div>
                  <div className='cursor-pointer rounded-full px-4 py-0.5 flex items-center justify-center  bg-green-200 text-green-700' ><span className='text-[13px] font-[500] '>Email</span></div>
              </div>
            </div>
          </div>

          <div className='bg-white min-w-[310px] flex-col max-h-[238px] space-y-3 p-6 rounded-md shadow-xl'>
            <div className='flex items-center gap-2 mb-3'>
              <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/logos/event-bg.png' className='w-10 h-10 rounded-full'/>
              <h4 className='font-[549] text-[19px] text-gray-800 mr-[100px]'>Event</h4>
              <div className='hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center'><i className='ri-star-line text-gray-400 text-xl'/></div>
              <div className='hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center'><i className='ri-more-2-line text-gray-400 text-xl ' /></div>
            </div>
            <div className='text-gray-500 mb-3'>
              Event is defined as a particular contest which is part of a program of contests. An example of an event is the…
            </div>
            <div className='flex items-center justify-between '>
              <div className="flex items-center gap-0">
                <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' className='rounded-full' />
                </div>
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-sm font-medium border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  +2
                </div>
              </div>
              <div className='flex items-center gap-2'>
                  <div className='cursor-pointer rounded-full px-4 py-0.5 flex items-center justify-center bg-green-100 text-green-700 '><span className='text-[13px] font-[500]'>Hubilo</span></div>
              </div>
            </div>
          </div>

          <div className='bg-white min-w-[310px] max-h-[255px] flex-col space-y-3 p-6 rounded-md shadow-xl'>
            <div className='flex items-center gap-2 mb-3'>
              <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/logos/figma-bg.png' className='w-10 h-10 rounded-full'/>
              <h4 className='font-[549] text-[19px] text-gray-800 mr-0'>Figma Resources</h4>
              <div className='hover:bg-gray-200 w-9 h-8 rounded-full flex items-center justify-center'><i className='ri-star-line text-gray-400 text-xl'/></div>
              <div className='hover:bg-gray-200 w-9 h-8 rounded-full flex items-center justify-center'><i className='ri-more-2-line text-gray-400 text-xl ' /></div>
            </div>
            <div className='text-gray-500 mb-4'>
              Explore, install, use, and remix thousands of plugins and files published to the Figma Community by designers.  
            </div>
            <div className='flex items-center justify-between '>
              <div className="flex items-center gap-0">
                <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' className='rounded-full' />
                </div>
              </div>
              <div className='flex items-center gap-2'>
                  <div className='cursor-pointer rounded-full px-4 py-0.5 flex items-center justify-center bg-green-100 text-green-700 '><span className='text-[13px] font-[500]'>UI/UX</span></div>
                  <div className='cursor-pointer rounded-full px-4 py-0.5 flex items-center justify-center  bg-orange-100 text-orange-700' ><span className='text-[13px] font-[500] '>Figma</span></div>
              </div>
            </div>
          </div>

          <div className='bg-white min-w-[310px] max-h-[230px] flex-col space-y-3 p-6 rounded-md shadow-xl'>
            <div className='flex items-center gap-2 '>
              <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/logos/html-bg.png' className='w-10 h-10 rounded-full'/>
              <h4 className='font-[549] text-[19px] text-gray-800 mr-3'>Only Beginners</h4>
              <div className='hover:bg-gray-200 w-9 h-8 rounded-full flex items-center justify-center'><i className='ri-star-line text-gray-400 text-xl'/></div>
              <div className='hover:bg-gray-200 w-9 h-8 rounded-full flex items-center justify-center'><i className='ri-more-2-line text-gray-400 text-xl ' /></div>
            </div>
            <div className='text-gray-500 '>
              Learn the basics of how websites work, front-end vs back-end, & using a code editor. Learn basics…
            </div>
            <div className='flex items-center justify-between '>
              <div className="flex items-center gap-0">
                <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' className='rounded-full' />
                </div>
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-sm font-medium border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  +8
                </div>
              </div>
              <div className='flex items-center gap-2'>
                  <div className='cursor-pointer rounded-full px-4 py-0.5 flex items-center justify-center  bg-blue-200 text-blue-700' ><span className='text-[13px] font-[500] '>CSS</span></div>
                  <div className='cursor-pointer rounded-full px-4 py-0.5 flex items-center justify-center bg-purple-200 text-purple-700 '><span className='text-[13px] font-[500]'>HTML</span></div>
              </div>
            </div>
          </div>

          <div className='bg-white min-w-[310px] max-h-[255px] flex-col space-y-3 p-6 rounded-md shadow-xl'>
            <div className='flex items-center gap-2 '>
              <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/logos/python-bg.png' className='w-10 h-10 rounded-full'/>
              <h4 className='font-[549] text-[19px] text-gray-800'>Python Developers</h4>
              <div className='hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center'><i className='ri-star-line text-gray-400 text-xl'/></div>
              <div className='hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center'><i className='ri-more-2-line text-gray-400 text-xl ' /></div>
            </div>
            <div className='text-gray-500 '>
              Harness Python's versatility for web development, data analysis & system automation for cutting-edge solutions.
            </div>
            <div className='flex items-center justify-between '>
              <div className="flex items-center gap-0">
                <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' className='rounded-full'/>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl border-2 border-white -ml-3 hover:scale-110 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 cursor-pointer z-10">
                  <img src='https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' className='rounded-full' />
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='cursor-pointer rounded-full px-4 py-0.5 flex items-center justify-center  bg-blue-100 text-blue-700' ><span className='text-[13px] font-[500] '>Python</span></div>
              </div>
            </div>
          </div>
        </div>
      }

      <div className='flex justify-end sticky bottom-4'>
         <button className='buy-btn w-[110px] h-10 text-white text-[17px] font-[500] rounded-lg hover:shadow-xs transition-all flex items-center justify-center'>Buy</button>
      </div>
    </div> 
    
  );
};

export default UserProfile;
