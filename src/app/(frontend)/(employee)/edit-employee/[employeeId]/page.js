'use client'

import { useState, useEffect } from 'react';
// import axios from 'axios';

const EditStudentForm = ({ studentId }) => {
    const [studentData, setStudentData] = useState({
        name: '',
        age: '',
        email: '',
        // Add more fields as needed
    });

    // useEffect(() => {
    //     const fetchStudentData = async () => {
    //         try {
    //             const response = await axios.get(`/api/students/${studentId}`);
    //             setStudentData(response.data);
    //         } catch (error) {
    //             // Handle error
    //         }
    //     };
    //     fetchStudentData();
    // }, [studentId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData({ ...studentData, [name]: value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.put(`/api/students/${studentId}`, studentData);
    //         // Handle success, maybe show a success message or redirect
    //     } catch (error) {
    //         // Handle error
    //     }
    // };

    return (
        // onSubmit={handleSubmit}
        <form >
            <input type="text" name="name" value={studentData.name} onChange={handleChange} placeholder="Name" />
            <input type="number" name="age" value={studentData.age} onChange={handleChange} placeholder="Age" />
            <input type="email" name="email" value={studentData.email} onChange={handleChange} placeholder="Email" />
            {/* Add more input fields for other student information */}
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditStudentForm;
