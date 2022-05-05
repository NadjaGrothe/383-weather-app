import "./Searchbar.css";

const SearchBar = ({ handleClick }) => {
   return (
      <div>
         <input
            className="searchbar"
            type="text"
            placeholder="search..."
            onClick={handleClick}
         ></input>
      </div>
   );
};

export default SearchBar;
