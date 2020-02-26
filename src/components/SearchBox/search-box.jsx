import React from "react";
import "./search-box.css";

const SearchBox = props => {
    return (
        <input
            className="search"
            type="search"
            placeholder="Seacrh Monster"
            onChange={props.onSearchFieldChange}
        />
    );
};

export default SearchBox;
