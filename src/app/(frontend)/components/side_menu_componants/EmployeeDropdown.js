// components/EmployeeDropdown.js
'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const EmployeeDropdown = () => {
  const [isEmployeeVisible, setEmployeeVisible] = useState(false);
  const employeeButtonRef = useRef(null);
  const employeeRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        employeeButtonRef.current &&
        !employeeButtonRef.current.contains(event.target) &&
        employeeRef.current &&
        !employeeRef.current.contains(event.target)
      ) {
        setEmployeeVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleEmployeeVisibility = () => {
    setEmployeeVisible(!isEmployeeVisible);
  };

  return (
    <div id="container" className="">
      <div className="relative inline-block text-left">
        <button id="employee-button" className="block" onClick={toggleEmployeeVisibility} ref={employeeButtonRef}>
          <span>Employee</span>
        </button>
        <div id="employee" className={` ${isEmployeeVisible ? '' : 'hidden'}`} ref={employeeRef}>
          <div className="py-2">
            <Link href="/roles" className="block pl-6 py-2  text-white-800 hover:bg-gray-800 rounded-md">- Roles
            </Link>
            <Link href="/add-employee" className="block pl-6 py-2 text-white-400 hover:bg-gray-800 rounded-md">- Add Employee
            </Link>
            <Link href="/employee-list" className="block pl-6 py-2 text-white-400 hover:bg-gray-800 rounded-md">- Employee List
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDropdown;
