import React from "react";
import { useGlobalContext } from "./Context";

function SearchForm() {
  const {query, setQuery, error} =useGlobalContext()
  return (
    <div className="search">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="search"
          value={query}
          onChange = {(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchForm;
