import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [filter, setFilter] = useState("");
  const [bookData, setBookData] = useState([]);

  const url = `https://www.googleapis.com/books/v1/volumes?`;
  const key = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    filter === ""
      ? null
      : axios(`${url}q=${filter}&key=${key}`)
          .then((res) => setBookData(res.data.items))
          .catch((err) => console.log(err));
  }, [filter]);

  console.log(bookData);

  const values = { filter, setFilter, bookData, setBookData };
  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
