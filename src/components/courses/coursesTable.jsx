import React, { useEffect, useState } from 'react';
import api from './../../api';
import { Link } from 'react-router-dom';
//import Sidebar from '../sidebar';

const CoursesTable = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get('/courses').then(res => setCourses(res.data));
  }, []);

  const deleteCourse = async (id) => {
    if (!window.confirm('Delete this course?')) return;
    await api.delete(`/courses/${id}`);
    setCourses(courses.filter(c => c._id !== id));
  };

  return (
    // <div className="flex">
    //   <Sidebar />
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <Link to="/courses/add" className="bg-blue-500 text-white p-2 rounded">Add Course</Link>
      <table className="w-full mt-4 border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course._id}>
              <td className="border p-2">{course.name}</td>
              <td className="border p-2">{course.description}</td>
              <td className="border p-2">
                <Link to={`/courses/${course._id}`} className="text-blue-500 mr-2">View</Link>
                <Link to={`/courses/edit/${course._id}`} className="text-green-500 mr-2">Edit</Link>
                <button onClick={() => deleteCourse(course._id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    //</div>
  );
};

export default CoursesTable;
