import React from 'react';
// import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   // Clear token and user data from localStorage or sessionStorage
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('user');

  //   // Redirect to login page
  //   navigate('/');
  // };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <img src="" alt="" />
        <nav className="mt-[100px]">
          <div className="flex items-center mb-6">
            <img src="/path/to/logo.png" alt="Logo" className="w-12 h-12 mr-2" />
            <span className="text-lg font-semibold">School Management</span>
          </div>
          <ul className="p-10">
            <li><a href="/students" className="hover:underline">Students</a></li>
            <li><a href="/teachers" className="hover:underline">Teachers</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/attendanceList" className="hover:underline">Attendance</a></li>
            <li><a href="/exams" className="hover:underline">Exams</a></li>
            {/* <li><a className="py-2 hover:bg-gray-700 cursor-pointer" onClick={handleLogout}>Logout</a></li> */}
          </ul>
        </nav>
      </aside>

    
    </div>
  );
};

export default Sidebar;
