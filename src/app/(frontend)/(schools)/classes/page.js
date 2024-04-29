'use client'

import React, { useState, useEffect } from 'react';
import axios from "axios";
import Link from 'next/link';


const ClassSectionsPage = () => {
  const [classes, setClasses] = useState([]);
  // const [newClassName, setNewClassName] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);


  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCampuses, setFilteredClasses] = useState([]);
  
  useEffect(() => {
    const fetchClasses = async () => {
        try {
            const response = await axios.get('/api/classes');
            console.log(response); 
            setClasses(response.data);
            setFilteredClasses(response.data); // Initialize filtered campuses with all campuses
        } catch (error) {
            console.error('Error fetching campuses:', error);
        }
    };

    fetchClasses();
}, []);


  // const handleAddClass = async () => {
  //   try {
  //     const response = await fetch('/api/classes', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ name: newClassName })
  //     });
  //     if (response.ok) {
  //       setNewClassName('');
  //       fetchClasses();
  //     } else {
  //       console.error('Failed to add class:', response.status);
  //     }
  //   } catch (error) {
  //     console.error('Error adding class:', error);
  //   }
  // };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = classes.filter((classes) =>
        classes.class_name.toLowerCase().includes(searchTerm)
    );
    setFilteredClasses(filtered);
};


  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  return (
    <div className="flex justify-center">
      <div className="w-full p-10">
        <h2 className="text-xl font-bold m-4">Classes Assigned</h2>
        <div className="flex mb-4">
          <input
            type="search"
            id="search"
            name="text"
            placeholder="Type the class name"
            className="border border-gray-300 px-2 py-1 rounded-md"
            value={searchTerm}
            onChange={handleSearch}
          />
          
        </div>
        <div className="flex">
          <div className="w-2/3 p-4">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200 rounded-sm">
                  <th className="px-4 py-2 border border-gray-400">Class</th>
                  <th className="px-4 py-2 border border-gray-400">Campus</th>
                  <th className="px-4 py-2 border border-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCampuses.map((cls, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2 border-gray-400">
                    <Link href="/sections" className="text-blue-500 font-bold italic underline hover:text-blue-900 cursor-pointer"> {cls.class_name}</Link>
                    </td>
                    <td className="border px-4 py-2 border-gray-400">
                    
                    </td>
                
                    
                    <td className="border border-gray-400">
                      <div className="flex justify-left">

                        <button
                          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold p-1 mx-2 rounded"
                          onClick={""} >  Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold p-1 mx-2 rounded"
                          onClick={""} >  Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div className="flex justify-center mt-4">
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
          <div className="w-1/3 p-4 flex flex-col">
            <h2 className="text-xl font-bold m-4">Add New Class</h2>
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2 mb-2"
              placeholder="Enter Class Name"
              value={''} // newClassName
              onChange={""} // (e) => setNewClassName(e.target.value)
            />
            <div className="text-right">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={''} // handleAddClass
              >
                Add Section
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSectionsPage;
