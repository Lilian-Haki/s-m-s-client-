import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // This contains flags and layout

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

   const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log(response.data);
      setSuccess(response.data.message);
      // Redirect to dashboard after successful login
      navigate('/dashboard');
    } catch (err) {
      console.error(err.response.data);
      setError(err.response.data.message || 'Something went wrong.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
      <h1 className="text-3xl font-bold mb-6 mt-[150px]">School Management System</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-200 ">
        <div className="mb-4 ">
          <label className="block text-gray-700 mb-2" htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter your email address "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
           <PhoneInput
        country={"ke"} // default country
        value={phone}
        onChange={setPhone}
        enableSearch={true}
        disableSearchIcon={false}
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: true,
        }}
      />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Confirm your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full"
        >
          Register
        </button>
        <p className="text-center mt-4">
            Already have an account? <a href="/" className="text-blue-600 hover:underline">Login</a>
        </p>
        {error && <p className="text-red-600 mt-4">{error}</p>}
        {success && <p className="text-green-600 mt-4">{success}</p>}
      </form>
    </div>
  );
};

export default Register;
