'use client'

import Link from "next/link";

import axios from "axios";
import { useState, useEffect } from "react";

const Campuses = () => {
    const [campuses, setCampuses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCampuses, setFilteredCampuses] = useState([]);

    useEffect(() => {
        const fetchCampuses = async () => {
            try {
                const response = await axios.get('/api/campuses');
                setCampuses(response.data);
                setFilteredCampuses(response.data); // Initialize filtered campuses with all campuses
            } catch (error) {
                console.error('Error fetching campuses:', error);
            }
        };

        fetchCampuses();
    }, []);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);
        const filtered = campuses.filter((campus) =>
            campus.campus_name.toLowerCase().includes(searchTerm)
        );
        setFilteredCampuses(filtered);
    };

    return (
        <div className="flex">
            {/* Main Content */}
            <div className="flex-1 p-4">
                <div className="container mx-auto my-10">
                    <h1 className="text-3xl text-center font-bold mb-6">Our Campuses</h1>

                    {/* Search bar*/}
                    <div className="mb-4">
                        <input
                            type="search"
                            id="search"
                            name="text"
                            placeholder="Type the campus name"
                            className="border border-gray-300 px-2 py-1 rounded-md"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>

                    <table className="min-w-full border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 py-2 px-4 bg-gray-100">No.</th>
                                <th className="border border-gray-300 py-2 px-4 bg-gray-100">Campus Name</th>
                                <th className="border border-gray-300 py-2 px-4 bg-gray-100">Address</th>
                                <th className="border border-gray-300 py-2 px-4 bg-gray-100">Phone Number</th>
                                <th className="border border-gray-300 py-2 px-4 bg-gray-100">Admin</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredCampuses.map((campus, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 py-2 px-4">{campus.campus_id}</td>
                                    <td className="border border-gray-300 py-2 px-4">{campus.campus_name}</td>
                                    <td className="border border-gray-300 py-2 px-4">{campus.campus_address}</td>
                                    <td className="border border-gray-300 py-2 px-4">{campus.campus_phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    
                </div>
                <Link href="/add-campus" className="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"> Add new campus</Link>
            </div>
            
        </div>
    );
};

export default Campuses;

