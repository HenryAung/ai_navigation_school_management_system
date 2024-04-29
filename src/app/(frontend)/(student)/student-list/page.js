'use client'


import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";


const StudentList = ({ message }) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('/api/students');
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);



    return (
        <div className="flex">
            {/* Main Content */}
            <div className="flex-1 p-4">
                <div className="container mx-auto my-10">
                    <h1 className="text-3xl font-bold mb-6">Student Lists</h1>

                    <div className="text-right m-6">
                        <Link href="/add-student" className="bg-blue-500 w-auto px-4 py-2 text-white-400 hover:bg-blue-800 rounded-md">  Add New Student</Link>
                    </div>

                    {/* {message && (
                        <div className="bg-green-300 text-black my-10 p-4 rounded-md shadow-md">
                            <p className="font-semibold">{message}</p>
                        </div>
                    )} */}

                    {/* Search bar */}
                    <div className="mb-4">
                        <form id="searchForm" action="/student/student_list" method="POST">
                            {/* Search bar inputs */}
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
                                Search
                            </button>
                        </form>
                    </div>

                    <table className="min-w-full border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 py-2 px-4 bg-gray-100">Student No.</th>
                                <th className="border border-gray-300 py-2 px-4 bg-gray-100">
                                    Admission No.
                                </th>
                                <th className="border border-gray-300 py-2 px-4 bg-gray-100">Name</th>
                                <th className="border border-gray-300 py-2 px-4 bg-gray-100">Gender</th>
                                <th className="border border-gray-300 py-2 px-4 bg-gray-100">Email</th>
                                <th className="border border-gray-300 py-2 px-4 bg-gray-100"></th>
                            </tr>
                        </thead>

                        

                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 py-2 px-4">{student.student_number} </td>
                                    <td className="border border-gray-300 py-2 px-4">{student.admission_number} </td>
                                    <td className="border border-gray-300 py-2 px-4">
                                    <Link href="/student-profile" className="text-blue-500 font-bold italic underline hover:text-blue-900 cursor-pointer"> {student.student_name}</Link>
                                    </td>
                                    <td className="border border-gray-300 py-2 px-4">{student.gender}</td>
                                    <td className="border border-gray-300 py-2 px-4">{student.student_email}</td>
                                    <td className="border border-gray-300 py-2 px-4"></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentList;
