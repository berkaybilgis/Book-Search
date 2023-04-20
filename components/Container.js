import React from "react";
import { useSearch } from "@/context/SearchContext";
import { useRouter } from "next/router";
import { Image } from "@chakra-ui/react"; // chakra-ui kütüphanesinden Image alındı

function Container() {
  const { bookData } = useSearch(); // contextten gelen bookData verisi alındı
  const router = useRouter(); // next.js router atandı

  return (
    <div className="main">
      {/* bookData'nın olma durumuna göre map işlemi yapıldı */}
      {bookData &&
        bookData.length > 0 &&
        bookData.map((book, i) => (
          <div className="card" key={i}>
            {/* apiden image dosyası alındı */}
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
              {/* preview linki oluşturuldu */}
              <a href={book.volumeInfo.previewLink} target="_blank">
                PREVIEW
              </a>
              {/* details butonu oluşturuldu */}
              <button
                className="btn-text"
                onClick={() => {
                  localStorage.setItem("selectedBook", JSON.stringify(book)); // butona her tıklandığında o anki book verisini localStorage'a kaydeder
                  router.push(`/details/${book.volumeInfo.title}`); // butona tıklandığında details sayfasına gider
                }}
              >
                DETAILS
              </button>
            </div>
            {/* card başlık bölümü oluşturuldu */}
            <div className="title">
              {book.volumeInfo.title.length > 60
                ? `${book.volumeInfo.title.substring(0, 60)}...`
                : book.volumeInfo.title}
            </div>
            {/* yazar bölümü oluşturuldu */}
            <div className="author">
              {book.volumeInfo.authors ? book.volumeInfo.authors[0] : ""}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Container;
