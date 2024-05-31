import React, { useState, useEffect } from 'react';

const Pagination = ({ totalItems, perPageItems, returnData, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / perPageItems));
  }, [totalItems, perPageItems]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * perPageItems;
    const endIndex = Math.min(startIndex + perPageItems, totalItems);
    const currentPageData = returnData.slice(startIndex, endIndex);
    onPageChange(currentPageData);
  }, [currentPage, perPageItems, returnData, totalItems, onPageChange]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const generatePaginationButtons = () => {
    const buttons = [];
  
    const maxButtons = 8; // Total buttons including Previous and Next
  
    // Calculate start and end page numbers
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);
  
    // Adjust startPage and endPage if required
    if (endPage - startPage < maxButtons - 1) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }
  
    // Show numbered buttons
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={`flex items-center justify-center w-8 h-8 leading-tight ${currentPage === i ? 'text-white border border-purple-300 bg-slate-500 hover:bg-slate-500 ' : 'text-white bg-slate-500 border border-slate-300 hover:bg-slate-700 hover:text-slate-100'} group`}
      >
        <span className={currentPage === i ? 'absolute text-7xl font-light text-purple-700' : ''}>{i}</span>
      </button>
      );
    }
  
    return buttons;
  };
  
  return (
      <ul className="flex items-center -space-x-px min-h-8 text-sm my-2">
        <li>
          <a
            onClick={handlePrevPage}
            className={`flex items-center justify-center px-3 h-8 leading-tight text-slate-500 bg-slate-500 border border-slate-300 rounded-s-lg  ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'} text-white bg-slate-500 border border-slate-300 hover:bg-slate-700 hover:text-slate-100`}
            >
          
            <span className="sr-only">Previous</span>
            <i class="fa-solid fa-angle-left"></i>
          </a>
        </li>
        {generatePaginationButtons()}
        <li>
          <a
            onClick={handleNextPage}
            className={`flex items-center justify-center px-3 h-8 leading-tight text-slate-500 bg-slate-500 border border-slate-300 rounded-e-lg  ${currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'} text-white bg-slate-500 border border-slate-300 hover:bg-slate-700 hover:text-slate-100`}
          >
            <span className="sr-only">Next</span>
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </li>
      </ul>
  );
};

export default Pagination;
