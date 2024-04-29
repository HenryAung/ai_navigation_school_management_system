'use client'

import Link from 'next/link'
import { useState } from 'react';

const addSubject = ({ message }) => {

  const [selectedClasses, setSelectedClasses] = useState([]);
  const [showOptions, setShowOptions] = useState(false);


  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
};

  return (
    <>


        {/* Form for adding new student */}
            

        <div class="container mx-auto px-4 py-8">

        <h2 className="text-4xl text-center text-indigo-900 font-bold mb-4">Subjects</h2>

        <div className="text-right my-6">
            <Link href="/subjects" className="bg-blue-500 w-auto px-4 py-2 text-white-400 hover:bg-blue-800 rounded-md">  Add New Subject </Link>
        </div>

        <form class="w-full p-10">

          {/* Personal Detail Section */}
          
          <div class="uppercase tracking-wide text-xl text-indigo-900 font-bold mb-4">Subject Detail</div>

           <div class="flex flex-wrap -mx-3 mb-6">

             {/* subject Name  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="subject_name" class="block text-sm font-medium text-gray-700">Subject Name</label>
                <input type="text" name="subject_name" id="subject_name" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>

             {/* Class  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="gender" class="block text-sm font-medium text-gray-700">Class</label>
                <select id="gender" name="gender" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Class 1</option>
                    <option>Class 2</option>
                    <option>Class 3</option>
                </select>
            </div>

             {/* Subject Code  */}
             <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="subject_code" class="block text-sm font-medium text-gray-700">Subject Code</label>
                <input type="date" name="subject_code" id="subject_code" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            {/* description  */}
            <div class="w-full md:w-1/2 px-3 mb-6 ">
                <label for="description" class="block text-sm font-medium text-gray-700">Subject Description</label>
                <input type="text" name="description" id="description" class="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div class="mt-6">
                  <button type="submit" class="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Save</button>
                </div>

             </div>
          

        </form>

    </div>





    </>
  );
};

export default addSubject;
