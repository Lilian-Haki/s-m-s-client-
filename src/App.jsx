import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Sidebar from './components/sidebar';
import Students from './components/students/students';
import Teachers from './components/teachers/teachers';
import ExamsList from './components/exams/examList';
import ExamForm from './components/exams/examForm';
import AttendanceList from './components/attendance/attendanceList';
import AttendanceForm from './components/attendance/attendanceForm';
import CoursesTable from './components/courses/coursesTable';
import CourseForm from './components/courses/coursesForm';
import CourseProfile from './components/courses/courseProfile';
import Register from './components/register';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/exams" element={<ExamsList />} />
      <Route path="/exams/add" element={<ExamForm />} />
      <Route path="/exams/edit/:id" element={<ExamForm />} />
      <Route path="/attendanceList" element={<AttendanceList />} />
      <Route path="/attendanceForm" element={<AttendanceForm />} />
      <Route path="/attendance/edit/:id" element={<AttendanceForm />} />
      <Route path="/courses" element={<CoursesTable />} />
      <Route path="/courses/add" element={<CourseForm />} />
      <Route path="/courses/edit/:id" element={<CourseForm />} />
      <Route path="/courses/:id" element={<CourseProfile />} />
      </Routes>
  </Router>    
  );
}

export default App;
