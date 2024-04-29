'use client'


import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const SubjectPage = () => {
  const [subjects, setSubjects] = useState([]);


  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSubjects, setFilteredSubjects] = useState([]);

  useEffect(() => {
      const fetchSubjects = async () => {
          try {
              const response = await axios.get('/api/subjects');
              setSubjects(response.data);
              setFilteredSubjects(response.data); // Initialize filtered campuses with all campuses
          } catch (error) {
              console.error('Error fetching subjects:', error);
          }
      };

      fetchSubjects();
  }, []);

  const handleSearch = (e) => {
      const searchTerm = e.target.value.toLowerCase();
      setSearchTerm(searchTerm);
      const filtered = subjects.filter((subject) =>
          subject.subject_name.toLowerCase().includes(searchTerm)
      );
      setFilteredSubjects(filtered);
  };




//   const no_of_entries = 3; 

//    // Function to calculate the total number of pages
//    const totalPages = Math.ceil(sections.length / no_of_entries);
   
//   // Function to filter sections based on current page
//   const filteredSections = sections.slice((currentPage - 1) * no_of_entries, currentPage * no_of_entries);

//   // Function to handle pagination
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

// // Function to handle adding new section 
//   const handleAddSection = () => {
//     if (newSectionName.trim() === '') return;

//     const newSection = {
//       name: newSectionName,
//       totalStudents: 0,
//       classTeacher: '',
//     };

//     setSections([...sections, newSection]);
//     setNewSectionName('');

//     setMessage('New section has been created.');

//     setTimeout(() => {
//       setMessage(null);
//     }, 5000);
//   };


  return (
    <div className="flex justify-center">
        
      <div className="w-full p-10">

        <div className="w-full flex justify-between p-4 mb-10 shadow-lg rounded-t-lg border border-gray-400 rounded-l-lg rounded-r-lg">
         <h1 className="text-2xl text-center font-bold">Subjects </h1>
         <Link href="/classes" className="bg-blue-500 hover:bg-blue-300 text-white py-2 px-4 rounded"> View Subjects </Link>
        </div>
       
        <h2 className="text-xl font-bold m-4">Subjects </h2>

        {/* {message && (
          <div className="absolute top-0 right-0 mt-4 mr-4 bg-green-500 text-white px-4 py-2 rounded">
            {message}
          </div>
        )} */}

        
        {/* Search bar*/}
        <div className="mb-4">
            <input
                type="search"
                id="search"
                name="text"
                placeholder="Type the section name"
                className="border border-gray-300 px-2 py-1 rounded-md"
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>

        <div className="flex">

          {/* Left side - Table */}
          <div className="w-2/3 p-4  ">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200 rounded-sm">
                  <th className="px-4 py-2 border border-gray-400">Subject Name</th>
                  <th className="px-4 py-2 border border-gray-400">Subject Code</th>
                  <th className="px-4 py-2 border border-gray-400">Subject Description</th>
                  <th className="px-4 py-2 border border-gray-400">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubjects.map((subject, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2 border-gray-400">{subject.subject_name}</td>
                    <td className="border px-4 py-2 border-gray-400"> {subject.subject_code}</td>
                    <td className="border px-4 py-2 border-gray-400"> {subject.subject_description}</td>
                    <td className="border px-4 py-2 border-gray-400">
                        <button
                          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold p-1 mx-2 rounded"
                          onClick={""} >  Edit
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        
        </div>
        
    
      </div>
      
    </div>
  );
};

export default SubjectPage;
