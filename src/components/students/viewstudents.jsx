import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../sidebar";

const ViewStudents = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/api/students");
    setStudents(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`http://localhost:5000/api/students/${editId}`, {
        name,
        grade,
      });
    } else {
      await axios.post("http://localhost:5000/api/students", { name, grade });
    }
    setName("");
    setGrade("");
    setEditId(null);
    fetchStudents();
  };

  const handleEdit = (student) => {
    setName(student.name);
    setGrade(student.grade);
    setEditId(student.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/students/${id}`);
    fetchStudents();
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-500 mb-4">
          View Students
        </h1>

        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Grade</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="text-center border-t">
                <td className="py-2 px-4">{s.id}</td>
                <td className="py-2 px-4">{s.name}</td>
                <td className="py-2 px-4">{s.grade}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleEdit(s)}
                    className="text-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewStudents;
