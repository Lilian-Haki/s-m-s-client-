import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from './../../api';

const CourseForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', description: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      api.get(`/courses/${id}`).then(res => setFormData(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await api.put(`/courses/${id}`, formData);
    } else {
      await api.post('/courses', formData);
    }
    navigate('/courses');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{id ? 'Edit' : 'Add'} Course</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="border p-2" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default CourseForm;
