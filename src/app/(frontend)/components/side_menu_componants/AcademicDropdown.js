'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';



const AcademicDropdown = () => {
  const [isAcademicVisible, setAcademicVisible] = useState(false);
  const academicButtonRef = useRef(null);
  const academicRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        academicButtonRef.current &&
        !academicButtonRef.current.contains(event.target) &&
        academicRef.current &&
        !academicRef.current.contains(event.target)
      ) {
        setAcademicVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleAcademicVisibility = () => {
    setAcademicVisible(!isAcademicVisible);
  };

  return (
    <div id="container" className="">
      <div className="relative inline-block text-left">
        <button id="academic-button" className="block" onClick={toggleAcademicVisibility} ref={academicButtonRef}>
          <span>Academic</span>
        </button>
        <div id="academic" className={` ${isAcademicVisible ? '' : 'hidden'}`} ref={academicRef}>
          <div className="py-2">
            <Link href="/sections" className="block pl-6 py-2 text-white-400 hover:bg-gray-800 rounded-md">- Sections</Link> 
            <Link href="/subjects" className="block pl-6 py-2 text-white-400 hover:bg-gray-800 rounded-md">- Subjects</Link> 
            <Link href="/timetable" className="block pl-6 py-2 text-white-400 hover:bg-gray-800 rounded-md">- Timetable</Link> 
            <Link href="/attendance/1" className="block pl-6 py-2 text-white-400 hover:bg-gray-800 rounded-md">- Attendance</Link> 
            {/* <Link href="/student-leaves/1" className="block pl-6 py-2 text-white-400 hover:bg-gray-800 rounded-md">- Student Leaves</Link>  */}
            {/* <Link href="/notice-boards" className="block pl-6 py-2 text-white-400 hover:bg-gray-800 rounded-md">- Notice Boards</Link>  */}
            {/* <Link href="/events" className="block pl-6 py-2 text-white-400 hover:bg-gray-800 rounded-md">- Events</Link>  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicDropdown;
