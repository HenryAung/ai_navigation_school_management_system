'use client'


import Link from 'next/link';
import { useState } from 'react';

export default function RolePermissionForm() {
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState({
    read: false,
    write: false,
    delete: false,
    // Add more permissions as needed
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the roleName and permissions to your backend
    console.log('Role Name:', roleName);
    console.log('Permissions:', permissions);
    // Reset the form after submission
    setRoleName('');
    setPermissions({
      read: false,
      write: false,
      delete: false,
      // Add more permissions as needed
    });
  };

  return (
    <div className=" mx-auto m-8 p-10">

      <h2 className="text-4xl text-center text-indigo-900 font-bold mb-4">Create Role</h2>

      <div className="text-right my-6">
            <Link href="/roles" className="bg-blue-500 w-auto px-4 py-2 text-white-400 hover:bg-blue-800 rounded-md">  View Roles </Link>
        </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='my-5'>
          <label htmlFor="roleName" className="uppercase tracking-wide text-xl text-indigo-900 font-bold ">Role Name</label>
          <div className='mt-5'>
          <input
            type="text"
            id="roleName"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          </div>
        </div>
        <hr className='text-blue-500' />

        <div>
          <label className="uppercase tracking-wide text-xl text-indigo-900 font-bold">Permissions</label>
          <div className="grid grid-cols-3 gap-4 my-5 px-10">
            <div>
              <input
                type="checkbox"
                id="read"
                name="read"
                checked={permissions.read}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="read" className="ml-2">Read</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="write"
                name="write"
                checked={permissions.write}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="write" className="ml-2">Write</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="delete"
                name="delete"
                checked={permissions.delete}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="delete" className="ml-2">Delete</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="read"
                name="read"
                checked={permissions.read}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="read" className="ml-2">Read</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="write"
                name="write"
                checked={permissions.write}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="write" className="ml-2">Write</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="delete"
                name="delete"
                checked={permissions.delete}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="delete" className="ml-2">Delete</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="read"
                name="read"
                checked={permissions.read}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="read" className="ml-2">Read</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="write"
                name="write"
                checked={permissions.write}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="write" className="ml-2">Write</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="delete"
                name="delete"
                checked={permissions.delete}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="delete" className="ml-2">Delete</label>
            </div>
          </div>
        </div>

        {/* button  */}
        <div className="flex justify-center my-10">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Create Role</button>
        </div>
      </form>
    </div>
  );
}
