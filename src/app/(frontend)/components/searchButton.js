// src/app/frontend/class_section/page.js
'use client'
import React, { useState } from 'react';

const SearchButton = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = sections.filter(section =>
    section.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

 

  return (
    
        <div className="flex mb-4">
          {/* Search Box */}
          <input
            type="text"
            placeholder="Search..."
            className="w-auto border rounded-md px-4 py-2 mr-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

  );
};

export default SearchButton;
