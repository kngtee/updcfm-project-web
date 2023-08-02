import React from 'react';

const SearchBox = ({ query }) => {
  const handleChange = (e) => {
    query(e.target.value);
  };
  return (
    <div className="">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="flex flex-row">
        <input
          type="search"
          id="search"
          placeholder="Search for jobs..."
          className="bg-white text-gray-400 h-[35px] text-xs font-medium rounded shadow-sm shadow-[#a73439]/25 block px-3 py-2.5"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
