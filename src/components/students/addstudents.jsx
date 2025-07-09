import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../sidebar'; 

const Students = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [editId, setEditId] = useState(null);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`http://localhost:5000/api/students/${editId}`, { name, grade });
    } else {
      await axios.post('http://localhost:5000/api/students', { name, grade });
    }
    setName('');
    setGrade('');
    setEditId(null);
  };

  
 
  return (
  <div className="flex">
  <Sidebar/> 
  <div className="p-8">
   <h1 className="text-2xl font-bold text-gray-500 mb-4">Add New Student</h1>
   <div className="">
    {/* Upload Students image */}
       <div>
        <div className="w-[80px] h-[80px] rounded-[40px] ml-[400px] pt-[50px] bg-gray-200">
          <img
            // src={camera}
            alt=""
            className=" w-[30px] h-[30px] ml-[24px] -mt-[20px]"
          />
        </div>
        <p className="text-primary ml-[400px]">Upload photo</p>
      </div>
{/* Add students details */}
      <div className="ml-[70px]">

         <div className="flex gap-[90px] mt-[40px]">
          <div>
            <p className="text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              First Name
            </p>
            <input
              placeholder="Enter First Name"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
          <div>
            <p className="text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              Last Name
              
            </p>
            <input
              placeholder="Enter last name"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
        </div>

        <div className="flex gap-[90px] mt-[40px]">
          <div>
            <p className="flex text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              Date of Birth
              <p className="text-red-500 font-roboto text-[14px] font-[400]">
                {" "}
                *
              </p>
            </p>
            <input
              placeholder="Enter Staff Number"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
          <div>
            <p className="flex text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              Grade
              <p className="text-red-500 font-roboto text-[14px] font-[400]">
                {" "}
                *
              </p>
            </p>
            <input
              placeholder="Enter your Email"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
        </div>
       
        <div className="flex gap-[90px] mt-[40px]">
          <div>
            <p className="text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              Illnesses
            </p>
            <input
              placeholder="Enter known illnesses the student is undergoing"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
          <div>
            <p className="text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              Allergies
            </p>
             <input
              placeholder="Enter known allergies"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
           </div>
        </div>
      {/* Add Guardians/Parents details */}
      <div className="mt-[40px]">
        <h1 className="text-2xl font-bold text-gray-500 mb-4">Add Guardian/Parent</h1>
    
        </div>
       <div className="flex gap-[90px] mt-[40px]">
          <div>
            <p className="text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              First Name
            </p>
            <input
              placeholder="Enter First Name"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
          <div>
            <p className="text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              Last Name
              
            </p>
            <input
              placeholder="Enter last name"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
        </div>

         <div className="flex gap-[90px] mt-[40px]">
          <div>
            <p className="text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              Relationship
            </p>
            <input
              placeholder="Enter First Name"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
          <div>
            <p className="text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              Phone Number
              
            </p>
            <input
              placeholder="Enter last name"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
        </div>

         <div className="flex gap-[90px] mt-[40px]">
          <div>
            <p className="text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              Email Address
            </p>
            <input
              placeholder="Enter First Name"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
          <div>
            <p className="text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              Location
              
            </p>
            <input
              placeholder="Enter last name"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
        </div>
      </div>


      <button className="w-[274px] h-[56px] rounded-[12px] bg-primary ml-[350px] mt-[50px]">
        <p className="text-white text-center font-roboto text-[18px] font-[500]">
          Add New Student
        </p>
      </button>
    </div>
    </div>
    </div>
  );
};

export default Students;
