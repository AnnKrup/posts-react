import React from 'react';
import { getPageArr} from '../../../../src/utils/pages';

const MyPagination = ({totalPages, changePage, page}) => {
    let pagesArray = getPageArr(totalPages);

 return (
        <div className="pagination-wrapper">
            <br/>
            {pagesArray.map(p => 
            <span 
                key={p} 
                onClick={() => changePage(p)} 
                className={page === p ? 'page page__current' : 'page'}
                >
                    {p}
                </span>
            )}
            <br/>
        </div>
    );
};

export default MyPagination;
