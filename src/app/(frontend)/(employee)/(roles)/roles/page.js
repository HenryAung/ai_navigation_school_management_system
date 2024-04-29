'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';


const EmployeeList = ({ employee }) => {
  const [roles, setRoles] = useState([]); 

  useEffect(()=> {
    const fetctRoles = async () => { 
      try { 
        const roles = await axios.get('/api/user_roles')
        setRoles(roles.data)
      } catch (err) { 
        console.error('Error fetching roles' , err) 
      }
    };
    
    fetctRoles(); 

   } , [])


  return (
    <>
      
    
       
        <div className="flex-1 p-4">
          <div className="container mx-auto my-10 px-10 py-10">
            <h1 className="text-3xl text-center font-bold mb-6">User Roles </h1>

            <div className="text-right m-6">
            <Link href="/add-roles" className="bg-blue-500 w-auto px-4 py-2 text-white-400 hover:bg-blue-800 rounded-md">  Add new roles</Link>
            </div>

            {/* Search bar */}
            <div className="mb-4">
              <form id="searchForm" action="/employee/employee_list" method="POST">
           
                <label htmlFor="search" className="sr-only">
                  Search:
                </label>
                <input
                  type="search"
                  id="search"
                  name="text"
                  placeholder="Search "
                  className="border border-gray-300 px-2 py-1 rounded-md"
                />

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
                  Search
                </button>
              </form>
            </div>


            {/* employee list table */}
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 py-2 px-4 bg-gray-100">No.</th>
                  <th className="border border-gray-300 py-2 px-4 bg-gray-100">User Roles</th>
                </tr>
              </thead>

              <tbody>
                  {roles.map((role, index) => (
                      <tr key={index}>
                          <td className="border border-gray-300 py-2 px-4">{role.user_role_id}</td>
                          <td className="border border-gray-300 py-2 px-4">{role.user_role_name}</td>
           
                      </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

    
    </>
  );
};

export default EmployeeList;
