import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from './../../api';
//import Sidebar from '../sidebar';

const ExamForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    date: '',
  });

  useEffect(() => {
    if (id) {
      api.get(`/exams/${id}`).then(res => setFormData(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await api.put(`/exams/${id}`, formData);
    } else {
      await api.post('/exams', formData);
    }
    navigate('/exams');
  };

  return (
    // <div className="flex">
    //   <Sidebar />
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{id ? 'Edit' : 'Add'} Exam</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Exam Title" className="border p-2" required />
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="border p-2" required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="border p-2" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">{id ? 'Update' : 'Add'} Exam</button>
      </form>
    </div>
    //</div>
  );
};

export default ExamForm;
