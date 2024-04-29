
'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const SchoolDropdown = () => {
  const [isSchoolVisible, setSchoolVisible] = useState(false);
  const schoolButtonRef = useRef(null);
  const schoolRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        schoolButtonRef.current &&
        !schoolButtonRef.current.contains(event.target) &&
        schoolRef.current &&
        !schoolRef.current.contains(event.target)
      ) {
        setSchoolVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleSchoolVisibility = () => {
    setSchoolVisible(!isSchoolVisible);
  };

  return (
    <div id="container" className="">
      <div className="relative inline-block text-left">
        <button id="school-button" className="block" onClick={toggleSchoolVisibility} ref={schoolButtonRef}>
          <span>Schools</span>
        </button>
        <div id="school" className={` ${isSchoolVisible ? '' : 'hidden'}`} ref={schoolRef}>
          <div className="py-2">
            <Link href="/campuses" className="block pl-6 py-2 text-white-400 hover:bg-gray-800 rounded-md">- All Campuses </Link> 
            <Link href="/classes" className="block pl-6 py-2 text-white-400 hover:bg-gray-800 rounded-md">- All Classes</Link> 
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolDropdown;
