import React from 'react';
import './Pagination.css'; 

const Pagination = ({ pageNum, setPageNum, pageSize, setPageSize, hasNextPage }) => {

    const handlePageDown = () => {
        setPageNum(pageNum - 1);
    }
    
    const handlePageUp = () => {
        setPageNum(pageNum + 1); 
    }

    const options = [5, 10, 15, 20, 25, 30];
    const onPageSizeChange = (e) => {
        setPageSize(Number(e.target.value));
    };

    return (
        <>
            <div>
                <label htmlFor="pageSizeDropdown">Page size: </label>
                <select id="pageSizeDropdown" value={pageSize} onChange={onPageSizeChange}>
                    {options.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                    ))}
                </select>
            </div>
            <div className="pagination">
                <button onClick={handlePageDown} style={{ visibility: pageNum > 1 ? 'visible' : 'hidden' }}>
                    {"<"}
                </button>
                <button className={'page-num'}>
                    {pageNum}
                </button>
                <button onClick={handlePageUp} style={{ visibility: hasNextPage ? 'visible' : 'hidden' }}>
                    {">"}
                </button>
            </div>
        </>
    );
};

export default Pagination;
