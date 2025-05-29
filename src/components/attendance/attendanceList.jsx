import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

const AttendanceList = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios.get('/attendance').then(res => setAttendance(res.data));
  }, []);

  const deleteAttendance = async (id) => {
    if (!window.confirm('Delete this record?')) return;
    await axios.delete(`/attendance/${id}`);
    setAttendance(attendance.filter(a => a._id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Attendance Records</h1>
      <Link to="/attendance/add" className="bg-blue-500 text-white p-2 rounded">Mark Attendance</Link>
      <table className="w-full mt-4 border">
        <thead>
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Student</th>
            <th className="border p-2">Teacher</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map(record => (
            <tr key={record._id}>
              <td className="border p-2">{record.date}</td>
              <td className="border p-2">{record.studentName}</td>
              <td className="border p-2">{record.teacherName}</td>
              <td className="border p-2">{record.status}</td>
              <td className="border p-2">
                <Link to={`/attendance/edit/${record._id}`} className="text-green-500 mr-2">Edit</Link>
                <button onClick={() => deleteAttendance(record._id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceList;
