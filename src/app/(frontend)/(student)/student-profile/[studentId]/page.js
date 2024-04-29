'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import { fetchStudentById, updateStudent } from '../../api/studentApi'; // Example API functions

export default function EditStudent() {
  const router = useRouter();
  const { studentId } = router.query;
  const [student, setStudent] = useState(null);

//   useEffect(() => {
//     if (studentId) {
//       fetchStudentById(studentId)
//         .then((data) => setStudent(data))
//         .catch((error) => console.error('Error fetching student:', error));
//     }
//   }, [studentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateStudent(studentId, student);
      router.push(`/student/${studentId}`);
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Edit Student</h1>
      {student && (
        <form onSubmit={handleSubmit} className="mt-4">
          {/* Input fields for student information */}
          <input type="text" name="name" value={student.name} onChange={handleChange} className="..." />
          {/* Other input fields */}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
        </form>
      )}
    </div>
  );
}
