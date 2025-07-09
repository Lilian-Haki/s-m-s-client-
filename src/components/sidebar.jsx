import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardOutlined,UserOutlined, ContainerOutlined, CarryOutOutlined, BookOutlined,DollarOutlined,LogoutOutlined } from '@ant-design/icons';

const Sidebar = () => {
  
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
      <aside className="w-64 bg-primary text-white p-4">
        <a href='/dashboard' className="text-2xl font-bold pb-[100px]"><DashboardOutlined />Dashboard</a>
        <nav className='mt-8 align-items-center text-5xl '>
          <ul className="space-y-4 font-[24px]">
            <li className='h-[40px] w-[230px] rounded-[10px] hover:bg-slate-500 '>
              <a href="/newstudents" className="font-[44px] font-roboto "><UserOutlined style={{padding:'10px'}} />Students</a>
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

    
    </div>
  );
};

export default Sidebar;
