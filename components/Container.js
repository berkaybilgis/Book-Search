import React from "react";
import Image from "next/image";
import { useSearch } from "@/context/SearchContext";
import { useRouter } from "next/router";

function Container() {
  const { bookData } = useSearch();
  const router = useRouter();

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
            <button
              className="btn-text"
              onClick={() => {
                localStorage.setItem("selectedBook", JSON.stringify(book));
                router.push(`/details/${book.volumeInfo.title}`);
              }}
            >
              Details
            </button>
          </div>
        ))}
    </div>
  );
}

export default Container;
