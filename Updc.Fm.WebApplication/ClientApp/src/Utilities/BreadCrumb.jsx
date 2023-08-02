import React from 'react';

const BreadCrumb = (props) => {
  return (
    <div>
      <div className="flex flex-row" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 font-normal">
          <li className="items-center">
            <a
              href={props.mainUrl}
              className="inline-flex items-center text-sm text-gray-500 hover:text-[#a73439]"
            >
              {props.main}
            </a>
          </li>

          <li className="inline-flex">
            <div className="inline-flex items-center">
              <svg
                aria-hidden="true"
                fill="currentColor"
                className="w-3 h-3 text-gray-400"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                transform="rotate(160)"
              >
                <g id="SVGRepo_iconCarrier">
                  <path d="M21.71,3.29a1,1,0,0,0-1.42,0l-18,18a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l18-18A1,1,0,0,0,21.71,3.29Z"></path>
                </g>
              </svg>

              <a
                href={props.firstUrl}
                className="ml-1 items-center text-sm text-gray-500 hover:text-[#a73439] md:ml-2"
              >
                {props.first}
              </a>
            </div>
          </li>
          <li className="inline-flex">
            <div className="inline-flex items-center">
              <svg
                aria-hidden="true"
                fill="currentColor"
                className="w-3 h-3 text-gray-400"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                transform="rotate(160)"
              >
                <g id="SVGRepo_iconCarrier">
                  <path d="M21.71,3.29a1,1,0,0,0-1.42,0l-18,18a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l18-18A1,1,0,0,0,21.71,3.29Z"></path>
                </g>
              </svg>

              <a
                href={props.secondUrl}
                className="ml-1 items-center text-sm text-gray-500 hover:text-[#a73439] md:ml-2"
              >
                {props.second}
              </a>
            </div>
          </li>
          <li aria-current="page" className="inline-flex">
            <div className="inline-flex items-center">
              <svg
                aria-hidden="true"
                fill="currentColor"
                className="w-3 h-3 text-gray-400"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                transform="rotate(160)"
              ></svg>
              <span className="ml-1 text-sm text-[#d36360] md:ml-2">
                {props.third}
              </span>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default BreadCrumb;
