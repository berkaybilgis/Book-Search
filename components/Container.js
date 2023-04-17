import React from "react";
import Image from "next/image";
import { useSearch } from "@/context/SearchContext";

function Container() {
  const { bookData, setBookData } = useSearch();

  return (
    <div>
      {bookData &&
        bookData.length > 0 &&
        bookData.map((book, i) => (
          <div className="card" key={i}>
            <img
              className="image"
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : null
              }
              alt="book"
            />
            <div className="title">{book.volumeInfo.title}</div>
            <div className="author">{book.volumeInfo.authors}</div>
            <a href={book.volumeInfo.previewLink} target="_blank">
              Preview
            </a>
            <button className="btn-text">Details</button>
          </div>
        ))}
    </div>
  );
}

export default Container;
