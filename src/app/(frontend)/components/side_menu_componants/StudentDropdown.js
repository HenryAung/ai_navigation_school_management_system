// components/StudentDropdown.js
'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const StudentDropdown = () => {
  const [isStudentVisible, setStudentVisible] = useState(false);
  const studentButtonRef = useRef(null);
  const studentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        studentButtonRef.current &&
        !studentButtonRef.current.contains(event.target) &&
        studentRef.current &&
        !studentRef.current.contains(event.target)
      ) {
        setStudentVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleStudentVisibility = () => {
    setStudentVisible(!isStudentVisible);
  };

  return (
    <div className="">
      <div className="relative inline-block text-left">
        <button id="student-button" className="block" onClick={toggleStudentVisibility}>
          <span>Student</span>
        </button>
        <div id="student" className={` ${isStudentVisible ? '' : 'hidden'}`} ref={studentRef}>
          <div className="py-2">
            <Link href="/add-student" className="block pl-6 py-2 text-white-400 hover:bg-gray-800 rounded-md" > - Add Student
            </Link>
            <Link href="/student-list" className="block pl-6 py-2 text-white-400 hover:bg-gray-800 rounded-md">- Student List
            </Link>
            {/* <Link href="/id-cards" className="block pl-6 py-2 text-white-400 hover:bg-gray-800 rounded- md">- ID cards
            </Link>
            <Link href="/certificates" className="block pl-6 py-2 text-white-400 hover:bg-gray-800 rounded-md">- Certificates
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDropdown;
