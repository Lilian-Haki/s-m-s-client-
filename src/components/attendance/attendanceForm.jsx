import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const AttendanceForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    studentId: '',
    teacherId: '',
    status: 'Present'
  });

  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios.get('/students').then(res => setStudents(res.data));
    axios.get('/teachers').then(res => setTeachers(res.data));

    if (id) {
      axios.get(`/attendance/${id}`).then(res => setFormData(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`/attendance/${id}`, formData);
    } else {
      await axios.post('/attendance', formData);
    }
    navigate('/attendance');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{id ? 'Edit' : 'Mark'} Attendance</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="date" name="date" value={formData.date} onChange={handleChange} required className="border p-2" />

        <select name="studentId" value={formData.studentId} onChange={handleChange} className="border p-2" required>
          <option value="">Select Student</option>
          {students.map(s => <option key={s._id} value={s._id}>{s.name}</option>)}
        </select>

        <select name="teacherId" value={formData.teacherId} onChange={handleChange} className="border p-2" required>
          <option value="">Select Teacher</option>
          {teachers.map(t => <option key={t._id} value={t._id}>{t.name}</option>)}
        </select>

        <select name="status" value={formData.status} onChange={handleChange} className="border p-2">
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">{id ? 'Update' : 'Mark'} Attendance</button>
      </form>
    </div>
  );
};

export default AttendanceForm;
