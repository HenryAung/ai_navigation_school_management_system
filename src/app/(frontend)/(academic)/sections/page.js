'use client'


import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const ClassSectionsPage = () => {
  const [sections, setSections] = useState([]);
  // const [newSectionName, setNewSectionName] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  // const [searchQuery, setSearchQuery] = useState('');
  // const [message, setMessage] = useState(null);

  // Function to handle search

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSection, setFilteredSection] = useState([]);

  useEffect(() => {
      const fetchSections = async () => {
          try {
              const response = await axios.get('/api/sections');
              setSections(response.data);
              setFilteredSection(response.data); // Initialize filtered campuses with all campuses
          } catch (error) {
              console.error('Error fetching campuses:', error);
          }
      };

      fetchSections();
  }, []);

  const handleSearch = (e) => {
      const searchTerm = e.target.value.toLowerCase();
      setSearchTerm(searchTerm);
      const filtered = sections.filter((section) =>
          section.section_name.toLowerCase().includes(searchTerm)
      );
      setFilteredSection(filtered);
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
         <h1 className="text-2xl text-center font-bold">Class: class name here </h1>
         <Link href="/classes" className="bg-blue-500 hover:bg-blue-300 text-white py-2 px-4 rounded"> View Classes  </Link>
        </div>
       
        <h2 className="text-xl font-bold m-4">Class Sections</h2>

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
                  <th className="px-4 py-2 border border-gray-400">Section Name</th>
                  <th className="px-4 py-2 border border-gray-400">Total Students</th>
                  <th className="px-4 py-2 border border-gray-400">Class Teacher</th>
                  <th className="px-4 py-2 border border-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSection.map((section, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2 border-gray-400">{section.section_name}</td>
                    <td className="border px-4 py-2 border-gray-400"> </td>
                    <td className="border px-4 py-2 border-gray-400"> </td>
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

          {/* Right side - Form */}
          <div className="w-1/3 p-4 flex flex-col">
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2 mb-2"
              placeholder="Enter Section Name"
              value={""} //newSectionName
              onChange={""} // (e) => setNewSectionName(e.target.value)
            />
            <div className="text-right">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={""} //handleAddSection
              >
                Add Section
              </button>
            </div>
          </div>
        </div>
        
          {/* Pagination
          <div className="flex justify-center mt-4">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div> */}
      </div>
      
    </div>
  );
};

export default ClassSectionsPage;
