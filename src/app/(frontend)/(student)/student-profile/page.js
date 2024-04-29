// pages/StudentProfile.js

import Head from 'next/head';
import Link from 'next/link';

const StudentProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Student Profile</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-6">
              <img src="https://via.placeholder.com/300" alt="Student" className="w-48 h-48 object-cover rounded-full" />
            </div>
            <div className="text-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-800">John Doe</h1>
              <p className="text-gray-600">Class 10 | Section A</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Personal Detail</h2>
                <ul className="mt-2 text-gray-600">
                  <li><strong>Name:</strong> John Doe</li>
                  <li><strong>Gender:</strong> Male</li>
                  <li><strong>Date of Birth:</strong> January 1, 2005</li>
                  <li><strong>Blood Type:</strong> A+</li>
                  <li><strong>Address:</strong> 123 Main Street</li>
                  <li><strong>Phone:</strong> 123-456-7890</li>
                  <li><strong>Email:</strong> john.doe@example.com</li>
                  <li><strong>City:</strong> City</li>
                  <li><strong>State:</strong> State</li>
                  <li><strong>ID Number:</strong> 123456</li>
                  <li><strong>Extra Note:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
      
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Admission Detail</h2>
                <ul className="mt-2 text-gray-600">
                  <li><strong>Admission Date:</strong> January 1, 2022</li>
                  <li><strong>Class:</strong> 10</li>
                  <li><strong>Section:</strong> A</li>
                  <li><strong>Admission Number:</strong> 987654</li>
                  <li><strong>Roll Number:</strong> 123456</li>
                </ul>
        
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Parent Detail</h2>
                <ul className="mt-2 text-gray-600">
                  <li><strong>Father Name:</strong> John Doe Sr.</li>
                  <li><strong>Father Phone:</strong> 123-456-7890</li>
                  <li><strong>Father Occupation:</strong> Engineer</li>
                  <li><strong>Mother Name:</strong> Jane Doe</li>
                  <li><strong>Mother Phone:</strong> 987-654-3210</li>
                  <li><strong>Mother Occupation:</strong> Doctor</li>
                </ul>
              
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Login Detail</h2>
                <ul className="mt-2 text-gray-600">
                  <li><strong>User Name:</strong> johndoe</li>
                  <li><strong>Email:</strong> johndoe@example.com</li>
                  <li><strong>Password:</strong> ********</li>
                </ul>
   
              </div>

            </div>

            <div className="text-center m-6">
            <Link href="/edit-student" className="bg-blue-600 w-auto px-4 py-2 text-white-400 hover:bg-blue-800 rounded-md">  Edit Student Details </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
