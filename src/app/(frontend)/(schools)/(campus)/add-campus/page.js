'use client'

import axios from 'axios';
import { useState } from 'react';

const AddCampus = ({ message }) => {



    const [formData, setFormData] = useState({
        campus_name: '',
        campus_address: '',
        campus_phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        console.log("saved")
        e.preventDefault();
        try {
            

            const response = await axios.post('/api/campuses', formData);
            console.log('Campus added:', response.data);

            // Clear form fields after successful submission
            setFormData({
                campus_name: '',
                campus_address: '',
                campus_phone: ''
            });
        } catch (error) {
            console.error('Error adding campus:', error);
        }
    };

    return (
        <>
            {/* Form for adding new student */}
            <div className="container mx-auto px-4 py-8">
                <form className="w-full p-10" onSubmit={handleSubmit}>
                    <h1 className="uppercase text-center text-xl text-indigo-900 font-bold mb-4">Add New Campus</h1>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        {/* campus Name  */}
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label htmlFor="campus_name" className="block text-sm font-medium text-gray-700">Campus Name</label>
                            <input
                                type="text"
                                name="campus_name"
                                id="campus_name"
                                value={formData.campus_name}
                                onChange={handleChange}
                                className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        {/* Address  */}
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label htmlFor="campus_address" className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                name="campus_address"
                                id="campus_address"
                                value={formData.campus_address}
                                onChange={handleChange}
                                className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        {/* Phone  */}
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label htmlFor="campus_phone" className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="tel"
                                name="campus_phone"
                                id="campus_phone"
                                value={formData.campus_phone}
                                onChange={handleChange}
                                className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Save</button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default AddCampus;
