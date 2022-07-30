import React, { useState, createContext, useMemo, useEffect, useContext } from "react";
import { like, likes, setLikes, add, remove, setLike, LikesContext } from "../context/LikesContext";

export const SearchContext = createContext(null);

export function SearchProvider(props) {
  const { likes } = useContext(LikesContext)
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState(null);
  const likesIDs = useMemo(
    () => likes.map((val) => val.data_id),
    [likes]
  );

  useEffect(() => {
    if (data) {
      setSearchResults(data);
    }
  }, [data, setSearchResults]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {props.children}
    </SearchContext.Provider>
  );
}
