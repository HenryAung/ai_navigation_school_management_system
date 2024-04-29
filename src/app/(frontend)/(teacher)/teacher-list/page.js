'use client'

import { useState } from 'react';


const TeacherList = ({ teachers, message }) => {
 

  return (
    <>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <div className="container mx-auto my-10 px-10 py-10">
            <h1 className="text-3xl font-bold mb-6">Teacher Lists</h1>

            {message && (
              <div className="bg-green-300 text-black my-10 p-4 rounded-md shadow-md">
                <p className="font-semibold">{message}</p>
              </div>
            )}

            {/* Search bar */}
            <div className="mb-4">
              <form
                id="searchForm"
                action="/teacher/teacher_list"
                method="POST"
              >
                <label htmlFor="firstName" className="sr-only">
                  Search:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstname"
                  placeholder="First Name"
                  className="border border-gray-300 px-2 py-1 rounded-md"
                />

                <label htmlFor="lastName" className="sr-only">
                  Search:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastname"
                  placeholder="Last Name"
                  className="border border-gray-300 px-2 py-1 rounded-md"
                />

                <label htmlFor="searchByEmail" className="sr-only">
                  Search:
                </label>
                <input
                  type="search"
                  id="searchByEmail"
                  name="email"
                  placeholder="Search by email"
                  className="border border-gray-300 px-2 py-1 rounded-md"
                />

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
                >
                  Search
                </button>
              </form>
            </div>

            <table className="min-w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 py-2 px-4 bg-gray-100">
                    No.
                  </th>
                  <th className="border border-gray-300 py-2 px-4 bg-gray-100">
                    Name
                  </th>
                  <th className="border border-gray-300 py-2 px-4 bg-gray-100">
                    Gender
                  </th>
                  <th className="border border-gray-300 py-2 px-4 bg-gray-100">
                    Address
                  </th>
                  <th className="border border-gray-300 py-2 px-4 bg-gray-100">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
              
              
              </tbody>
            </table>
          </div>
        </div>
      
    </>
  );
};

export default TeacherList;
