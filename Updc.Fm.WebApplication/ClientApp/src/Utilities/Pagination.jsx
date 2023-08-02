import React from 'react';
import { DOTS, usePagination } from '../Pagination/usePagination';
import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md';

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  let paginationRangeLength = paginationRange && paginationRange.length;
  console.log(paginationRangeLength);

  if (currentPage === 0 || paginationRangeLength < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage !== paginationRangeLength) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="flex flex-row justify-between mt-4">
      {/* Pagination Details */}
      <div className="w-fit">
        <span className="text-xs text-gray-600">
          Showing
          <span className="font-semibold text-[#0f0f0f] ">
            {' '}
            {currentPage === 1
              ? currentPage
              : pageSize * (currentPage - 1)}{' '}
          </span>
          to
          <span className="font-semibold text-[#0f0f0f] ">
            {' '}
            {currentPage === lastPage
              ? totalCount
              : pageSize * currentPage}{' '}
          </span>
          of
          <span className="font-semibold text-[#0f0f0f] "> {totalCount} </span>
          Entries
        </span>
      </div>
      {/* Pagination Button */}
      <div className=" w-fit flex items-center">
        <div
          onClick={onPrevious}
          className={
            currentPage > 1
              ? 'hover:bg-[#a73439] hover:text-white hover:cursor-pointer flex flex-row items-center w-[70px] px-2 py-1 text-sm font-medium text-[#0f0f0f]  rounded-l-md border-1 border-r border-[#a73439]'
              : 'flex flex-row items-center w-[50px] px-2 py-1 text-sm font-medium text-[#0f0f0f]  rounded-l-md cursor-default border-1 border-r border-[#a73439]'
          }
        >
          <MdArrowCircleLeft className="mr-1" />
          <span>Prev</span>
        </div>
        {paginationRange &&
          paginationRange.map((pageNumber, index) => {
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === DOTS) {
              return (
                <span
                  key={index}
                  className="flex items-center justify-center hover:bg-[#a73439] hover:text-white hover:cursor-pointer flex flex-row items-center w-[70px] px-2 py-1 text-sm font-medium text-[#0f0f0f]  rounded-md"
                >
                  &#8230;
                </span>
              );
            }

            // Render our Page Pills
            return (
              <span
                key={index}
                className="flex items-center justify-center hover:bg-[#a73439] hover:text-white hover:cursor-pointer flex flex-row items-center w-[70px] px-2 py-1 text-sm font-medium text-[#0f0f0f]  rounded-md"
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </span>
            );
          })}
        <button
          onClick={onNext}
          className="inline-flex items-center px-2 py-1 text-sm font-medium text-[#0f0f0f]  border-1 border-l border-[#a73439] rounded-r-md hover:bg-[#a73439] hover:text-white"
        >
          Next
          <MdArrowCircleRight className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
