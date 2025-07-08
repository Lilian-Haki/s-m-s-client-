import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from './../../api';
//import Sidebar from '../sidebar';

const ExamsList = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    api.get('/exams').then(res => setExams(res.data));
  }, []);

  const deleteExam = async (id) => {
    if (window.confirm('Delete this exam?')) {
      await api.delete(`/exams/${id}`);
      setExams(exams.filter(e => e._id !== id));
    }
  };

  return (
    // <div className="flex">
    //   <Sidebar />
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Exams</h1>
      <Link to="/exams/add" className="bg-blue-500 text-white p-2 rounded">Add Exam</Link>
      <table className="w-full mt-4 border">
        <thead>
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {exams.map(exam => (
            <tr key={exam._id}>
              <td className="border p-2">{exam.title}</td>
              <td className="border p-2">{exam.subject}</td>
              <td className="border p-2">{exam.date}</td>
              <td className="border p-2">
                <Link to={`/exams/edit/${exam._id}`} className="text-green-500 mr-2">Edit</Link>
                <button onClick={() => deleteExam(exam._id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    //</div>
  );
};

export default ExamsList;
