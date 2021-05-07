import React from 'react'


interface SearchProps  {

};

const SearchField: React.FC<SearchProps>  = ({ 
    ...props

}) => {

    return (
        <div>
            <input type="text" className="textbox search" name="searchbox" placeholder="What are you looking for?" />
        </div>
    )
};
export { SearchField };