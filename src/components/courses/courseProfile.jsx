import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from './../../api';

const CourseProfile = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    api.get(`/courses/${id}`).then(res => setCourse(res.data));
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{course.name}</h1>
      <p className="mb-2">{course.description}</p>
      <Link to="/courses" className="text-blue-500">Back to Courses</Link>
    </div>
  );
};

export default CourseProfile;
