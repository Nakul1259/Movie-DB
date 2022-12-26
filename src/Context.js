import React, { useState, useContext, useEffect } from "react";
// make sure to use https
import useFetch from './useFetch'
const AppContext = React.createContext();
export const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppProvider = ({ children }) => {

    const [query, setQuery] = useState("X-men");
    const{loading, error, data: movies} = useFetch(`&s=${query}`)

  return (
    <AppContext.Provider
      value={{
        movies,
        loading,
        error,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
