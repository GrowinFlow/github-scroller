import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="pagination-controls flex justify-center items-center gap-2 mt-4">
            <button 
                onClick={() => onPageChange(currentPage - 1)} 
                disabled={currentPage === 1}
                className='px-2 md:px-4 py-1 md:py-2 text-sm bg-purple-700 rounded-lg shadow-md active:bg-purple-900 hover:bg-purple-800 disabled:bg-gray-400'>
                Previous
            </button>
            <span className='text-lg'>{currentPage} / {totalPages}</span>
            <button 
                onClick={() => onPageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
                className='px-2 md:px-4 py-1 md:py-2 text-sm bg-purple-700 rounded-lg shadow-md active:bg-purple-900 hover:bg-purple-800 disabled:bg-gray-400'>
                Next
            </button>
        </div>
    );
}

export default Pagination;
