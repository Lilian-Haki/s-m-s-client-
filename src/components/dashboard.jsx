import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardOutlined,UserOutlined, ContainerOutlined, CarryOutOutlined, BookOutlined,DollarOutlined,SettingOutlined,LogoutOutlined } from '@ant-design/icons';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';

const Dashboard = () => {
const navigate = useNavigate();
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];
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
      <aside className="w-64 bg-primary text-white p-4">
        <h2 className="text-2xl font-bold mb-6"><DashboardOutlined />Dashboard</h2>
        <nav className='align-items-center text-5xl '>
          <ul className="space-y-4 font-[24px]">
            <li className='h-[40px] w-[230px] rounded-[10px] hover:bg-slate-500 '>
              <a href="/students" className="font-[44px] font-roboto "><UserOutlined style={{padding:'10px'}} />Students</a>
            </li>
            <li className='h-[40px] w-[230px] rounded-[10px] hover:bg-slate-500 '>
              <a href="/teachers" className=""><UserOutlined style={{padding:'10px'}}/>Teachers</a></li>
            <li className='h-[40px] w-[230px] rounded-[10px] hover:bg-slate-500 '>
              <a href="/courses" className=""><ContainerOutlined style={{padding:'10px'}}/>Courses</a></li>
            <li className='h-[40px] w-[230px] rounded-[10px] hover:bg-slate-500 '>
              <a href="/attendanceList" className=""><CarryOutOutlined style={{padding:'10px'}}/>Attendance</a></li>
            <li className='h-[40px] w-[230px] rounded-[10px] hover:bg-slate-500 '>
              <a href="/exams" className=""><BookOutlined style={{padding:'10px'}}/>Exams</a></li>
                        <li className='h-[40px] w-[230px] rounded-[10px] hover:bg-slate-500 '>
              <a href="/finances" className=""><DollarOutlined style={{padding:'10px'}}/>Finances</a></li>
            <li className='h-[40px] w-[230px] rounded-[10px] hover:bg-slate-500 '>
              <a className="py-2" onClick={handleLogout}><LogoutOutlined style={{padding:'10px'}}/>Logout</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="bg-gray-100 w-full">
      <header className='justify-items-end bg-gray-600 p-4'>
          {/* User Profile Section */}
          <div className="flex space-x-4">
            <span className="text-gray-800 hover:text-red-700"><UserOutlined style={{fontSize: '24px'}}/></span>
            <span className="text-gray-800 hover:text-red-700"><SettingOutlined style={{fontSize: '24px'}}/></span>
            <button onClick={handleLogout} className="text-gray-800 hover:text-red-700">
            <LogoutOutlined style={{fontSize: '24px'}} />
            </button>
          </div>
      </header>

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
      
      <div className='flex mt-10'>
      <div className='w-[50%]'>

      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={300}
    />
    </div>
    <div className='w-[50%]'>

     <BarChart
      height={300}
      series={[
        { data: pData, label: 'pv', stack: 'stack1' },
        { data: amtData, label: 'amt' },
        { data: uData, label: 'uv', stack: 'stack1' },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 50 }]}
    />
    </div>
    </div>
    </div>
    </div>
  );
};

export default Dashboard;
