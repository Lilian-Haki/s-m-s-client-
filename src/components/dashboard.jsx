import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token and user data from localStorage or sessionStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Redirect to login page
    navigate('/');
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <nav>
          <ul className="space-y-2">
          <li><a href="/students" className="hover:underline">Students</a></li>
          <li><a href="/teachers" className="hover:underline">Teachers</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/attendanceList" className="hover:underline">Attendance</a></li>
            <li><a href="/exams" className="hover:underline">Exams</a></li>
            <li><a className="py-2 hover:bg-gray-700 cursor-pointer" onClick={handleLogout}>Logout</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Welcome, Admin!</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Total Students</h2>
            <p className="text-3xl font-bold">320</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Total Teachers</h2>
            <p className="text-3xl font-bold">45</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Total Courses</h2>
            <p className="text-3xl font-bold">15</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
