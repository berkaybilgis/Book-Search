import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"; // apiden veri çekmek için axios import edildi

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [filter, setFilter] = useState(""); // submit işlemi tamamnladığında alınan değeri tutan state
  // bu state apiden aldığımız datayı localStorage'dan alıyor
  const [bookData, setBookData] = useState(() => {
    // localStorage tanımlanma durumu kontrol ediliyor
    if (typeof localStorage !== "undefined") {
      // localStorage'dan bookData verisi alınıyor
      const storedData = localStorage.getItem("bookData");
      return storedData ? JSON.parse(storedData) : [];
    } else {
      return [];
    }
  });

  const url = `https://www.googleapis.com/books/v1/volumes?`; // api adresi
  const key = process.env.NEXT_PUBLIC_API_KEY; // api kullanımı için gereken şifre

  // apiden filter state durumuna bağlı olarak veriyi çeker ve localStorage'a kaydeder
  useEffect(() => {
    filter === ""
      ? null
      : axios(`${url}q=${filter}&key=${key}`)
          .then((res) => {
            setBookData(res.data.items);
            localStorage.setItem("bookData", JSON.stringify(res.data.items));
          })
          .catch((err) => console.log(err));
  }, [filter]);

  // sayfa kullanıcı tarafından yenilendiğinde localStorage'daki bookData verisini siler
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // sayfa yenilendiğinde silme işlemi yapan fonksiyon
  const handleBeforeUnload = () => {
    localStorage.removeItem("bookData");
  };

  const values = { filter, setFilter, bookData, setBookData }; // context value propları
  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext); // useContext işlemi sade bir tanıma aktarıldı
