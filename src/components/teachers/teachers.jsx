import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [formData, setFormData] = useState({ name: '', subject: '', email: '', phone: '' });
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState('');

  
  
  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    const res = await axios.get('http://localhost:5000/api/teachers');
    setTeachers(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`/teachers/${editingId}`, formData);
      setEditingId(null);
    } else {
      await axios.post('/teachers', formData);
    }
    setFormData({ name: '', subject: '', email: '', phone: '' });
    fetchTeachers();
  };

  const handleEdit = (teacher) => {
    setFormData(teacher);
    setEditingId(teacher._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/teachers/${id}`);
    fetchTeachers();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Teachers</h1>
      <input
  type="text"
  placeholder="Search teachers..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border p-2 mb-4 w-full"
/>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 m-1"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="border p-2 m-1"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 m-1"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 m-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingId ? 'Update' : 'Add'}
        </button>
      </form>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher._id}>
              <td className="border p-2">{teacher.name}</td>
              <td className="border p-2">{teacher.subject}</td>
              <td className="border p-2">{teacher.email}</td>
              <td className="border p-2">{teacher.phone}</td>
              <td className="border p-2">
                <button onClick={() => handleEdit(teacher)} className="bg-yellow-400 px-2 py-1 mr-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(teacher._id)} className="bg-red-500 text-white px-2 py-1">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teachers;
