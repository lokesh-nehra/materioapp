"use client";
import React, {useState} from 'react'
import { Search, Upload, Trash2, Eye, MoreVertical, Settings, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

function User() {

    const [selectedUsers, setSelectedUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const users = [
        { id: 1, name: 'Galen Slixby', username: 'gslixby0', email: 'gslixby0@abc.net.au', role: 'Editor', plan: 'Enterprise', status: 'Inactive', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' },
        { id: 2, name: 'Halsey Redmore', username: 'hredmore1', email: 'hredmore1@imgur.com', role: 'Author', plan: 'Team', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' },
        { id: 3, name: 'Marjory Sicely', username: 'msicely2', email: 'msicely2@who.int', role: 'Maintainer', plan: 'Enterprise', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' },
        { id: 4, name: 'Cyrill Risby', username: 'crisby3', email: 'crisby3@wordpress.com', role: 'Maintainer', plan: 'Team', status: 'Inactive', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/4.png' },
        { id: 5, name: 'Maggy Hurran', username: 'mhurran4', email: 'mhurran4@yahoo.co.jp', role: 'Subscriber', plan: 'Enterprise', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/5.png  ' },
        { id: 6, name: 'Silvain Halstead', username: 'shalstead5', email: 'shalstead5@shinystat.com', role: 'Author', plan: 'Company', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/6.png' },
        { id: 7, name: 'Breena Gallemore', username: 'bgallemore6', email: 'bgallemore6@boston.com', role: 'Subscriber', plan: 'Company', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/7.png' },
        { id: 8, name: 'Kathryne Liger', username: 'kliger7', email: 'kliger7@vinaora.com', role: 'Author', plan: 'Enterprise', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/8.png' },
        { id: 9, name: 'Franz Scotfurth', username: 'fscotfurth8', email: 'fscotfurth8@dailymotion.com', role: 'Subscriber', plan: 'Team', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' },
        { id: 10, name: 'Jillene Bellany', username: 'jbellany9', email: 'jbellany9@kickstarter.com', role: 'Maintainer', plan: 'Company', status: 'Inactive', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' },
        { id: 11, name: 'Kory McNeil', username: 'kmcneil10', email: 'kmcneil10@pinterest.com', role: 'Editor', plan: 'Team', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' },
        { id: 12, name: 'Lina Trent', username: 'ltrent11', email: 'ltrent11@weebly.com', role: 'Subscriber', plan: 'Enterprise', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/4.png' },
        { id: 13, name: 'Marty Quinn', username: 'mquinn12', email: 'mquinn12@amazon.com', role: 'Maintainer', plan: 'Company', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/5.png' },
        { id: 14, name: 'Nancy Faber', username: 'nfaber13', email: 'nfaber13@etsy.com', role: 'Editor', plan: 'Team', status: 'Inactive', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/6.png' },
        { id: 15, name: 'Oscar Danton', username: 'odanton14', email: 'odanton14@linkedin.com', role: 'Author', plan: 'Enterprise', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/7.png' },
        { id: 16, name: 'Penny Gray', username: 'pgray15', email: 'pgray15@disney.com', role: 'Maintainer', plan: 'Team', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/8.png' },
        { id: 17, name: 'Quentin Hughes', username: 'qhughes16', email: 'qhughes16@zoom.us', role: 'Subscriber', plan: 'Company', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' },
        { id: 18, name: 'Rita Vale', username: 'rvale17', email: 'rvale17@medium.com', role: 'Author', plan: 'Enterprise', status: 'Inactive', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' },
        { id: 19, name: 'Sam Price', username: 'sprice18', email: 'sprice18@live.com', role: 'Maintainer', plan: 'Team', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' },
        { id: 20, name: 'Tina Collins', username: 'tcollins19', email: 'tcollins19@outlook.com', role: 'Subscriber', plan: 'Company', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/4.png' },
        { id: 21, name: 'Uma Raymond', username: 'uraymond20', email: 'uraymond20@apple.com', role: 'Editor', plan: 'Enterprise', status: 'Inactive', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/5.png' },
        { id: 22, name: 'Victor Scott', username: 'vscott21', email: 'vscott21@hp.com', role: 'Maintainer', plan: 'Company', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/6.png' },
        { id: 23, name: 'Wendy Brooks', username: 'wbrooks22', email: 'wbrooks22@oracle.com', role: 'Author', plan: 'Team', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/7.png' },
        { id: 24, name: 'Xander Lowe', username: 'xlowe23', email: 'xlowe23@intel.com', role: 'Editor', plan: 'Enterprise', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/8.png' },
        { id: 25, name: 'Yasmin Clark', username: 'yclark24', email: 'yclark24@spotify.com', role: 'Subscriber', plan: 'Team', status: 'Inactive', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' },
        { id: 26, name: 'Zane Foster', username: 'zfoster25', email: 'zfoster25@github.com', role: 'Maintainer', plan: 'Company', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' },
        { id: 27, name: 'Alicia Kane', username: 'akane26', email: 'akane26@icloud.com', role: 'Author', plan: 'Enterprise', status: 'Inactive', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' },
        { id: 28, name: 'Ben Lang', username: 'blang27', email: 'blang27@msn.com', role: 'Subscriber', plan: 'Team', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/4.png' },
        { id: 29, name: 'Cara Moore', username: 'cmoore28', email: 'cmoore28@google.com', role: 'Editor', plan: 'Company', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/5.png' },
        { id: 30, name: 'Dan Owen', username: 'dowen29', email: 'dowen29@yahoo.com', role: 'Maintainer', plan: 'Enterprise', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/6.png' },
        { id: 31, name: 'Ella Reed', username: 'ereed30', email: 'ereed30@aol.com', role: 'Subscriber', plan: 'Company', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/7.png' },
        { id: 32, name: 'Finn Jacobs', username: 'fjacobs31', email: 'fjacobs31@tesla.com', role: 'Author', plan: 'Team', status: 'Inactive', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/8.png' },
        { id: 33, name: 'Gina Lopez', username: 'glopez32', email: 'glopez32@adobe.com', role: 'Maintainer', plan: 'Enterprise', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' },
        { id: 34, name: 'Henry Cruz', username: 'hcruz33', email: 'hcruz33@att.com', role: 'Editor', plan: 'Team', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' },
        { id: 35, name: 'Ivy Nash', username: 'inash34', email: 'inash34@target.com', role: 'Subscriber', plan: 'Company', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' },
        { id: 36, name: 'Jake Peterson', username: 'jpeterson35', email: 'jpeterson35@zoom.com', role: 'Author', plan: 'Enterprise', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/4.png' },
        { id: 37, name: 'Kara Evans', username: 'kevans36', email: 'kevans36@bp.com', role: 'Maintainer', plan: 'Team', status: 'Inactive', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/5.png' },
        { id: 38, name: 'Leo Franklin', username: 'lfranklin37', email: 'lfranklin37@ford.com', role: 'Editor', plan: 'Company', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/6.png' },
        { id: 39, name: 'Mona Griffin', username: 'mgriffin38', email: 'mgriffin38@walmart.com', role: 'Subscriber', plan: 'Enterprise', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/7.png' },
        { id: 40, name: 'Nate Olson', username: 'nolson39', email: 'nolson39@twitter.com', role: 'Author', plan: 'Team', status: 'Inactive', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/8.png' },
        { id: 41, name: 'Olivia Perez', username: 'operez40', email: 'operez40@slack.com', role: 'Maintainer', plan: 'Company', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' },
        { id: 42, name: 'Paul Rivera', username: 'privera41', email: 'privera41@bbc.com', role: 'Editor', plan: 'Enterprise', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' },
        { id: 43, name: 'Queen Smith', username: 'qsmith42', email: 'qsmith42@cnn.com', role: 'Subscriber', plan: 'Team', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/8.png' },
        { id: 44, name: 'Ralph Turner', username: 'rturner43', email: 'rturner43@ibm.com', role: 'Author', plan: 'Company', status: 'Inactive', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/7.png' },
        { id: 45, name: 'Sara Underwood', username: 'sunderwood44', email: 'sunderwood44@redhat.com', role: 'Maintainer', plan: 'Enterprise', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/6.png' },
        { id: 46, name: 'Tom Vaughn', username: 'tvaughn45', email: 'tvaughn45@paypal.com', role: 'Editor', plan: 'Team', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/5.png' },
        { id: 47, name: 'Una Wallace', username: 'uwallace46', email: 'uwallace46@meta.com', role: 'Subscriber', plan: 'Company', status: 'Inactive', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/4.png' },
        { id: 48, name: 'Victor Xu', username: 'vxu47', email: 'vxu47@notion.so', role: 'Author', plan: 'Enterprise', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png' },
        { id: 49, name: 'Will Young', username: 'wyoung48', email: 'wyoung48@figma.com', role: 'Maintainer', plan: 'Team', status: 'Pending', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png' },
        { id: 50, name: 'Zoe Zimmerman', username: 'zzimmerman49', email: 'zzimmerman49@dropbox.com', role: 'Subscriber', plan: 'Enterprise', status: 'Active', avatar: 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png' },
    ];


    const totalPages = Math.ceil(users.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentUsers = users.slice(startIndex, endIndex);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedUsers(currentUsers.map(u => u.id));
        } else {
            setSelectedUsers([]);
        }
    };

    const handleSelectUser = (userId) => {
        setSelectedUsers(prev => 
            prev.includes(userId) 
            ? prev.filter(id => id !== userId)
            : [...prev, userId]
        );
    };

    const isAllSelected = currentUsers.length > 0 && currentUsers.every((u) => selectedUsers.includes(u.id));

    const getRoleIcon = (role) => {
        switch(role) {
            case ('Editor'): 
                return <i className='ri-edit-box-line text-[21px] text-[#16B1FF]'/>;
            case ('Author'):
                 return <i className='ri-computer-line text-[21px] text-[#FFB400]'/>;
            case ('Maintainer'): 
                return <i className='ri-pie-chart-2-line text-[21px] text-[#56CA00]'/>;
            case ('Subscriber'): 
                return <i className='ri-user-3-line text-[21px] text-[#8C57FF]'/>;
            default: return '';
        }
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'Active': return 'bg-green-100 bg-[#56CA00] text-[#56CA00] text-[13px] ';
            case 'Inactive': return 'bg-gray-100 bg-[#8A8D93] text-[#9B9EA3] text-[13px] ';
            case 'Pending': return 'bg-yellow-100 bg-[#FFB400] text-[#ffb400]  text-[13px] ';
            default: return '';
        }
    };

    return (
        // <div className='max-w-[960px] min-h-auto ml-69 mt-[90px] bg-gray-400 grid grid-cols-4'>
//     <div className='flex  bg-amber-200'>
//         <div>hello</div>
//         <div>hello</div>
//         <div>hello</div>
//         <div>hello</div>
//     </div>
// </div>

    <div className="flex flex-1 p-6 lg:ml-64 lg:mt-24 overflow-auto">
        <div className="w-full space-y-6 ">
                {/* top stats section  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* card 1  */}
                <div className="bg-white p-5 rounded-md shadow-lg max-h-[120px] flex items-start ">
                    <div className=' mr-4'>
                        <h3 className="text-gray-650 text-md">Session</h3>
                        <span className="text-[25px] font-medium text-black-600">21,459&nbsp;</span>
                        <span className="text-sm font-normal text-[#56CA00] ">(+29%)</span>
                        <p className="text-gray-400 text-sm mt-1">Total User</p>
                    </div>
                    <div className='bg-purple-100 w-14 flex items-center justify-center h-11 rounded-md '><i className='ri-group-line text-[#8C57FF] text-[26px]' /></div>
                </div>

                {/* card 2 */}
                <div className="bg-white p-5 rounded-md shadow-lg max-h-[120px] flex items-start">
                    <div className='mr-4 space-y-0.5 '>
                        <h3 className="text-gray-650 text-md">Paid Users</h3>
                        <span className="text-[25px] font-medium text-black-600">4,567 </span>
                        <span className='text-sm font-normal text-[#56CA00] tracking-wide pb-0.5'>(+18%)</span>
                        <p className="text-gray-400 text-sm">Last week analytics </p>
                    </div>
                    <div className='bg-red-100 w-11 flex items-center justify-center h-11 rounded-md '><i className='ri-user-add-line text-[#FF4C51] text-[26px]' /></div>
                </div>

                {/* card 3 */}
                <div className="bg-white p-5.5 rounded-md shadow-lg max-h-[120px] flex items-start">
                    <div className='mr-0 w-[140px]'>
                        <h3 className="text-gray-650 text-md">Active Users</h3>
                        <span className="text-[25px] font-medium text-black-600">19,860 </span>
                        <span className="text-sm font-medium text-[#FF4C51] tracking-wide  ">(-14%)</span>
                        <p className="text-gray-400 text-sm">Last week analytics</p>
                    </div>
                    <div className='bg-green-100 w-11 flex items-center justify-center h-11 rounded-md '><i className='ri-user-follow-line text-[#56CA00] text-[26px]' /></div>
                </div>

                {/* card 4 */}
                <div className="bg-white p-6 rounded-md shadow-lg flex max-h-[120px] items-start">
                    <div className='mr-0 w-[140px]'>
                        <h3 className="text-gray-650 text-md">Pending Users</h3>
                        <span className="text-[25px] font-medium text-black-600">237 </span>
                        <span className="text-sm font-medium text-[#56CA00] tracking-wide ">(+42%) </span>
                        <p className="text-gray-400 text-sm">Last week analytics</p>
                    </div>
                    <div className='bg-orange-100 w-11 flex items-center justify-center h-11 rounded-md '><i className='ri-user-search-line text-[#FFB400] text-[26px]' /></div>
                </div>
            </div>

            {/* filters section 
            <div class="bg-white p-6 rounded-md shadow-md">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-gray-500">
                    <div><span>Filters</span></div>
                    <!-- role filter -->
                    <div>
                        <select id="role" class="mt-2 block w-full border-gray-300 rounded-md p-2">
                            <option>Select Role</option>
                            <option>User</option>
                            <option>Admin</option>
                        </select>
                    </div>

                    <!-- plan filter -->
                    <div>
                        <select id="plan" class="mt-2 block w-full border-gray-300 rounded-md p-2">
                            <option>Select Plan</option>
                            <option>Free</option>
                            <option>Enterprise</option>
                        </select>
                    </div>

                    <!-- status filter -->
                    <div>
                        <select id="status" class="mt-2 block w-full border-gray-300 rounded-md p-2">
                            <option>Select Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>
            </div> */}





            <div className="min-h-screen bg-gray-50 ">
                <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
                    {/* Filters */}
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-[22px] medium text-gray-800 mb-6">Filters</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="relative">
                                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg appearance-none bg-white text-gray-600">
                                    <option>Select Role</option>
                                    <option>Editor</option>
                                    <option>Author</option>
                                    <option>Maintainer</option>
                                    <option>Subscriber</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>
                            <div className="relative">
                                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg appearance-none bg-white text-gray-600">
                                    <option>Select Plan</option>
                                    <option>Enterprise</option>
                                    <option>Team</option>
                                    <option>Company</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>
                            <div className="relative">
                                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg appearance-none bg-white text-gray-600">
                                    <option>Select Status</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                    <option>Pending</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Actions Bar */}
                    <div className="p-6 flex justify-between items-center">
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                        <Upload className="w-4 h-4" />
                        Export
                        </button>
                        <div className="flex gap-3">
                        <div className="relative">
                            <input 
                            type="text" 
                            placeholder="Search User" 
                            className="pl-4 pr-4 py-2 border border-gray-200 rounded-lg w-64"
                            />
                        </div>
                        <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg hover:from-purple-700 hover:to-purple-600">
                            Add New User
                        </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto ">
                        <table className="w-full">
                            <thead>
                                <tr className=" bg-gray-50 ">
                                    <th className="px-6 py-4 text-left">
                                        <input 
                                        type="checkbox" 
                                        checked={isAllSelected}
                                        onChange={handleSelectAll}
                                        className="w-4 h-4 rounded border-gray-300"
                                        style={{border: '2px solid #d1d5dc'}}
                                        />
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-[600] text-gray-500 uppercase">User</th>
                                    <th className="px-6 py-4 text-left text-sm font-[600] text-gray-500 uppercase">Email</th>
                                    <th className="px-6 py-4 text-left text-sm font-[600] text-gray-500 uppercase">Role</th>
                                    <th className="px-6 py-4 text-left text-sm font-[600] text-gray-500 uppercase">Plan</th>
                                    <th className="px-6 py-4 text-left text-sm font-[600] text-gray-500 uppercase">Status</th>
                                    <th className="px-6 py-4 text-left text-sm font-[600] text-gray-500 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentUsers.map((user) => (
                                <tr key={user.id} className="border-b border-gray-300 hover:bg-gray-50 ">    
                                    <td className="px-6 py-2">  
                                    <input 
                                        type="checkbox" 
                                        checked={selectedUsers.includes(user.id)}
                                        onChange={() => handleSelectUser(user.id)}
                                        className="w-4 h-4 rounded border-gray-300"
                                    />
                                    </td>
                                    <td className="px-2 py-2  ">
                                        <div className="flex items-center gap-3">
                                            <div className='w-9 h-9 overflow-hidden rounded-full shrink-0'>
                                                <img src={user.avatar} className='w-full h-full object-cover '/>
                                            </div>
                                            <div className=''>
                                                <div className="font-medium text-[15px] text-gray-900 whitespace-nowrap">{user.name}</div>
                                                <div className="text-[13px] text-gray-500">{user.username}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-2 text-gray-500 text-[15px]">{user.email}</td>
                                    <td className="px-6 py-2">
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <span>{getRoleIcon(user.role)}</span>
                                            <span>{user.role}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-2 text-gray-600">{user.plan}</td>
                                    <td className="px-6 py-2">
                                        <span className={`px-3 py-1 rounded-full text-sm font-[100%] ${getStatusColor(user.status)}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-2">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 hover:bg-gray-300 rounded-full">
                                            <Trash2 className="w-4 h-4 text-gray-500" />
                                            </button>
                                            <button className="p-2 hover:bg-gray-300 rounded-full">
                                            <Eye className="w-4 h-4 text-gray-500" />
                                            </button>
                                            <button className="p-2 hover:bg-gray-300 rounded-full">
                                            <MoreVertical className="w-4 h-4 text-gray-500" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-2 flex items-center justify-end border-t-gray-900 gap-4">
                        <div className="flex items-center ">
                            <span className="text-[15px] text-gray-600">Rows per page:</span>
                            <select 
                                value={rowsPerPage}
                                onChange={(e) => setRowsPerPage(Number(e.target.value))}
                                className="px-1 py-1  border-gray-200 rounded cursor-pointer"
                            >
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-600">
                                {startIndex + 1}-{Math.min(endIndex, users.length)} of {users.length}
                            </span>
                            <div className="flex gap-2">
                                <button 
                                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="p-2 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button 
                                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="p-2 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Buttons */}
                {/* <button className="fixed bottom-8 right-8 px-6 py-3 bg-gradient-to-r from-red-500 to-red-400 text-white rounded-lg shadow-lg hover:from-red-600 hover:to-red-500">
                Buy Now
                </button> */}
                {/* <button className="fixed bottom-8 right-40 p-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700">
                <Settings className="w-6 h-6" />
                </button> */}
            </div>
        </div>
    </div>
    );
};

export default User;