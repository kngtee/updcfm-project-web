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
          className="bg-white text-gray-400 h-[35px] text-xs font-medium rounded-l shadow-sm shadow-[#a73439]/25 block px-3 py-2.5"
          onChange={handleChange}
        />
        {/* <button className="flex h-[35px] w-[40px] items-center justify-center bg-[#a73439] rounded-r shadow-sm shadow-[#a73439]/25">
          <svg
            aria-hidden="true"
            fill="white"
            viewBox="0 0 24 24"
            className="w-[20px] h-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            stroke="white"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18ZM11 6C10.3434 6 9.69321 6.12933 9.08658 6.3806C8.47995 6.63188 7.92876 7.00017 7.46447 7.46447C7.00017 7.92876 6.63188 8.47996 6.3806 9.08658C6.12933 9.69321 6 10.3434 6 11C6 11.5523 6.44772 12 7 12C7.55228 12 8 11.5523 8 11C8 10.606 8.0776 10.2159 8.22836 9.85195C8.37913 9.48797 8.6001 9.15726 8.87868 8.87868C9.15726 8.6001 9.48797 8.37913 9.85195 8.22836C10.2159 8.0776 10.606 8 11 8C11.5523 8 12 7.55228 12 7C12 6.44772 11.5523 6 11 6Z"
                fill="white"
              ></path>
              <path
                d="M20 20L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default SearchBox;
