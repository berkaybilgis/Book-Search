import React from "react";
import { useSearch } from "@/context/SearchContext";
import { useRouter } from "next/router";
import { Image } from "@chakra-ui/react";

function Container() {
  const { bookData } = useSearch();
  const router = useRouter();

  return (
    <div className="main">
      {bookData &&
        bookData.length > 0 &&
        bookData.map((book, i) => (
          <div className="card" key={i}>
            <Image
              className="image"
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : "https://cdn11.bigcommerce.com/s-1812kprzl2/images/stencil/original/products/448/5071/no-image__13489.1665668163.jpg?c=2"
              }
              alt="book"
              w="200px"
              h="250px"
              objectFit="cover"
            />

            <div className="footer">
              <a href={book.volumeInfo.previewLink} target="_blank">
                PREVIEW
              </a>
              <button
                className="btn-text"
                onClick={() => {
                  localStorage.setItem("selectedBook", JSON.stringify(book));
                  router.push(`/details/${book.volumeInfo.title}`);
                }}
              >
                DETAILS
              </button>
            </div>

            <div className="title">
              {book.volumeInfo.title.length > 60
                ? `${book.volumeInfo.title.substring(0, 60)}...`
                : book.volumeInfo.title}
            </div>
            <div className="author">
              {book.volumeInfo.authors ? book.volumeInfo.authors[0] : ""}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Container;
