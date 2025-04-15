import React from 'react';
import './Pagination.css'; 

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    const handleClick = (pageNum) => {
        setCurrentPage(pageNum);
    };

    return (
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    onClick={() => handleClick(i + 1)}
                    className={currentPage === i + 1 ? 'active' : ''}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
