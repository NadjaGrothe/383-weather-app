import "./Searchbar.css";
import React, { useState } from "react";

const SearchBar = ({ handleClick }) => {
   const [inputValue, setInputValue] = useState();
   return (
      <div>
         <input
            className="searchbar"
            type="text"
            placeholder="search..."
            // onKeyDown={handleClick(inputValue)}
            onChange={(e) => setInputValue(e.target.value)}
         ></input>
         <button onClick={()=>{handleClick(inputValue)}}>Search</button>
      </div>
   );
};

export default SearchBar;
